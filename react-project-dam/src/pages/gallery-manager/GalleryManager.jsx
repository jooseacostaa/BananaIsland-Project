import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./GalleryManager.css";

const initialArtworks = [
    { id: 1, title: "La noche estrellada", artist: "Van Gogh", category: "Postimpresionismo" },
    { id: 2, title: "Guernica", artist: "Picasso", category: "Cubismo" },
    { id: 3, title: "La persistencia de la memoria", artist: "Dalí", category: "Surrealismo" }
];

const GalleryManager = () => {

    const [artworks, setArtworks] = useState(() => {
        const saved = localStorage.getItem("artworks");
        return saved ? JSON.parse(saved) : initialArtworks;
    });

    const [searchCategory, setSearchCategory] = useState("");

    const [formData, setFormData] = useState({
        id: "",
        title: "",
        artist: "",
        category: ""
    });

    const [editingId, setEditingId] = useState(null);


    const saveArtworks = (data) => {
        setArtworks(data);
        localStorage.setItem("artworks", JSON.stringify(data));
    };


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingId !== null) {

            const updated = artworks.map((art) =>
                art.id === editingId ? { ...formData, id: editingId } : art
            );

            saveArtworks(updated);
            setEditingId(null);

        } else {

            const newArtwork = {
                ...formData,
                id: Number(formData.id)
            };

            saveArtworks([...artworks, newArtwork]);
        }

        setFormData({
            id: "",
            title: "",
            artist: "",
            category: ""
        });
    };


    const deleteArtwork = (id) => {
        const updated = artworks.filter((art) => art.id !== id);
        saveArtworks(updated);
    };


    const editArtwork = (art) => {
        setFormData(art);
        setEditingId(art.id);
    };


    const filteredArtworks = artworks.filter((art) =>
        art.category.toLowerCase().includes(searchCategory.toLowerCase())
    );


    return (
        <>
            <Header />

            <main className="gallery-manager">

                <h1>Galería gestionable</h1>

                <form className="gallery-form" onSubmit={handleSubmit}>

                    <input
                        name="id"
                        placeholder="ID"
                        value={formData.id}
                        onChange={handleChange}
                        required
                        disabled={editingId !== null}
                    />

                    <input
                        name="title"
                        placeholder="Título"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="artist"
                        placeholder="Artista"
                        value={formData.artist}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="category"
                        placeholder="Categoría"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        {editingId ? "Actualizar obra" : "Añadir obra"}
                    </button>

                </form>


                <div className="gallery-search">

                    <input
                        placeholder="Buscar por categoría..."
                        value={searchCategory}
                        onChange={(e) => setSearchCategory(e.target.value)}
                    />

                </div>


                <div className="gallery-grid">

                    {filteredArtworks.map((art) => (

                        <div key={art.id} className="gallery-card">

                            <h3>{art.title}</h3>

                            <p><strong>Artista:</strong> {art.artist}</p>

                            <p><strong>Categoría:</strong> {art.category}</p>

                            <div className="gallery-card-actions">

                                <button
                                    className="gallery-edit"
                                    onClick={() => editArtwork(art)}
                                >
                                    Editar
                                </button>

                                <button
                                    className="gallery-delete"
                                    onClick={() => deleteArtwork(art.id)}
                                >
                                    Borrar
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </main>

            <Footer />
        </>
    );
};

export default GalleryManager;