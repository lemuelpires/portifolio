import React from 'react';
import style from './Projects.module.css'; // CSS module para a página de projetos
import Card from '../../components/ProjectCard/ProjectCard'; // Importa o componente de Card

function Projetos() {
    const projects = [
        {
            title: "Sigma Hardware - E-commerce",
            description: "Desenvolvimento completo de um site de e-commerce focado em produtos de hardware.",
            images: [
                "url-da-imagem-1", 
                "url-da-imagem-2"
            ],
            links: [
                { url: "https://github.com/lemuelpires", text: "Repositório GitHub" },
                { url: "https://deploy-link.com", text: "Visualizar Projeto" }
            ],
            technologies: ["React", ".NET", "SQL", "JavaScript"]
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
