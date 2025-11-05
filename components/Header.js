import Link from "next/link";
import Image from "next/image"; // Importa o componente Image
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo.png" // Caminho a partir da pasta 'public'
            alt="Logo Agape Essence"
            width={100} // Ajuste a largura conforme necessário
            height={100} 
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
          <button className={styles.searchButton}>🔍</button>
        </div>
      </div>
      <div className={styles.bottomBar}></div>
    </header>
  );
}
