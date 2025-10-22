"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./page.module.css";
import { useRef, useState } from "react";

const servicos = [
  { id: 1, nome: "Aplicação de Toxina Botulínica" },
  { id: 2, nome: "Preenchimentos Faciais" },
  { id: 3, nome: "Bioestimulador de Colágeno Injetável" },
  { id: 4, nome: "Jato de Plasma" },
  { id: 5, nome: "Microagulhamento" },
  { id: 6, nome: "Ultrassom Microfocado" },
  { id: 7, nome: "Skinbooster" },
  { id: 8, nome: "Fios de PDO" },
];

const numeroWhatsapp = "";

export default function ServicosPage() {
  const carouselRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleScroll = () => {
    if (carouselRef.current) {
      setShowLeftArrow(carouselRef.current.scrollLeft > 0);
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Serviços</h1>
      <h2 className={styles.subtitle}>Procedimentos mais procurados na Ágape</h2>

      <div className={styles.carouselContainer}>
        {showLeftArrow && (
          <button
            className={`${styles.carouselButton} ${styles.left}`}
            onClick={handleScrollLeft}
          >
            <FaChevronLeft />
          </button>
        )}

        <div
          className={styles.carousel}
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {servicos.map((servico) => {
            const mensagem = encodeURIComponent(`Olá! Vi o serviço de ${servico.nome} no site e gostaria de mais informações.`);
            return (
              <div key={servico.id} className={styles.card}>
                <div className={styles.cardImage}></div>
                <div className={styles.cardBody}>
                  <h3>{servico.nome}</h3>
                  <a
                    href={`https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${mensagem}`}
                    className={styles.cardButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <button
          className={`${styles.carouselButton} ${styles.right}`}
          onClick={handleScrollRight}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className={styles.searchContainer}>
        <h3>Encontre seu tratamento</h3>
        <form className={styles.searchForm}>
          <div className={styles.formGroup}>
            <label htmlFor="regiao">Região do tratamento</label>
            <select id="regiao" name="regiao">
              <option value="">Selecione a região</option>
              <option value="rosto">Rosto</option>
              <option value="labios">Lábios</option>
              <option value="pescoco">Pescoço</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="objetivo">Objetivo do tratamento</label>
            <select id="objetivo" name="objetivo">
              <option value="">Selecione o objetivo</option>
              <option value="rejuvenescimento">Rejuvenescimento</option>
              <option value="hidratacao">Hidratação</option>
              <option value="manchas">Manchas</option>
            </select>
          </div>
          <button type="submit" className={styles.searchButton}>Buscar</button>
        </form>
      </div>
    </div>
  );
}