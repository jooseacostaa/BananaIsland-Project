import "./Hero.css";
import heroImage from "../../assets/images/heroImg2.png";

import logoImage from "../../assets/icons/headerLogoIcon.png";

// Imágenes de las cards
import cardImg1 from "../../assets/hero-images/heroImg1.png";
import cardImg2 from "../../assets/hero-images/heroImg2.png";
import cardImg3 from "../../assets/hero-images/heroImg3.png";
import cardImg4 from "../../assets/hero-images/heroImg4.png";
import cardImg5 from "../../assets/hero-images/heroImg5.png";
import cardImg6 from "../../assets/hero-images/heroImg6.png";
import cardImg7 from "../../assets/hero-images/heroImg7.png";
import cardImg8 from "../../assets/hero-images/heroImg8.png";
import cardImg9 from "../../assets/hero-images/heroImg9.png";
import cardImg10 from "../../assets/hero-images/heroImg10.png";
import cardImg11 from "../../assets/hero-images/heroImg11.png";

const cardsData = [
    {
        title: "Adieu! (1892)",
        description: "By Alfred Guillou (1844–1926)",
        image: cardImg1,
    },
    {
        title: "Aeneas and the Sibyl (1800)",
        description: "Formerly attributed to John Martin (1789–1854)",
        image: cardImg2,
    },
    {
        title: "A satire on the criticism of Witkiewicz, (1890)",
        description: "By Wojciech Piechowski (1849-1911)",
        image: cardImg3,
    },
    {
        title: "Inferno, (1410)",
        description: "By Giovanni da Modena (1379–1455)",
        image: cardImg4,
    },
    {
        title: "Daniel’s Answer to the King (1890)",
        description: "By Briton Rivière (1840–1920)",
        image: cardImg5,
    },
    {
        title: "Lucifer in Ice (1860)",
        description: "By Filippo Bigioli (1798-1878) ",
        image: cardImg6,
    },
    {
        title: "The Temptation of St. Anthony (1650)",
        description: "By Joos van Craesbeeck (1605–1654/1661)",
        image: cardImg7,
    },
    {
        title: "Still Life of the Remnants of a Meal with a Lunging Cat",
        description: "By Alexandre-François Desportes (1661–1743)",
        image: cardImg8,
    },
    {
        title: "Joshua Commanding the Sun to Stand Still upon Gibeon (1816)",
        description: "By John Martin (1789-1854)",
        image: cardImg9,
    },
    {
        title: "Inferno (1800’s)",
        description: "Attributed to the English School",
        image: cardImg10,
    },
    {
        title: "Still Life with a Cat, (late 17th–early 18th century)",
        description: "Alexandre-François Desportes (1661–1743)",
        image: cardImg11,
    },
];

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__image-container">
                <img src={heroImage} alt="Hero Banner" className="hero__image" />
            </div>

            <div className="hero__content-wrapper">
                <div className="hero__content">
                    <img
                        src={logoImage}
                        alt="Banana Island Logo"
                        className="hero__logo"
                    />
                    <p>Digital Gallery of Art</p>
                </div>

                <div id="gallery" className="hero__cards">
                    {cardsData.map((card, index) => (
                        <div className="hero__card" key={index}>
                            <div className="hero__card-image">
                                <img src={card.image} alt={card.title} />
                            </div>

                            <div className="hero__card-content">
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
