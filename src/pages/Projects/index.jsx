import React from 'react';
import style from './Projects.module.css';
import Card from '../../components/ProjectCard/ProjectCard';
import Home from '../../assets/sigma/home.png';
import Home1 from '../../assets/sigma/home2.png';
import HomeBlogDev from '../../assets/blogDev/homeBlogDev.png';
import LoginBlogDev from '../../assets/blogDev/loginBlogDev.png';
import RegistroBlogDev from'../../assets/blogDev/registroBlogDev.png';

function Projetos() {
    const projects = [
        {
            title: "Sigma Hardware - E-commerce",
            description: "Desenvolvimento completo de um site de e-commerce focado em produtos de hardware.",
            images: [
                Home, 
                Home1
            ],
            links: [
                { url: "https://github.com/lemuelpires/ProjetoSigma", text: " Ver GitHub FrontEnd" },
                { url: "https://github.com/lemuelpires/SigmaBackEnd", text: "Ver GitHub BackEnd" },
                /*{ url: "https://projeto-frontsigma.web.app/", text: "Visualizar Projeto" }*/
                { url: "https://www.youtube.com/watch?v=nT0XL2W8fSc", text:" Youtube_BackEnd"},
                { url: "https://www.youtube.com/watch?v=98rBqmbxvXg", text:" Youtube_Swagger"},
                { url: "https://www.youtube.com/watch?v=ydV4jdNJdtA", text:" Youtube_FrontEnd"}
            ],
            technologies: ["React", ".NET", "Microsoft SQL", "JavaScript", "Firestore", "Firebase"]
        },
        {
            title: "BlogDev - Rede Social",
            description: "Desenvolvimento de uma rede social, onde as pessoas podem publicar itens de seu interesse",
            images: [
                HomeBlogDev, 
                LoginBlogDev,
                RegistroBlogDev
            ],
            links: [
                { url: "https://github.com/lemuelpires/blogDev_f3m_Lemuel", text: "Ver no GitHub" },
                { url: "https://blogdev-lemuel.firebaseapp.com/", text: "Visualizar Projeto" }
            ],
            technologies: ["React", "Firebase"]
        },
        // Adicione mais projetos aqui
    ];

    return (
        <div className={style.projectsContainer}>
            <h1 className={style.title}>Meus Projetos</h1>
            {projects.map((project, index) => (
                <Card 
                    key={index}
                    title={project.title}
                    description={project.description}
                    images={project.images}
                    links={project.links}
                    technologies={project.technologies}
                />
            ))}
        </div>
    );
}

export default Projetos;
