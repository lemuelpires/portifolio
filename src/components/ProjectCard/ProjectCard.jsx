import React from 'react';
import style from './ProjectCard.module.css'; // CSS module específico para o Card
import { FaReact, FaDatabase, FaJs, FaServer,} from 'react-icons/fa'; // Ícones
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importar CSS do carrossel
import { SiDotnet, SiFirebase, SiAzuredevops, SiMicrosoftsqlserver, SiGithub, SiGooglecloud } from 'react-icons/si'; // Ícones específicos


function Card({ title, description, images, links, technologies }) {
    return (
        <div className={style.card}>
            <div className={style.cardHeader}>
                <h2 className={style.cardTitle}>{title}</h2>
                <p className={style.cardDescription}>{description}</p>
            </div>

            <div className={style.cardImages}>
                <Carousel showThumbs={false} infiniteLoop autoPlay>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Imagem ${index + 1}`} className={style.cardImage} />
                        </div>
                    ))}
                </Carousel>
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
                {technologies.includes('.NET') && <SiDotnet className={style.techIcon} title=".NET" />}
                {technologies.includes('Firebase') && <SiFirebase className={style.techIcon} title="Firebase" />}
                {technologies.includes('Firestore') && <SiGooglecloud className={style.techIcon} title="Firestore" />}
                {technologies.includes('Azure DevOps') && <SiAzuredevops className={style.techIcon} title="Azure DevOps" />}
                {technologies.includes('GitHub') && <FaGithub className={style.techIcon} title="GitHub" />}
                {technologies.includes('Microsoft SQL') && <SiMicrosoftsqlserver className={style.techIcon} title="Microsoft SQL" />}
            </div>
        </div>
    );
}

export default Card;
