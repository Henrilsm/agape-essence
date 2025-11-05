"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./page.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

const allServicos = [
  {
    id: 1,
    nome: "Aplicação de Toxina Botulínica",
    imagem: "/servicos/1.jpg",
    tags: ["rosto", "rejuvenescimento"],
  },
  {
    id: 2,
    nome: "Preenchimentos Faciais",
    imagem: "/servicos/2.png",
    tags: ["rosto", "labios"],
  },
  {
    id: 3,
    nome: "Bioestimulador de Colágeno",
    imagem: "/servicos/3.png",
    tags: ["rosto", "pescoco", "rejuvenescimento"],
  },
  {
    id: 4,
    nome: "Jato de Plasma",
    imagem: "/servicos/4.webp",
    tags: ["rosto", "manchas"],
  },
  {
    id: 5,
    nome: "Microagulhamento",
    imagem: "/servicos/5.jpg",
    tags: ["rosto", "manchas", "rejuvenescimento"],
  },
  {
    id: 6,
    nome: "Ultrassom Microfocado",
    imagem: "/servicos/6.jpg",
    tags: ["rosto", "pescoco", "rejuvenescimento"],
  },
  {
    id: 7,
    nome: "Skinbooster",
    imagem: "/servicos/7.jpg",
    tags: ["rosto", "labios", "pescoco", "hidratacao"],
  },
  {
    id: 8,
    nome: "Fios de PDO",
    imagem: "/servicos/8.webp",
    tags: ["rosto", "rejuvenescimento"],
  },
];

const numeroWhatsapp = ""; 

export default function ServicosPage() {
  const carouselRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const [filtroRegiao, setFiltroRegiao] = useState("");
  const [filtroObjetivo, setFiltroObjetivo] = useState("");
  const [servicosExibidos, setServicosExibidos] = useState(allServicos);

  const handleScroll = () => {
    if (carouselRef.current) {
      setShowLeftArrow(carouselRef.current.scrollLeft > 0);
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
                const mensagem = encodeURIComponent(
                  `Olá! Vi o serviço de ${servico.nome} no site e gostaria de mais informações.`
                );
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
                );
              })
            ) : (
              <p className={styles.noResults}>
                Nenhum serviço encontrado para esta combinação de filtros.
              </p>
            )}
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
                id="objetIVO"
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