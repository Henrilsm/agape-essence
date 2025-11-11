import { FaWhatsapp } from 'react-icons/fa';
import styles from "./WhatsappButton.module.css";

export default function WhatsappButton() {
  return (
    <a
      href={`https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Fcontatoagapeessence%3Futm_source%3Dlinktree_profile_share%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnt59p-e57kGgJmX9zzVgrs6x0refaeOD0bvsVQZU-qraP0MURddrz9hYtoN4_aem_bbea5WrIdGNWd7bNsu7aEw&e=AT2I6zah0tWgqlE90ApLl4Kew9qy0wJAxiSvPdimUQE47MU0T1hdTt9mhit-psfZC1lSGmJ3EYwRBnMCqhA9iPHPQyypz2g3cVww8-8UK5Wfql72GDddAA0NaQ`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Iniciar conversa no WhatsApp"
    >
    <FaWhatsapp />
    </a>
  );
}