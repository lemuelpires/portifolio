import React from "react";
import style from './Header.module.css';  // Importação correta para o CSS Module

function Header() {
    return (
        <header className={style.header}>
            <div className={style.headerContainer}>
                <div className={style.logo}>
                    <h1>Meu Portfólio</h1>
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
        </header>
    );
}

export default Header;
