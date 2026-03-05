import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import RssCard from "../../components/rss-card/RssCard";

const RssPage = () => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://feeds.bbci.co.uk/news/technology/rss.xml")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPosts(data.items || []);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <Header />

            <main style={{ padding: "2rem" }}>
                <h1>Noticias</h1>

                {isLoading && <p>Cargando noticias...</p>}

                {!isLoading && posts.length === 0 && (
                    <p>No se pudieron cargar noticias.</p>
                )}

                {!isLoading &&
                    posts.map((post, index) => (
                        <RssCard
                            key={index}
                            title={post.title}
                            description={post.description}
                            link={post.link}
                        />
                    ))}
            </main>

            <Footer />
        </>
    );
};

export default RssPage;