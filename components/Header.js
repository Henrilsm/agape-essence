// components/Header.js
import Link from "next/link";
import styles from "./Header.module.css";
import { FaSearch } from "react-icons/fa";

export default function Header({ onSearchClick }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* LOGO EM TEXTO ESTILIZADO */}
        <Link href="/" className={styles.logoLink}>
          <h1 className={styles.logoTitle}>ÁGAPE ESSENCE</h1>
          <span className={styles.logoSubtitle}>HARMONIZAÇÃO OROFACIAL</span>
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
