// app/page.js
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* Painel Esquerdo (Texto) */}
        <div className={styles.leftPanel}>
          <h1 className={styles.title}>
            Seu momento de cuidado com fé e propósito começa aqui
          </h1>
          <p className={styles.subtitle}>
            Mais do que um espaço de Harmonização Orofacial — é um lugar onde
            mulheres descobrem sua beleza com identidade, propósito e fé.
          </p>
          <p className={styles.welcomeText}>Seja bem-vinda ao Ágape Essence.</p>
          {/* O botão como na imagem */}
          <Link href="/sobre-nos" className={styles.button}>
            Conheça nossa história &rarr;
          </Link>
        </div>

        {/* Painel Direito (Imagem) */}
        <div className={styles.rightImagePanel}>
          <Image
            src="/logo-com-fundo.png" // Certifique-se que esta imagem está na pasta 'public/'
            alt="Fundadoras da Ágape Essence"
            width={500}
            height={500}
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
