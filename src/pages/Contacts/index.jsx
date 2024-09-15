import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importando os ícones
import style from './Contacts.module.css';

function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: nome,
            from_email: email,
            message: mensagem,
        };

        emailjs.send('service_7sv5ngl', 'template_93abqwn', templateParams, 'l7QT0b7upBgvnUgv1')
            .then((response) => {
                console.log('Success:', response);
                alert('Mensagem enviada com sucesso!');
                setNome('');
                setEmail('');
                setMensagem('');
            }, (error) => {
                console.log('Error:', error);
                alert('Erro ao enviar a mensagem.');
            });
    };

    return (
        <div className={style.contactContainer}>
            <h2>Contato</h2>
            <p>Se você deseja entrar em contato, por favor preencha o formulário abaixo ou utilize os métodos de contato direto.</p>
            <form className={style.contactForm} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Seu Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Seu Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Sua Mensagem"
                    rows="5"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Enviar</button>
            </form>
            <div className={style.contactGrid}>
                <div>
                    <p><FaEnvelope /> Email: <a href="mailto:lemuelpires@gmail.com">lemuelpires@gmail.com</a></p>
                    <p><FaPhone /> Telefone: <a href="tel:+5516992614410">(16) 99261-4410</a></p>
                </div>
                <div>
                    <p><FaLinkedin /> LinkedIn: <a href="linkedin.com/in/lemuelpires" target="_blank" rel="noopener noreferrer">linkedin.com/in/lemuelpires</a></p>
                    <p><FaGithub /> GitHub: <a href="https://github.com/lemuelpires" target="_blank" rel="noopener noreferrer">github.com/lemuelpires</a></p>
                    <p><FaWhatsapp /> <a
                        href="https://wa.me/5516992614410" // Substitua pelo número desejado
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contate via WhatsApp
                    </a></p>
                </div>
            </div>
        </div>
    );
}

export default Contato;
