import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
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
