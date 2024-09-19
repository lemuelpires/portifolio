import React, { useState } from "react";
import style from './Header.module.css'; 
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones para o menu hambúrguer

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={style.header}>
            <div className={style.headerContainer}>
                <div className={style.logo}>
                    <h1>Lemuel Pires da Silva</h1>
                </div>
                <nav className={`${style.headerNav} ${isOpen ? style.open : ''}`}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/sobre"> Sobre</a></li>
                        <li><a href="/projetos">Projetos</a></li>
                        <li><a href="/contato">Contato</a></li>
                    </ul>
                </nav>
                <div className={style.menuIcon} onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </header>
    );
}

export default Header;
