import React from 'react';
import style from './Home.module.css'; // CSS module específico para Home
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaMobile, FaDatabase, FaGithub, FaFigma, FaServer } from 'react-icons/fa'; // Usar FaMobile para Flutter
import ImagemSigma from '../../assets/sigma/home2.png'
import ImagemBlogDev from '../../assets/blogDev/homeBlogDev.png'

function Home() {
    return (
        <div className={style.homeContainer}>
            <section className={style.hero}>
                <div className={style.heroContent}>
                    <h1>Bem-vindo ao Meu Portfólio</h1>
                    <p>Desenvolvedor de Software especializado em soluções tecnológicas modernas.</p>
                    <a href="/projetos" className={style.ctaButton}>Ver Projetos</a>
                </div>
            </section>
            <section className={style.skills}>
                <h2>Minhas Habilidades</h2>
                <div className={style.skillsList}>
                    <div className={style.skillItem}>
                        <FaHtml5 className={style.skillIcon} />
                        <span>HTML</span>
                    </div>
                    <div className={style.skillItem}>
                        <FaCss3Alt className={style.skillIcon} />
                        <span>CSS</span>
                    </div>
                    <div className={style.skillItem}>
                        <FaJs className={style.skillIcon} />
                        <span>JavaScript</span>
                    </div>
                    <div className={style.skillItem}>
                        <FaReact className={style.skillIcon} />
                        <span>React</span>
                    </div>
                    <div className={style.skillItem}>
                        <FaMobile className={style.skillIcon} />
                        <span>Flutter</span> {/* Usar FaMobile como ícone de Flutter */}
                    </div>
                    <div className={style.skillItem}>
                        <FaServer className={style.skillIcon} />
                        <span>.NET & Backend</span>
                    </div>
                    <div className={style.skillItem}>
                        <FaDatabase className={style.skillIcon} />
                        <span>Bancos de Dados</span>
                    </div>
                    <div className={style.skillItem}>
                        <FaGithub className={style.skillIcon} />
                        <span>Versionamento</span>
                    </div>
                    <div className={style.skillItem}>
                        <FaFigma className={style.skillIcon} />
                        <span>Prototipação</span>
                    </div>
                </div>
            </section>
            <section className={style.projectsPreview}>
                <h2>Projetos em Destaque</h2>
                <p>Confira alguns dos meus projetos mais recentes.</p>
                <div className={style.catalogo}>
                    <div className={style.catalogoItem}>
                        <img src={ImagemSigma}  />
                    </div>
                    <div className={style.catalogoItem}>
                        <img src={ImagemBlogDev} />
                    </div>
                </div>

                <a href="/projetos" className={style.ctaButton}>Ver Todos os Projetos</a>
            </section>
        </div>
    );
}

export default Home;
