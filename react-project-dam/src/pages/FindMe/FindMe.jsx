import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "leaflet/dist/leaflet.css";
import "./FindMe.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function FindMe() {
    const position = [28.127222, -15.446667];

    return (
        <>
            <Header />
            <main className="find-me">
                <section className="find-me__header">
                    <h2>Encuéntrame</h2>
                    <p>
                        Mi ubicación aproximada para proyectos o encuentros profesionales.
                    </p>
                </section>

                <section className="find-me__map">
                    <MapContainer
                        center={position}
                        zoom={14}
                        style={{ height: "500px", width: "100%" }}>

                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={position}>
                            <Popup>Aquí me encontrarás</Popup>
                        </Marker>
                    </MapContainer>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default FindMe;
