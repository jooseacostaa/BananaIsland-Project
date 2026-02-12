import "./About.css";

import imgPerfil from "../../assets/images/perfilimg.png";

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__header">
                <h2>Sobre mí</h2>
                <p>Un poco de contexto para que sepan quién está detrás del código.</p>
            </div>

            <div className="about__content">
                <div className="about__image">
                    <img
                        src={imgPerfil} alt="Foto de perfil" />
                </div>

                <div className="about__details">
                    <div className="about__text">
                        <p>
                            Soy desarrollador de aplicaciones con enfoque en interfaces modernas,
                            accesibles y fáciles de mantener. Me gusta escribir código limpioy aprender cosas nuevas.
                        </p>

                        <p>
                            Trabajo principalmente con React, pero no me caso con ninguna
                            tecnología: lo importante es que la solución funcione y sea elegante.
                        </p>
                    </div>

                    <div className="about__cards">
                        <div className="about__card">
                            <h3>Frontend</h3>
                            <p>React, Vite, HTML, CSS, JavaScript</p>
                        </div>

                        <div className="about__card">
                            <h3>Backend</h3>
                            <p>Node.js, APIs REST, bases de datos</p>
                        </div>

                        <div className="about__card">
                            <h3>Extras</h3>
                            <p>Git, buenas prácticas, diseño limpio</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
