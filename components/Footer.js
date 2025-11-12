import Link from 'next/link';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social}>
          <a
            href="https://www.instagram.com/agapeessencehof"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:contato@agapeessence.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Ágape Essence</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <div className={styles.address}>
          <p>Rio Mar Trade Center - Torre 4</p>
          <p>Av. República do Líbano, nº 256, 9º andar, Sala 918</p>
          <p>Pina, Recife - PE</p>
        </div>
      </div>
    </footer>
  );
}