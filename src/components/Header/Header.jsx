import React, { useState, useEffect } from "react";
import style from './Header.module.css'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import Foto from '../../assets/foto/foto.jpg';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <header className={style.header}>
            <div className={style.headerContainer}>
                <div className={style.logo}>
                    <img src={Foto} alt="Logo" />
                    <h1>Lemuel Pires da Silva</h1>
                </div>
                <nav className={`${style.headerNav} ${isOpen ? style.open : ''}`}>
                    <ul>
                        <li><a href="/" onClick={closeMenu}>Home</a></li>
                        <li><a href="/sobre" onClick={closeMenu}> Sobre</a></li>
                        <li><a href="https://www.portalmantec.com.br" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Projetos</a></li>
                        <li><a href="/contato" onClick={closeMenu}>Contato</a></li>
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
