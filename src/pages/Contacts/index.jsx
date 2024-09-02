import React from 'react';
import style from './Contacts.module.css'; // Supondo que você use CSS modules

function Contato() {
    return (
        <div className={style.contactContainer}>
            <h1>Contato</h1>
            <p>Se você deseja entrar em contato, por favor preencha o formulário abaixo ou utilize os métodos de contato direto.</p>
            <form className={style.contactForm}>
                <input type="text" placeholder="Seu Nome" required />
                <input type="email" placeholder="Seu Email" required />
                <textarea placeholder="Sua Mensagem" rows="5" required></textarea>
                <button type="submit">Enviar</button>
            </form>
            <div className={style.directContact}>
                <p>Email: <a href="mailto:lemuelpires@gmail.com">lemuelpires@gmail.com</a></p>
                <p>Telefone: <a href="tel:+5516992614410">(16) 99261-4410</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/lemuelpires" target="_blank" rel="noopener noreferrer">linkedin.com/in/lemuelpires</a></p>
                <p>GitHub: <a href="https://github.com/lemuelpires" target="_blank" rel="noopener noreferrer">github.com/lemuelpires</a></p>
            </div>
        </div>
    );
}

export default Contato;
