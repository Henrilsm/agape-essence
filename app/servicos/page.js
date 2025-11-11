"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./page.module.css";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import { allServicos } from './servicosData.js';


export default function ServicosPage() {
  const carouselRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const [filtroRegiao, setFiltroRegiao] = useState("");
  const [filtroObjetivo, setFiltroObjetivo] = useState("");
  const [servicosExibidos, setServicosExibidos] = useState(allServicos);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 0);
      // show right arrow only if there's hidden content to the right
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // initialize arrow visibility and update on content changes / resize
  useEffect(() => {
    const updateArrows = () => {
      if (carouselRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
      }
    };

    // run on mount and when servicosExibidos changes
    updateArrows();

    // update on window resize (layout changes)
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [servicosExibidos]);

  const handleSearch = (e) => {
    e.preventDefault();
    let servicosFiltrados = allServicos;
    if (filtroRegiao) {
      servicosFiltrados = servicosFiltrados.filter((servico) =>
        servico.tags.includes(filtroRegiao)
      );
    }
    if (filtroObjetivo) {
      servicosFiltrados = servicosFiltrados.filter((servico) =>
        servico.tags.includes(filtroObjetivo)
      );
    }
    setServicosExibidos(servicosFiltrados);
  };

  const clearFilters = () => {
    setFiltroRegiao("");
    setFiltroObjetivo("");
    setServicosExibidos(allServicos);
  };

  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Serviços</h1>
        <h2 className={styles.subtitle}>
          Procedimentos mais procurados na Ágape
        </h2>

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
            {servicosExibidos.length > 0 ? (
              servicosExibidos.map((servico) => {
                return (
                  <div key={servico.id} className={styles.card}>
                    <Image
                      src={servico.imagem}
                      alt={servico.nome}
                      width={250}
                      height={200}
                      className={styles.cardImage}
                    />
                    <div className={styles.cardBody}>
                      <h3>{servico.nome}</h3>

                      <Link
                        href={`/servicos/${servico.slug}`}
                        className={styles.cardButton}
                      >
                        Saiba Mais
                      </Link>

                    </div>
                  </div>
                );
              })
            ) : (
              <p className={styles.noResults}>
                Nenhum serviço encontrado para esta combinação de filtros.
              </p>
            )}
          </div>

          {showRightArrow && (
            <button
              className={`${styles.carouselButton} ${styles.right}`}
              onClick={handleScrollRight}
            >
              <FaChevronRight />
            </button>
          )}
        </div>

        <div className={styles.searchContainer}>
          <h3>Encontre seu tratamento</h3>

          <form className={styles.searchForm} onSubmit={handleSearch}>
            <div className={styles.formGroup}>
              <label htmlFor="regiao">Região do tratamento</label>
              <select
                id="regiao"
                name="regiao"
                value={filtroRegiao}
                onChange={(e) => setFiltroRegiao(e.target.value)}
              >
                <option value="">Todas as regiões</option>
                <option value="rosto">Rosto</option>
                <option value="labios">Lábios</option>
                <option value="pescoco">Pescoço</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="objetivo">Objetivo do tratamento</label>
              <select
                id="objetivo"
                name="objetivo"
                value={filtroObjetivo}
                onChange={(e) => setFiltroObjetivo(e.target.value)}
              >
                <option value="">Todos os objetivos</option>
                <option value="rejuvenescimento">Rejuvenescimento</option>
                <option value="hidratacao">Hidratação</option>
                <option value="manchas">Manchas</option>
              </select>
            </div>
            <button type="submit" className={styles.searchButton}>
              Buscar
            </button>
            {(filtroRegiao || filtroObjetivo) && (
              <button
                type="button"
                className={styles.clearButton}
                onClick={clearFilters}
              >
                Limpar filtros
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}