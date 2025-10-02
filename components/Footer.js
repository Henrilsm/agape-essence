import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="#" className={styles.iconLink} aria-label="Facebook">
          <FaFacebookF size={24} />
        </a>
        <a href="#" className={styles.iconLink} aria-label="Instagram">
          <FaInstagram size={24} />
        </a>
        <a
          href="mailto:contato@agapeessence.com"
          className={styles.iconLink}
          aria-label="Email"
        >
          <MdMailOutline size={24} />
        </a>
      </div>
      <p className={styles.copyright}>
        © 2025 Ágape Essence. Todos os direitos reservados.
      </p>
      <p className={styles.address}>
        Rio Mar Trade Center - Av. República do Líbano, 256 - Pina, Recife - PE
      </p>
    </footer>
  );
}
