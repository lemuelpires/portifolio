import React from 'react';
import style from './About.module.css'; // Supondo que você use CSS modules

function Sobre() {
    return (
        <div className={style.aboutContainer}>
            <h1>Sobre Mim</h1>
            <p>Sou desenvolvedor de software com experiência em desenvolvimento frontend e backend, especializado na criação de soluções tecnológicas utilizando tecnologias modernas. Tenho experiência em projetos de e-commerce, desenvolvimento de APIs e integração contínua.</p>
            <h2>Formação Acadêmica</h2>
            <ul>
                <li><strong>Graduação em Desenvolvimento de Software Multiplataforma</strong> - Faculdade de Tecnologia de Matão – FATEC (2022 – 2025)</li>
                <li><strong>Pós-Graduação em Gestão da Produção</strong> - Faculdade de Tecnologia de Taquaritinga – FATEC (2013 – 2015)</li>
                <li><strong>Graduação em Produção</strong> - Faculdade de Tecnologia de Taquaritinga – FATEC (2008 – 2010)</li>
            </ul>
            <h2>Certificações</h2>
            <ul>
                <li>Fundamentos do Design da Experiência do Usuário (UX) - Google | Coursera (Mar 2024)</li>
            </ul>
        </div>
    );
}

export default Sobre;
