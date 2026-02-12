import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./Projects.css";

import projectImg1 from "../../assets/projects-images/a2project.png";
import projectImg2 from "../../assets/projects-images/bananaIslandProject.png";
import projectDevelopment from "../../assets/projects-images/enDesarrollo.png";

const projects = [
    {
        id: 1,
        title: "Top Motos Carnet A2",
        description: "Proyecto hecho en clase con HTML, CSS y JS",
        image: projectImg1,
        link: "https://github.com/jooseacostaa/Website-A2Bikes-Project",
    },
    {
        id: 2,
        title: "Banana Island, Art Gallery",
        description:
            "Proyecto actual, hecho con React + Vite, todavía en desarrollo",
        image: projectImg2,
        link: "#",
    },
    {
        id: 3,
        title: "En desarrollo...",
        description: "Estoy aprendiendo para crear mejores proyectos...",
        image: projectDevelopment,
        link: "#",
    },
    {
        id: 4,
        title: "En desarrollo...",
        description: "Estoy aprendiendo para crear mejores proyectos...",
        image: projectDevelopment,
        link: "#",
    },
];

function Projects() {
    return (
        <>
            <Header />
            <main className="projects">
                <h2>Proyectos</h2>

                <div className="projects__list">
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.link}
                            className="projects__card"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="projects__card-image">
                                <img src={project.image} alt={project.title} />
                            </div>

                            <div className="projects__card-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Projects;
