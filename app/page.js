import styles from "./page.module.css";
import Link from 'next/link';
import Image from 'next/image';
import heroImage from './sobre-nos/foto-doutoras.png';

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>

        <div className={styles.leftPanel}>
          <h1 className={styles.title}>
            Seu momento de cuidado com fé e propósito começa aqui
          </h1>

          <p className={styles.subtitle}>
            Mais do que um espaço de Harmonização Orofacial — é
            um lugar onde mulheres descobrem sua beleza com identidade,
            propósito e fé.
          </p>

          <p className={styles.welcomeText}>
            Seja bem-vinda ao Ágape Essence.
          </p>

          <Link href="/sobre-nos" className={styles.button}>
            Conheça nossa história →
          </Link>
        </div>

        <div className={styles.rightImagePanel}>
          <Image
            src={heroImage}
            alt="Mulher recebendo tratamento facial na Ágape Essence"
            width={500}
            height={500}
            className={styles.heroImage}
            placeholder="blur"
          />
        </div>

      </div>
    </section>
  );
}