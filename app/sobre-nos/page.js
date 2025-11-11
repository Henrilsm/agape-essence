import Image from "next/image";
import styles from "./page.module.css";

export default function SobreNosPage() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.imageContainer}>
          <Image
            src="/foto-doutoras.png"
            alt="Dra. Paula Francine e Dra. Rosane Vera Cruz"
            className={styles.profileImage}
            placeholder="blur"
            width={400}
            height={400}
            blurDataURL="/foto-doutoras-blur.png"
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Mãos que cuidam, corações que creem</h1>
          <p className={styles.intro}>
            A Ágape Essence é a união de duas jornadas, duas amigas e irmãs em
            Cristo que decidiram dar um novo passo.
          </p>
          <p>
            Depois de muitas conversas, orações e sonhos compartilhados,
            entendemos que nossa missão ia além da estética. Hoje, somos mais
            fortes juntas, mais guiadas e mais completas.
          </p>
          <blockquote className={styles.quote}>
            "Unimos o cuidado da Enfermagem com a precisão da Odontologia.
            Unimos a técnica com o toque de amor. Unimos a amizade com o chamado
            de Deus."
            <cite>— Dra. Paula Francine e Dra. Rosane Vera Cruz</cite>
          </blockquote>
        </div>
      </section>

      <section className={`${styles.section} ${styles.philosophySection}`}>
        <div className={styles.textContainerFull}>
          <h2 className={styles.subtitle}>
            Beleza com propósito. Fé que se revela no cuidado.
          </h2>
          <p>
            Acreditamos que a beleza vai muito além da estética. Ela está no
            cuidado, na intenção e até na fé que nos guia!
            <br />
            <br />
            Mais do que um espaço de Harmonização Orofacial, a Ágape Essence
            nasce para o amar e o cuidar. É um lugar onde mulheres descobrem sua
            beleza com identidade, propósito e fé.
            <br />
            <br />
            Aqui, cada procedimento é pensado para valorizar a essência que Deus
            te deu, sempre com leveza, ética e propósito.
          </p>
        </div>
      </section>

      <section className={styles.verseSection}>
        <p className={styles.verse}>
          "Vosso corpo é o corpo do Espírito Santo"
        </p>
        <span className={styles.reference}>1 Coríntios 6:19-20</span>
      </section>
    </div>
  );
}
