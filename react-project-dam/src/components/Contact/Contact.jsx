import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact__header">
                <h2>Contacto</h2>
                <p>
                    ¿Tienes una idea, un proyecto o simplemente quieres saludar?
                </p>
            </div>

            <div className="contact__container">
                <form className="contact__form">
                    <div className="contact__field">
                        <label>Nombre</label>
                        <input type="text" placeholder="Tu nombre" />
                    </div>

                    <div className="contact__field">
                        <label>Email</label>
                        <input type="email" placeholder="tu@email.com" />
                    </div>

                    <div className="contact__field">
                        <label>Mensaje</label>
                        <textarea
                            rows="5"
                            placeholder="Cuéntame en qué puedo ayudarte"
                        ></textarea>
                    </div>

                    <button type="submit" className="contact__btn">
                        Enviar mensaje
                    </button>
                </form>

                <div className="contact__info">
                    <div className="contact__card">
                        <h3>Email</h3>
                        <p>bananaisland@banana.es</p>
                    </div>

                    <div className="contact__card">
                        <h3>Ubicación</h3>
                        <p>España</p>
                    </div>

                    <div className="contact__card">
                        <h3>Disponibilidad</h3>
                        <p>Abierto a proyectos</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
