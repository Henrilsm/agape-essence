import styles from "./WhatsappButton.module.css";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/SEUNUMERO" // Troque pelo seu número
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
    >
      {/* Idealmente, usar um ícone SVG aqui */}
      💬
    </a>
  );
}
