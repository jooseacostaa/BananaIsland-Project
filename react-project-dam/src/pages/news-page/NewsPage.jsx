import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./NewsPage.css";

const NewsPage = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const savedNews = localStorage.getItem("news");

        if (savedNews) {
            setNews(JSON.parse(savedNews));
        }
    }, []);

    return (
        <>
            <Header />

            <main className="news-page">

                <h1>Noticias de Banana Island</h1>

                <div className="news-grid">

                    {news.length === 0 && (
                        <p>No hay noticias todavía.</p>
                    )}

                    {news.map((item) => (

                        <div key={item.id} className="news-card">

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                            <span>{item.date}</span>

                        </div>

                    ))}

                </div>

            </main>

            <Footer />
        </>
    );
};

export default NewsPage;