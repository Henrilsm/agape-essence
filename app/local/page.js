import styles from "./page.module.css";
import Image from "next/image";

export default function LocalPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Onde estamos</h1>

      <div className={styles.mapWrapper}>
        <iframe
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

      {/* Nossa Estrutura: sessão com fotos das salas */}
      <section className={styles.structureSection}>
        <h2 className={styles.title}>Nossa Estrutura</h2>
        <p className={styles.sectionText}>
          Conheça nosso espaço dedicado ao seu bem-estar e beleza, com ambiente
          acolhedor e equipamentos de última geração.
        </p>

        <div className={styles.roomsGrid}>
          <div className={styles.room}>
            <div className={styles.roomImages}>
              <Image src="/Foto-Estetica-Vista1.png" alt="Sala Estética 1" width={800} height={500} className={styles.roomImg} />
              <Image src="/Foto-Estetica-Vista2.png" alt="Sala Estética 2" width={800} height={500} className={styles.roomImg} />
            </div>
          </div>

          <div className={styles.room}>
            <div className={styles.roomImages}>
              <Image src="/Foto-Odonto-Interna1.png" alt="Sala Odonto interna 1" width={800} height={500} className={styles.roomImg} />
              <Image src="/Foto-Odonto-Interna2.png" alt="Sala Odonto interna 2" width={800} height={500} className={styles.roomImg} />
            </div>
          </div>

          <div className={styles.room}>
            <div className={styles.roomImages}>
              <Image src="/Foto-Odonto-Vista1.png" alt="Sala Odonto vista 1" width={800} height={500} className={styles.roomImg} />
              <Image src="/Foto-Odonto-Vista2.png" alt="Sala Odonto vista 2" width={800} height={500} className={styles.roomImg} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
