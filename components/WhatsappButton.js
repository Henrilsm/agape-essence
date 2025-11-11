import { FaWhatsapp } from 'react-icons/fa';
import styles from "./WhatsappButton.module.css";

export default function WhatsappButton() {
  return (
    <a
      href={`https://linktr.ee/contatoagapeessence?utm_source=linktree_profile_share&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnt59p-e57kGgJmX9zzVgrs6x0refaeOD0bvsVQZU-qraP0MURddrz9hYtoN4_aem_bbea5WrIdGNWd7bNsu7aEw`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Iniciar conversa no WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}