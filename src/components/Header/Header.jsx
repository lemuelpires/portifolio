import React from "react";
import style from './Header.module.css';  // Importação correta para o CSS Module

function Header() {
    return (
        <>
            <div className={style.header}>
                <div className={style.headerTitle}>
                    <h1>Meu Portifólio</h1>
                </div>
                <nav className={style.headerNav}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/sobre">Sobre</a></li>
                        <li><a href="/projetos">Projetos</a></li>
                        <li><a href="/contato">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;
