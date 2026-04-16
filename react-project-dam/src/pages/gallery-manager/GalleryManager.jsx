import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
    deleteArtworkById,
    fetchArtworks,
    replaceAllArtworks,
    saveArtwork,
} from "../../services/firebase/artworksService";

import {
    artworksToCSV,
    artworksToJSON,
    artworksToXML,
    csvToArtworks,
    downloadTextFile,
    jsonToArtworks,
    xmlToArtworks,
    xlsxToArtworks,
    artworksToXLSX,
} from "../../utils/artworkFileUtils";

import "./GalleryManager.css";

const initialArtworks = [
    { id: 1, title: "La noche estrellada", artist: "Van Gogh", category: "Postimpresionismo" },
    { id: 2, title: "Guernica", artist: "Picasso", category: "Cubismo" },
    { id: 3, title: "La persistencia de la memoria", artist: "Dalí", category: "Surrealismo" },
];

const GalleryManager = () => {
    const fileInputRef = useRef(null);

    const [artworks, setArtworks] = useState([]);
    const [searchCategory, setSearchCategory] = useState("");
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState("");

    const [formData, setFormData] = useState({
        id: "",
        title: "",
        artist: "",
        category: "",
    });

    const [editingId, setEditingId] = useState(null);

    const loadArtworks = async () => {
        try {
            setLoading(true);
            setStatus("");

            const data = await fetchArtworks();

            if (data.length === 0) {
                await replaceAllArtworks(initialArtworks);
                setArtworks(initialArtworks);
            } else {
                setArtworks(data);
            }
        } catch (error) {
            setStatus(error.message || "No se pudieron cargar las obras");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadArtworks();
    }, []);

    const resetForm = () => {
        setFormData({
            id: "",
            title: "",
            artist: "",
            category: "",
        });
        setEditingId(null);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setStatus("");

            await saveArtwork({
                id: Number(formData.id),
                title: formData.title,
                artist: formData.artist,
                category: formData.category,
            });

            await loadArtworks();
            resetForm();
        } catch (error) {
            setStatus(error.message || "No se ha podido guardar la obra");
        }
    };

    const deleteArtwork = async (id) => {
        const confirmed = window.confirm("¿Seguro que quieres borrar esta obra?");
        if (!confirmed) return;

        try {
            await deleteArtworkById(id);
            await loadArtworks();
        } catch (error) {
            setStatus(error.message || "No se ha podido borrar la obra");
        }
    };

    const editArtwork = (art) => {
        setFormData({
            id: String(art.id),
            title: art.title,
            artist: art.artist,
            category: art.category,
        });
        setEditingId(art.id);
    };

    const filteredArtworks = artworks.filter((art) =>
        art.category.toLowerCase().includes(searchCategory.toLowerCase())
    );

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileImport = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            setStatus("");

            const extension = file.name.split(".").pop()?.toLowerCase();
            let importedArtworks = [];

            if (extension === "csv") {
                const text = await file.text();
                importedArtworks = csvToArtworks(text);
            } else if (extension === "json") {
                const text = await file.text();
                importedArtworks = jsonToArtworks(text);
            } else if (extension === "xml") {
                const text = await file.text();
                importedArtworks = xmlToArtworks(text);
            } else if (extension === "xlsx") {
                importedArtworks = await xlsxToArtworks(file);
            } else {
                throw new Error("Formato no soportado");
            }

            if (importedArtworks.length === 0) {
                throw new Error("El archivo no contiene obras válidas");
            }

            await replaceAllArtworks(importedArtworks);
            await loadArtworks();

            setStatus(`Importadas ${importedArtworks.length} obras correctamente`);
        } catch (error) {
            setStatus(error.message || "Error importando el archivo");
        } finally {
            e.target.value = "";
        }
    };

    const handleExport = async (format) => {
        try {
            setStatus("");

            const currentArtworks = await fetchArtworks();

            if (currentArtworks.length === 0) {
                throw new Error("No hay obras para exportar");
            }

            if (format === "csv") {
                downloadTextFile(artworksToCSV(currentArtworks), "datos.csv", "text/csv;charset=utf-8");
            }

            if (format === "json") {
                downloadTextFile(artworksToJSON(currentArtworks), "datos.json", "application/json;charset=utf-8");
            }

            if (format === "xml") {
                downloadTextFile(artworksToXML(currentArtworks), "datos.xml", "application/xml;charset=utf-8");
            }

            if (format === "xlsx") {
                artworksToXLSX(currentArtworks);
            }

        } catch (error) {
            setStatus(error.message || "Error exportando los datos");
        }
    };

    return (
        <>
            <Header />

            <main className="gallery-manager">
                <h1>Galería gestionable</h1>

                <form className="gallery-form" onSubmit={handleSubmit}>
                    <input name="id" placeholder="ID" value={formData.id} onChange={handleChange} required disabled={editingId !== null} />
                    <input name="title" placeholder="Título" value={formData.title} onChange={handleChange} required />
                    <input name="artist" placeholder="Artista" value={formData.artist} onChange={handleChange} required />
                    <input name="category" placeholder="Categoría" value={formData.category} onChange={handleChange} required />

                    <button type="submit">
                        {editingId ? "Actualizar obra" : "Añadir obra"}
                    </button>
                </form>

                <div className="gallery-actions">
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".csv,.json,.xml,.xlsx"
                        onChange={handleFileImport}
                        className="gallery-file-input"
                    />

                    <button type="button" onClick={handleImportClick}>
                        Importar archivo
                    </button>

                    <button onClick={() => handleExport("csv")}>CSV</button>
                    <button onClick={() => handleExport("json")}>JSON</button>
                    <button onClick={() => handleExport("xml")}>XML</button>
                    <button onClick={() => handleExport("xlsx")}>Excel</button>
                </div>

                <div className="gallery-search">
                    <input
                        placeholder="Buscar por categoría..."
                        value={searchCategory}
                        onChange={(e) => setSearchCategory(e.target.value)}
                    />
                </div>

                {status && <p className="gallery-status">{status}</p>}

                {loading ? (
                    <p>Cargando obras...</p>
                ) : (
                    <div className="gallery-grid">
                        {filteredArtworks.map((art) => (
                            <div key={art.id} className="gallery-card">
                                <h3>{art.title}</h3>
                                <p><strong>Artista:</strong> {art.artist}</p>
                                <p><strong>Categoría:</strong> {art.category}</p>

                                <div className="gallery-card-actions">
                                    <button onClick={() => editArtwork(art)}>Editar</button>
                                    <button onClick={() => deleteArtwork(art.id)}>Borrar</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </>
    );
};

export default GalleryManager;