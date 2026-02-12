import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./TermsPrivacity.css";

function TermsPrivacity() {
    return (
        <>
            <Header />
            <main className="terms-container">
                <h2>Términos, Condiciones y Política de Cookies de Banana Island</h2>
                <h3>Fecha de vigencia: 7 febrero 2026</h3>

                <section className="terms-section">
                    <h4>1. Uso del sitio</h4>
                    <p>
                        Banana Island proporciona contenido informativo relacionado con
                        tecnología, gadgets, software y noticias del sector. El material
                        publicado es solo con fines educativos e informativos, y no
                        constituye asesoramiento profesional ni garantía de veracidad
                        absoluta.
                    </p>
                </section>

                <section className="terms-section">
                    <h4>2. Propiedad intelectual</h4>
                    <p>
                        Todos los contenidos de Banana Island, incluidos textos, imágenes,
                        gráficos y logotipos, son propiedad de Banana Island o de terceros
                        que han autorizado su uso. Queda prohibida la reproducción,
                        distribución o modificación sin permiso explícito.
                    </p>
                </section>

                <section className="terms-section">
                    <h4>3. Responsabilidad</h4>
                    <p>
                        Banana Island no se hace responsable de errores, omisiones o daños
                        derivados del uso de la información publicada en la web. El usuario
                        asume la responsabilidad de cualquier decisión tomada basándose en
                        el contenido disponible.
                    </p>
                </section>

                <section className="terms-section">
                    <h4>4. Enlaces a terceros</h4>
                    <p>
                        Nuestra web puede contener enlaces a sitios externos. No tenemos
                        control sobre estos sitios y no nos hacemos responsables de sus
                        contenidos ni de sus políticas de privacidad.
                    </p>
                </section>

                <section className="terms-section">
                    <h4>5. Modificaciones</h4>
                    <p>
                        Banana Island se reserva el derecho de modificar estos términos en
                        cualquier momento. Los cambios se publicarán en esta página y serán
                        efectivos inmediatamente.
                    </p>
                </section>

                <section className="terms-section">
                    <h4>Texto generado con inteligencia artificial</h4>
                    <p>
                        Este texto lo he generado de ejemplo con inteligencia artificial.
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default TermsPrivacity;
