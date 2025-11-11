import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo.png"
            alt="Logo Agape Essence"
            width={80}
            height={80}
            priority
          />
        </Link>

        <div className={styles.navAndSearch}>
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

          <div className={styles.search}>
            <button className={styles.searchButton}>
              <FaSearch />
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}