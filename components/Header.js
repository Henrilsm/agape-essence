import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            ÁGAPE ESSENCE
            <span className={styles.sublogo}>HARMONIZAÇÃO OROFACIAL</span>
          </Link>
        </div>
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
          <button className={styles.searchButton}>🔍</button>
        </div>
      </div>
      <div className={styles.bottomBar}></div>
    </header>
  );
}
