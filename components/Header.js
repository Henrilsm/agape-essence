// components/Header.js
"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header({ onSearchClick }) {
  const pathname = usePathname();
  const isActive = (path) => {
    if (!pathname) return false;
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/") || pathname.startsWith(path);
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* LOGO COM ZOOM PARA CORTAR BORDAS */}
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoContainer}>
            <Image
              src="/logo-sem-fundo.png"
              alt="Ágape Essence Logo"
              width={160}
              height={50}
              priority
              className={styles.logoImage}
            />
          </div>
        </Link>

        <nav className={styles.nav}>
          <Link
            href="/"
            className={`${styles.navLink} ${isActive("/") ? styles.active : ""}`}
          >
            Início
          </Link>
          <Link
            href="/servicos"
            className={`${styles.navLink} ${isActive("/servicos") ? styles.active : ""}`}
          >
            Serviços
          </Link>
          <Link
            href="/local"
            className={`${styles.navLink} ${isActive("/local") ? styles.active : ""}`}
          >
            Local
          </Link>
        </nav>

        {/* BOTÃO DE BUSCA */}
        <button onClick={onSearchClick} className={styles.searchButton}>
          <FaSearch size={16} />
        </button>
      </div>
    </header>
  );
}
