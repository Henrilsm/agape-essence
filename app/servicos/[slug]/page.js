// app/servicos/[slug]/page.js

import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaChevronLeft } from 'react-icons/fa';
import { allServicos } from '../servicosData.js';
import styles from './page.module.css';

function getServicoPorSlug(slug) {
    return allServicos.find((servico) => servico.slug === slug);
}

// 1. O número de WhatsApp não é mais necessário aqui
// Esta é a nova URL de destino, vinda do seu WhatsappButton.js
const linktreeURL = "https://linktr.ee/contatoagapeessence?utm_source=linktree_profile_share&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnt59p-e57kGgJmX9zzVgrs6x0refaeOD0bvsVQZU-qraP0MURddrz9hYtoN4_aem_bbea5WrIdGNWd7bNsu7aEw";


export default function ServicoDetalhePage({ params }) {
    const { slug } = params;
    const servico = getServicoPorSlug(slug);

    if (!servico) {
        return (
            <div className={styles.container}>
                <p>Serviço não encontrado.</p>
                <Link href="/servicos" className={styles.backLink}>
                    <FaChevronLeft /> Voltar para todos os serviços
                </Link>
            </div>
        );
    }

    // A mensagem personalizada foi removida, pois o Linktree cuidará disso

    return (
        <div className={styles.container}>
            <Link href="/servicos" className={styles.backLink}>
                <FaChevronLeft /> Voltar para todos os serviços
            </Link>

            <header className={styles.header}>
                <div className={styles.headerText}>
                    <h1 className={styles.title}>{servico.nome}</h1>
                    <p className={styles.description}>{servico.descricao}</p>

                    {/* 2. O <a> foi atualizado para usar a linktreeURL */}
                    <a
                        href={linktreeURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton} // O estilo (verde, com ícone) ainda é ótimo
                    >
                        <FaWhatsapp /> Agendar Avaliação
                    </a>
                </div>
                <div className={styles.headerImageContainer}>
                    <Image
                        src={servico.imagem}
                        alt={servico.nome}
                        width={500}
                        height={400}
                        className={styles.headerImage}
                    />
                </div>
            </header>

            {/* O restante do código (detailsGrid) é o mesmo */}
            <div className={styles.detailsGrid}>
                <div className={styles.detailCard}>
                    <h2 className={styles.subtitle}>Principais Benefícios</h2>
                    <ul className={styles.list}>
                        {servico.beneficios.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.detailCard}>
                    <h2 className={styles.subtitle}>Para quem é indicado?</h2>
                    <p>{servico.indicacoes}</p>
                </div>
                <div className={styles.detailCard}>
                    <h2 className={styles.subtitle}>Cuidados Pós-Procedimento</h2>
                    <ul className={styles.list}>
                        {servico.cuidados.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}