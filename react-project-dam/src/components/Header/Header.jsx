import "./header.css";
import logo from "../../assets/icons/headerLogoIcon.png";

import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/">
                    <img src={logo} alt="MyApp Logo" className="header__logo-img" />
                </Link>
            </div>

            <button
                className="header__toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            <nav className={`header__nav ${menuOpen ? "active" : ""}`}>
                <Link to="/home">Banana Island</Link>

                <a href="#gallery">Gallery</a>

                <Link to="/projects">Proyectos</Link>
                <Link to="/findme">Encuéntrame</Link>
                <Link to="/foro">Foro</Link>
                <Link to="/rss">Noticias</Link>
                <Link to="/termsprivacity">Términos y Condiciones</Link>

                <a href="#about">Sobre mí</a>
                <a href="#contact">Contacto</a>
            </nav>
        </header>
    );
};

export default Header;