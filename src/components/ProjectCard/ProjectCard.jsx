import React from 'react';
import style from './ProjectCard.module.css'; // CSS module específico para o Card
import { FaReact, FaDatabase, FaJs, FaServer } from 'react-icons/fa'; // Ícones disponíveis

function Card({ title, description, images, links, technologies }) {
    return (
        <div className={style.card}>
            <div className={style.cardHeader}>
                <h2 className={style.cardTitle}>{title}</h2>
                <p className={style.cardDescription}>{description}</p>
            </div>
            <div className={style.cardImages}>
                {images.map((image, index) => (
                    <img src={image} alt={`Projeto ${index + 1}`} key={index} className={style.cardImage} />
                ))}
            </div>
            <div className={style.cardLinks}>
                {links.map((link, index) => (
                    <a href={link.url} key={index} target="_blank" rel="noopener noreferrer" className={style.cardLink}>
                        {link.text}
                    </a>
                ))}
            </div>
            <div className={style.cardTechnologies}>
                {technologies.includes('React') && <FaReact className={style.techIcon} title="React" />}
                {technologies.includes('Backend') && <FaServer className={style.techIcon} title="Backend" />}
                {technologies.includes('SQL') && <FaDatabase className={style.techIcon} title="SQL" />}
                {technologies.includes('JavaScript') && <FaJs className={style.techIcon} title="JavaScript" />}
                {/* Adicione mais ícones conforme necessário */}
            </div>
        </div>
    );
}

export default Card;
