"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchOverlay.module.css";
import { allServicos } from "../app/servicos/servicosData";

const otherPages = [
  {
    id: 100,
    nome: "Onde Estamos / Localização",
    slug: "local",
    descricao: "Encontre o endereço da nossa clínica no Rio Mar Trade Center.",
    tags: ["local", "endereço", "mapa"],
  },
];

const searchableData = [...allServicos, ...otherPages];

export default function SearchOverlay({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm.length < 2) {
      setResults([]);
      return;
    }

    const lowerCaseTerm = searchTerm.toLowerCase();
    const filteredResults = searchableData.filter(
      (item) =>
        item.nome.toLowerCase().includes(lowerCaseTerm) ||
        item.descricao.toLowerCase().includes(lowerCaseTerm) ||
        item.tags.some((tag) => tag.toLowerCase().includes(lowerCaseTerm))
    );
    setResults(filteredResults);
  }, [searchTerm]);

  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    setSearchTerm("");
    setResults([]);
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.searchBox} onClick={(e) => e.stopPropagation()}>
        <div className={styles.searchInputWrapper}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Buscar por serviço, objetivo, local..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <div className={styles.logoContainer}>
            <Image
              src="/LogoPesquisa.png"
              alt="Ágape Essence Logo"
              width={40}
              height={40}
              className={styles.searchLogo}
            />
          </div>
        </div>
        <div className={styles.resultsContainer}>
          {results.length > 0 && (
            <ul className={styles.resultsList}>
              {results.map((item) => (
                <li key={item.id}>
                  <Link
                    href={
                      item.slug.startsWith("local")
                        ? "/local"
                        : `/servicos/${item.slug}`
                    }
                    className={styles.resultItem}
                    onClick={handleClose}
                  >
                    <h4>{item.nome}</h4>
                    <p>{item.descricao.substring(0, 100)}...</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {searchTerm.length > 1 && results.length === 0 && (
            <p className={styles.noResults}>Nenhum resultado encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}
