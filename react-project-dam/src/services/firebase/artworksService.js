import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const COLLECTION_NAME = "artworks";

const normalizeArtwork = (artwork) => ({
    id: Number(artwork.id),
    title: String(artwork.title ?? ""),
    artist: String(artwork.artist ?? ""),
    category: String(artwork.category ?? ""),
});

export const fetchArtworks = async () => {
    const snapshot = await getDocs(collection(db, COLLECTION_NAME));

    return snapshot.docs
        .map((docSnap) =>
            normalizeArtwork({
                id: docSnap.id,
                ...docSnap.data(),
            })
        )
        .filter((artwork) => Number.isFinite(artwork.id))
        .sort((a, b) => a.id - b.id);
};

export const saveArtwork = async (artwork) => {
    const normalized = normalizeArtwork(artwork);

    if (!Number.isFinite(normalized.id)) {
        throw new Error("El ID debe ser numérico");
    }

    if (!normalized.title || !normalized.artist || !normalized.category) {
        throw new Error("Rellena todos los campos");
    }

    await setDoc(doc(db, COLLECTION_NAME, String(normalized.id)), {
        title: normalized.title,
        artist: normalized.artist,
        category: normalized.category,
    });

    return normalized;
};

export const deleteArtworkById = async (id) => {
    await deleteDoc(doc(db, COLLECTION_NAME, String(id)));
};

export const replaceAllArtworks = async (artworks) => {
    const snapshot = await getDocs(collection(db, COLLECTION_NAME));

    await Promise.all(snapshot.docs.map((docSnap) => deleteDoc(docSnap.ref)));
    await Promise.all(artworks.map(saveArtwork));
};