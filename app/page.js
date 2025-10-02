import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.leftPanel}>
          {/* Outros elementos podem ser adicionados aqui */}
          <h1 className={styles.title}>
            Seu momento de cuidado com <br />
            <span className={styles.highlight}>fé e propósito</span>
            <br />
            começa aqui
          </h1>
        </div>
        <div className={styles.rightPanel}>
          <h2 className={styles.subtitle}>
            Mais do que um espaço de Harmonização Orofacial — é{" "}
            <strong>
              um lugar onde mulheres descobrem sua beleza com identidade,
              propósito e fé.
            </strong>
          </h2>
          <p>Seja bem-vinda ao Ágape Essence.</p>
          <button className={styles.button}>Sobre nós &rarr;</button>
        </div>
      </div>
    </div>
  );
}
