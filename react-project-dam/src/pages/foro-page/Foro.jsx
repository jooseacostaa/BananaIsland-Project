import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";

import "./Foro.css";

import { useEffect, useState } from "react";
import { db } from "../../services/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

function Foro() {
    const [posts, setPosts] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

    useEffect(() => {
        const obtenerPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "posts"));
            const datos = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setPosts(datos);
        };

        obtenerPosts();
    }, []);

    const postsFiltrados = posts.filter(
        post => categoriaSeleccionada === "Todas" || post.categoria === categoriaSeleccionada
    );

    const categorias = [...new Set(posts.map(post => post.categoria))].sort();

    return (
        <>
            <Header />

            <div className="foro-header">
                <h2>Foro de Posts</h2>
                <p>Consulta los posts por categoría</p>

                <div className="foro-filtro">
                    <label htmlFor="categoria">Filtrar por categoría:</label>
                    <select
                        id="categoria"
                        value={categoriaSeleccionada}
                        onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                    >
                        <option value="Todas">Todas</option>
                        {categorias.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="foro-container">
                {posts.length === 0 ? (
                    <p className="foro-empty">Cargando posts...</p>
                ) : postsFiltrados.length === 0 ? (
                    <p className="foro-empty">No hay posts en esta categoría</p>
                ) : (
                    postsFiltrados.map(post => (
                        <div key={post.id} className="post-card">
                            <h3>{post.titulo}</h3>
                            <p>{post.categoria}</p>
                        </div>
                    ))
                )}
            </div>

            <Footer />
        </>
    );
}

export default Foro;