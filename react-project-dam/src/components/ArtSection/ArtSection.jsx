import "./ArtSection.css";

import cardArtImg1 from "../../assets/art-section-images/artSection1.png";
import cardArtImg2 from "../../assets/art-section-images/artSection2.png";
import cardArtImg3 from "../../assets/art-section-images/artSection3.png";
import cardArtImg4 from "../../assets/art-section-images/artSection4.png";
import cardArtImg5 from "../../assets/art-section-images/artSection5.png";
import cardArtImg6 from "../../assets/art-section-images/artSection6.png";
import cardArtImg7 from "../../assets/art-section-images/artSection7.png";

const featuredData = [
    { id: 1, title: "The Wild Hunt of Odin (1872)", description: "By Peter Nicolai Arbo (1831–1892)", image: cardArtImg1 },
    { id: 2, title: "The Gazebo or The Garden Bower (1818)", description: "By Caspar David Friedrich (1774–1840)", image: cardArtImg2 },
    { id: 3, title: "Vestibule of the Painter’s House, 1860s–1880s", description: "By Henri de Braekeleer (1840–1888)", image: cardArtImg3 },
    { id: 4, title: "The Triumph of Light over Darkness (1905)", description: "By Franz von Matsch (1861–1942)", image: cardArtImg4 },
    { id: 5, title: "The Taking of Christ, (1602)", description: "By Caravaggio (1571–1610)", image: cardArtImg5 },
    { id: 6, title: "Prometheus’ Liberation (1864)", description: "By Carl Bloch (1834–1890)", image: cardArtImg6 },
    { id: 7, title: "The Battle of Alexander at Issus", description: "By Albrecht Altdorfer (1480–1538)", image: cardArtImg7 },
];

const Featured = () => {
    return (
        <section className="featured">
            <h2 className="featured__title">Sección Destacada</h2>
            <p className="featured__subtitle">
                Algunos cuadros más dinámicos y creativos para mostrar contenido especial
            </p>

            <div className="featured__cards">
                {featuredData.map((card, index) => (
                    <div
                        key={card.id}
                        className={`featured__card featured__card--${index + 1}`}
                    >
                        {card.image && (
                            <div className="featured__card-image">
                                <img src={card.image} alt={card.title} />
                            </div>
                        )}
                        <div className="featured__card-content">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Featured;
