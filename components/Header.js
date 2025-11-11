import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { FaSearch } from "react-icons/fa";

export default function Header({ onSearchClick }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo.png"
            alt="Logo Agape Essence"
            width={250}
            height={60}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navButton}>
            Início
          </Link>
          <Link href="/servicos" className={styles.navButton}>
            Serviços
          </Link>
          <Link href="/local" className={styles.navButton}>
            Local
          </Link>
        </nav>

        <div className={styles.search}>
          <button onClick={onSearchClick} className={styles.searchButton}>
            <FaSearch size={16} />
          </button>
        </div>
      </div>
      <div className={styles.bottomBar}></div>
    </header>
  );
}
