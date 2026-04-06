import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/contact/Contact";
import About from "../../components/about/About";
import Hero from "../../components/hero/Hero";
import ArtSection from "../../components/art-section/art-section";

function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <ArtSection />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default Home;
