import "./footer.css";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa6";
import logo from "../../assets/icons/headerLogoIcon.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__brand">
                    <a href="/" className="footer__logo">
                        <img src={logo} alt="Logo de MyApp" />
                    </a>
                    <p>Galería de arte digital</p>
                </div>

                <div className="footer__links">
                    <div>
                        <span>Social</span>

                        <a href="https://github.com/jooseacostaa" target="_blank">
                            <FaGithub />
                        </a>
                        <a href="https://youtube.com" target="_blank">
                            <FaYoutube />
                        </a>
                        <a href="https://linkedin.com" target="_blank">
                            <FaLinkedin />
                        </a>
                    </div>

                    <div>
                        <span>Recursos</span>
                        <a href="#">Documentación</a>
                        <a href="#">Blog</a>
                        <a href="#">Soporte</a>
                    </div>

                    <div>
                        <span>Legal</span>
                        <a href="/termsprivacity">Privacidad y Cookies</a>
                        <a href="/termsprivacity">Términos y Condiciones</a>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <span>
                    © {new Date().getFullYear()} Banana Island. Todos los derechos
                    reservados Política de Privacidad y Cookies | Condiciones de Venta.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
