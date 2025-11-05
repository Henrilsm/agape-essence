import { FaWhatsapp } from 'react-icons/fa';
import styles from "./WhatsappButton.module.css";

export default function WhatsappButton() {

  const numeroWhatsapp = "5581973074000";
  const mensagem = encodeURIComponent("Olá! Vim pelo site e gostaria de mais informações.");

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${mensagem}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Iniciar conversa no WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}