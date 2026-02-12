import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import ArtSection from "../../components/ArtSection/ArtSection";

function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <ArtSection/>
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default Home;
