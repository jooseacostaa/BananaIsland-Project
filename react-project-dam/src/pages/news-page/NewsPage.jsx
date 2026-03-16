import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./NewsPage.css";

const NewsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const loadRSS = async () => {

            try {

                const response = await fetch("/rss.xml");
                const text = await response.text();

                const parser = new DOMParser();
                const xml = parser.parseFromString(text, "text/xml");

                const items = Array.from(xml.querySelectorAll("item")).map(item => ({
                    title: item.querySelector("title")?.textContent,
                    description: item.querySelector("description")?.textContent,
                    link: item.querySelector("link")?.textContent,
                    pubDate: item.querySelector("pubDate")?.textContent
                }));

                setPosts(items);

            } catch (error) {
                console.error("Error loading RSS:", error);
            }

        };

        loadRSS();

    }, []);

    return (
        <>
            <Header />

            <main className="news-page">

                <h1>Art News</h1>

                <div className="rss-button-container">
                    <a href="/rss.xml" target="_blank" className="rss-button">
                        Ver el RSS Feed (XML)
                    </a>
                </div>

                <div className="news-grid">

                    {posts.map((post, index) => (

                        <div key={index} className="news-card">

                            <h3>{post.title}</h3>

                            <p>{post.description}</p>

                            <span className="news-date">{post.pubDate}</span>

                            <a href={post.link} target="_blank" rel="noreferrer">
                                Read more
                            </a>

                        </div>

                    ))}

                </div>

            </main>

            <Footer />
        </>
    );
};

export default NewsPage;