import React from 'react';
import style from './Home.module.css'; // Supondo que você use CSS modules

function Home() {
    return (
        <div className={style.homeContainer}>
            <section className={style.hero}>
                <h1>Bem-vindo ao Meu Portfólio</h1>
                <p>Desenvolvedor de Software especializado em soluções tecnológicas modernas.</p>
            </section>
            <section className={style.skills}>
                <h2>Minhas Habilidades</h2>
                <ul>
                    <li>Desenvolvimento Frontend: HTML, CSS, JavaScript, React, Flutter</li>
                    <li>Desenvolvimento Backend: C#, .Net, CRUD, Arquitetura em Camadas</li>
                    <li>Bancos de Dados: SQL (MySQL), NoSQL (Firebase, MongoDB)</li>
                    <li>Versionamento e CI/CD: GitHub, Firebase, Azure</li>
                    <li>Prototipação e Design: Figma</li>
                </ul>
            </section>
            <section className={style.projectsPreview}>
                <h2>Projetos em Destaque</h2>
                <p>Confira alguns dos meus projetos mais recentes na seção de Projetos.</p>
            </section>
        </div>
    );
}

export default Home;
