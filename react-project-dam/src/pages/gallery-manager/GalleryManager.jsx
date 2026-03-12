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

    // OBRAS

    const [artworks, setArtworks] = useState(() => {
        const saved = localStorage.getItem("artworks");
        return saved ? JSON.parse(saved) : initialArtworks;
    });

    // BUSCADOR

    const [searchCategory, setSearchCategory] = useState("");

    // FORMULARIO

    const [formData, setFormData] = useState({
        id: "",
        title: "",
        artist: "",
        category: ""
    });

    const [editingId, setEditingId] = useState(null);

    // NOTICIAS

    const [news, setNews] = useState(() => {
        const savedNews = localStorage.getItem("news");
        return savedNews ? JSON.parse(savedNews) : [];
    });

    const addNews = (title, description) => {

        const newNews = {
            id: Date.now(),
            title,
            description,
            date: new Date().toLocaleDateString()
        };

        const updatedNews = [newNews, ...news];

        setNews(updatedNews);

        localStorage.setItem("news", JSON.stringify(updatedNews));
    };

    // INPUTS

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // SUBMIT

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingId !== null) {

            const updatedArtworks = artworks.map((art) =>
                art.id === editingId
                    ? { ...formData, id: Number(editingId) }
                    : art
            );

            setArtworks(updatedArtworks);

            localStorage.setItem("artworks", JSON.stringify(updatedArtworks));

            addNews(
                "Obra actualizada",
                `La obra "${formData.title}" ha sido actualizada`
            );

            setEditingId(null);

        } else {

            const updatedArtworks = [
                ...artworks,
                { ...formData, id: Number(formData.id) }
            ];

            setArtworks(updatedArtworks);

            localStorage.setItem("artworks", JSON.stringify(updatedArtworks));

            addNews(
                "Nueva obra añadida",
                `Se ha añadido "${formData.title}" de ${formData.artist} a la galería`
            );
        }

        setFormData({
            id: "",
            title: "",
            artist: "",
            category: ""
        });
    };

    // BORRAR

    const deleteArtwork = (id) => {

        const updatedArtworks = artworks.filter((art) => art.id !== id);

        setArtworks(updatedArtworks);

        localStorage.setItem("artworks", JSON.stringify(updatedArtworks));

        addNews(
            "Obra eliminada",
            "Se ha eliminado una obra de la galería"
        );
    };

    // EDITAR

    const editArtwork = (art) => {

        setFormData({
            id: art.id,
            title: art.title,
            artist: art.artist,
            category: art.category
        });

        setEditingId(art.id);
    };

    // FILTRADO

    const filteredArtworks = artworks.filter((art) =>
        art.category.toLowerCase().includes(searchCategory.toLowerCase())
    );

    return (
        <>
            <Header />

            <main className="gallery-manager">

                <h1>Galería gestionable</h1>

                {/* FORMULARIO */}

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

                {/* BUSCADOR */}

                <div className="gallery-search">

                    <input
                        placeholder="Buscar por categoría (ej: cubismo)"
                        value={searchCategory}
                        onChange={(e) => setSearchCategory(e.target.value)}
                    />

                </div>

                {/* GRID DE OBRAS */}

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