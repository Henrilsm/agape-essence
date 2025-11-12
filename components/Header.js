// components/Header.js
import Link from "next/link";
import styles from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

export default function Header({ onSearchClick }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* LOGO COM ZOOM PARA CORTAR BORDAS */}
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoContainer}>
            <Image
              src="/logo-sem-fundo.png"
              alt="Ágape Essence Logo"
              width={200}
              height={80}
              priority
              className={styles.logoImage}
            />
          </div>
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Início
          </Link>
          <Link href="/servicos" className={styles.navLink}>
            Serviços
          </Link>
          <Link href="/local" className={styles.navLink}>
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
