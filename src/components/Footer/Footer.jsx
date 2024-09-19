import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importando os ícones
import style from './Footer.module.css'; // Supondo que você esteja usando CSS Modules para estilos

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                {/* Seção de Contato */}
                <div className={style.footerSection}>
                    <h4>Contato</h4>
                    <p><FaEnvelope /> Email: <a href="mailto:lemuelpires@gmail.com">lemuelpires@gmail.com</a></p>
                    <p><FaPhone /> Telefone: <a href="tel:+5516992614410">(16) 99261-4410</a></p>
                    <p><FaMapMarkerAlt /> Localização: Matão, SP, Brasil</p>
                </div>

                {/* Seção de Redes Sociais */}
                <div className={style.footerSection}>
                    <h4>Redes Sociais</h4>
                    <ul className={style.socialLinks}>
                        <li><FaLinkedin /> <a href="https://linkedin.com/in/lemuelpires" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><FaGithub /> <a href="https://github.com/lemuelpires" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </div>

                {/* Seção de Disponibilidade */}
                <div className={style.footerSection}>
                    <h4>Disponibilidade</h4>
                    <p>Disponível para início imediato</p>
                    <p>Tipo de contrato: CLT, Freelancer, Projeto</p>
                </div>

                {/* Seção de Criação */}
                <div className={style.footerSection}>
                    <h4>Feito por Lemuel Pires da Silva</h4>
                    <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
