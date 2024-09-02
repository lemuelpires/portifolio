import React from 'react';
import style from './Projects.module.css'; // Supondo que você use CSS modules

function Projetos() {
    return (
        <div className={style.projectsContainer}>
            <h1>Meus Projetos</h1>
            <div className={style.project}>
                <h2>Sigma Hardware - E-commerce</h2>
                <p>Desenvolvimento completo de um site de e-commerce focado em produtos de hardware.</p>
                <ul>
                    <li><strong>Frontend:</strong> Construído com React. <a href="https://github.com/lemuelpires" target="_blank" rel="noopener noreferrer">Repositório GitHub</a></li>
                    <li><strong>Backend:</strong> Desenvolvido em C# com foco em arquitetura limpa.</li>
                    <li><strong>Banco de Dados:</strong> Firebase/Firestore e MySQL.</li>
                    <li><strong>Integração Contínua:</strong> Configuração de pipelines no GitHub.</li>
                    <li><strong>Prototipação:</strong> Layout de alta fidelidade desenvolvido no Figma.</li>
                    <li><strong>Hospedagem:</strong> Código-fonte hospedado no GitHub e Azure.</li>
                </ul>
            </div>
            {/* Adicione mais projetos aqui, se necessário */}
        </div>
    );
}

export default Projetos;
