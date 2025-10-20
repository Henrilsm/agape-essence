import styles from "./page.module.css";

export default function LocalPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Onde estamos</h1>

      <div className={styles.mapWrapper}>
        <iframe
          // Colocamos a sua URL correta aqui
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.164197166916!2d-34.9011481032105!3d-8.0847315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f550879a081%3A0xd745451dc0114039!2sRiomar%20Trade%20Center%204%20e%205!5e0!3m2!1spt-BR!2sbr!4v1760924589468!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className={styles.textContainer}>
        <p>
          Localizado no Rio Mar Trade Center, a Ágape Essence está esperando a
          sua visita.
        </p>
        <p>Agende já a sua próxima avaliação estética.</p>
      </div>
    </div>
  );
}
