import React from "react";
import style from './Footer.module.css'; // Supondo que você esteja usando CSS Modules para estilos

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.footerSection}>
                    <h4>Contato</h4>
                    <p>Email: <a href="mailto:lemuelpires@gmail.com">lemuelpires@gmail.com</a></p>
                    <p>Telefone: <a href="tel:+5516992614410">(16) 99261-4410</a></p>
                    <p>Localização: Matão, SP, Brasil</p>
                </div>

                <div className={style.footerSection}>
                    <h4>Redes Sociais</h4>
                    <ul className={style.socialLinks}>
                        <li><a href="https://linkedin.com/in/lemuelpires" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/lemuelpires" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </div>

                <div className={style.footerSection}>
                    <h4>Disponibilidade</h4>
                    <p>Disponível para início imediato</p>
                    <p>Tipo de contrato: CLT, Freelancer, Projeto</p>
                </div>

                <div className={style.footerSection}>
                    <h4>Feito com ❤️ por Lemuel Pires da Silva</h4>
                    <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
