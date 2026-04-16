const HEADER = ["id", "title", "artist", "category"];

const normalizeArtwork = (row) => {
    const artwork = {
        id: Number(row.id ?? row.ID ?? row.Id ?? ""),
        title: String(row.title ?? row.titulo ?? row.nombre ?? ""),
        artist: String(row.artist ?? row.artista ?? ""),
        category: String(row.category ?? row.categoria ?? ""),
    };

    if (
        !Number.isFinite(artwork.id) ||
        !artwork.title ||
        !artwork.artist ||
        !artwork.category
    ) {
        return null;
    }

    return artwork;
};

const escapeCSV = (value) => {
    const text = String(value ?? "");
    if (/[",;\n]/.test(text)) {
        return `"${text.replace(/"/g, '""')}"`;
    }
    return text;
};

const parseCsvLine = (line, delimiter) => {
    const values = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
            if (inQuotes && line[i + 1] === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === delimiter && !inQuotes) {
            values.push(current);
            current = "";
        } else {
            current += char;
        }
    }

    values.push(current);
    return values.map((value) => value.trim());
};

const detectDelimiter = (headerLine) => {
    const commaCount = (headerLine.match(/,/g) || []).length;
    const semicolonCount = (headerLine.match(/;/g) || []).length;
    return semicolonCount > commaCount ? ";" : ",";
};

export const csvToArtworks = (text) => {
    const lines = text.trim().split(/\r?\n/).filter(Boolean);

    if (lines.length < 2) {
        return [];
    }

    const delimiter = detectDelimiter(lines[0]);
    const headers = parseCsvLine(lines[0], delimiter).map((h) =>
        h.trim().toLowerCase()
    );

    return lines
        .slice(1)
        .map((line) => {
            const values = parseCsvLine(line, delimiter);
            const row = Object.fromEntries(
                headers.map((header, index) => [header, values[index] ?? ""])
            );
            return normalizeArtwork(row);
        })
        .filter(Boolean);
};

export const artworksToCSV = (artworks) => {
    const rows = [
        HEADER.join(","),
        ...artworks.map((artwork) =>
            [
                escapeCSV(artwork.id),
                escapeCSV(artwork.title),
                escapeCSV(artwork.artist),
                escapeCSV(artwork.category),
            ].join(",")
        ),
    ];

    return rows.join("\n");
};

export const jsonToArtworks = (text) => {
    const parsed = JSON.parse(text);
    const list = Array.isArray(parsed) ? parsed : parsed.artworks ?? parsed.datos ?? [];

    if (!Array.isArray(list)) {
        throw new Error("JSON inválido");
    }

    return list.map(normalizeArtwork).filter(Boolean);
};

export const artworksToJSON = (artworks) => {
    return JSON.stringify(artworks, null, 2);
};

const escapeXML = (value) =>
    String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

export const xmlToArtworks = (text) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "application/xml");

    if (xmlDoc.querySelector("parsererror")) {
        throw new Error("XML inválido");
    }

    const nodes = Array.from(xmlDoc.querySelectorAll("artwork"));

    if (nodes.length === 0) {
        throw new Error("No se han encontrado nodos <artwork>");
    }

    return nodes
        .map((node) =>
            normalizeArtwork({
                id: node.querySelector("id")?.textContent?.trim(),
                title: node.querySelector("title")?.textContent?.trim(),
                artist: node.querySelector("artist")?.textContent?.trim(),
                category: node.querySelector("category")?.textContent?.trim(),
            })
        )
        .filter(Boolean);
};

export const artworksToXML = (artworks) => {
    const artworksXML = artworks
        .map(
            (artwork) => `
  <artwork>
    <id>${escapeXML(artwork.id)}</id>
    <title>${escapeXML(artwork.title)}</title>
    <artist>${escapeXML(artwork.artist)}</artist>
    <category>${escapeXML(artwork.category)}</category>
  </artwork>`
        )
        .join("");

    return `<?xml version="1.0" encoding="UTF-8"?>
<artworks>${artworksXML}
</artworks>`;
};

export const downloadTextFile = (content, fileName, mimeType) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();

    URL.revokeObjectURL(url);
};

import * as XLSX from "xlsx";

export const artworksToXLSX = (artworks) => {
    const worksheet = XLSX.utils.json_to_sheet(artworks);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Artworks");

    XLSX.writeFile(workbook, "datos.xlsx");
};

export const xlsxToArtworks = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: "array" });

                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];

                const jsonData = XLSX.utils.sheet_to_json(worksheet);

                resolve(jsonData);
            } catch (error) {
                reject(new Error("Error leyendo archivo Excel"));
            }
        };

        reader.onerror = () => reject(new Error("Error leyendo archivo"));

        reader.readAsArrayBuffer(file);
    });
};