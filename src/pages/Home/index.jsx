import React from 'react';
import style from './Home.module.css'; // CSS module específico para Home
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaMobile, FaDatabase, FaGithub, FaFigma, FaServer, FaDocker, FaPython, FaAws } from 'react-icons/fa'; // Usar FaMobile para Flutter
import AzureLogo from '../../assets/icone/azure.svg';
import MongoLogo from '../../assets/icone/mongodb.svg';
import FirebaseLogo from '../../assets/icone/firebase.svg';
import SQLLogo from '../../assets/icone/sql.svg';

function Home() {
    return (
        <div className={style.homeContainer}>
            <section className={style.hero}>
                <div className={style.heroContent}>
                    <h1>Bem-vindo ao Meu Portfólio</h1>
                    <p>Desenvolvedor de Software especializado em soluções tecnológicas modernas e inovadoras.</p>
                    <a href="https://www.portalmantec.com.br" target="_blank" rel="noopener noreferrer" className={style.ctaButton}>Ver Projetos</a>
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
                        <span>Flutter</span>
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
                    <div className={style.skillItem}>
                        <FaDocker className={style.skillIcon} />
                        <span>Containerização</span>
                    </div>
                    <div className={style.skillItem}>
                        <FaPython className={style.skillIcon} />
                        <span>Python</span>
                    </div>
                        <div className={style.skillItem}>
                            {/* Ícone MongoDB */}
                            <img src={MongoLogo} alt="MongoDB" className={style.skillIcon} style={{width: '4rem', marginRight: '8px'}} />
                            <span>MongoDB</span>
                        </div>
                        <div className={style.skillItem}>
                            {/* Ícone Firebase */}
                            <img src={FirebaseLogo} alt="Firebase" className={style.skillIcon} style={{width: '4rem', marginRight: '8px'}} />
                            <span>Firebase</span>
                        </div>
                        <div className={style.skillItem} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            {/* Ícone Azure */}
                            <img src={AzureLogo} alt="Azure" className={style.skillIcon} style={{width: '4rem', marginRight: '8px'}} />
                            <span>Azure</span>
                        </div>
                        <div className={style.skillItem}>
                            {/* Ícone AWS */}
                            <FaAws className={style.skillIcon} />
                            <span>AWS</span>
                        </div>
                        <div className={style.skillItem}>
                            {/* Ícone SQL */}
                            <img src={SQLLogo} alt="SQL" className={style.skillIcon} style={{width: '4rem', marginRight: '8px'}} />
                            <span>SQL</span>
                        </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
