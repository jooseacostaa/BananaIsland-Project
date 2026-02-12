import "./header.css";
import logo from "../../assets/icons/headerLogoIcon.png";

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <a href="/">
                    <img src={logo} alt="MyApp Logo" className="header__logo-img" />
                </a>
            </div>

            <nav className="header__nav">
                <Link to="/home">Banana Island</Link>

                <a href="#gallery">Gallery</a>

                <Link to="/projects">Proyectos</Link>
                <Link to="/findme">Encuéntrame</Link>
                <Link to="/termsprivacity">Términos y Condiciones</Link>

                <a href="#about">Sobre mí</a>
                <a href="#contact">Contacto</a>
            </nav>
        </header>
    );
};

export default Header;
