"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const carouselData = [
  {
    id: 1,
    backgroundImage: "/Aplicacao1.jpg",
    title: "Seu momento de cuidado com fé e propósito começa aqui",
    subtitle: "Mais do que um espaço de Harmonização Orofacial — é um lugar onde mulheres descobrem sua beleza com identidade, propósito e fé.",
    welcomeText: "Seja bem-vinda ao Ágape Essence."
  },
  {
    id: 2,
    backgroundImage: "/Aplicacao2.jpg",
    title: "Você reconhece estes sinais no espelho?",
    subtitle: "Transforme a aparência do cansaço e do tempo com nossos tratamentos especializados.",
    welcomeText: "",
    problems: [
      {
        name: "Rosto com Aparência de Fadiga",
        description: "Presença de olheiras bem marcadas, pele com falta de brilho e vitalidade."
      },
      {
        name: "Linhas de Expressão na Testa", 
        description: "Linhas que antes só apareciam ao franzir a testa agora estão fixas e visíveis o tempo todo."
      },
      {
        name: "Vincos Profundos (Bigode Chinês)",
        description: "Depressões que se estendem do nariz até os cantos da boca, criando sombras no rosto."
      },
      {
        name: "Pigmentação e Danos Solares",
        description: "Manchas escuras e textura áspera que prejudicam a uniformidade da pele."
      }
    ]
  },
  {
    id: 3,
    backgroundImage: "/Aplicacao3.jpg",
    title: "Por que escolher a Ágape Essence?",
    subtitle: "",
    welcomeText: "",
    advantages: [
      {
        name: "Especialistas Qualificados",
        description: "Nossa equipe é formada por profissionais especializados e altamente qualificados. Você estará sob os cuidados de especialistas dedicados a alcançar os resultados mais naturais e eficazes."
      },
      {
        name: "Foco no Atendimento Humano", 
        description: "Entendemos que você é único. Por isso, oferecemos um atendimento verdadeiramente personalizado, criando um plano de cuidados exclusivos que respeita suas necessidades e visa superar suas expectativas estéticas."
      },
      {
        name: "Infraestrutura Acolhedora",
        description: "A Ágape Essence foi concebida para ser um refúgio de tranquilidade. Cada detalhe do nosso espaço foi planejado para proporcionar a você uma atmosfera confortável e propícia ao relaxamento."
      },
      {
        name: "Padrão de Excelência",
        description: "Nosso compromisso é com a qualidade máxima em cada procedimento. Utilizamos somente tecnologias e produtos de ponta e oferecemos um serviço ao cliente impecável."
      }
    ]
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselData.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentData = carouselData[currentSlide];

  return (
    <section 
      className={styles.hero}
      style={{ backgroundImage: `url('${currentData.backgroundImage}')` }}
    >
      <div className={styles.heroContainer}>
        <div className={styles.leftPanel}>
          <h1 className={styles.title}>
            {currentData.title}
          </h1>
          <p className={styles.subtitle}>
            {currentData.subtitle}
          </p>
          {currentData.welcomeText && (
            <p className={styles.welcomeText}>{currentData.welcomeText}</p>
          )}
          
          {/* Only show button for slide 1 */}
          {currentData.id === 1 && (
            <Link href="/sobre-nos" className={styles.button}>
              Conheça nossa história →
            </Link>
          )}
        </div>
        
        {/* Render problems list for slide 2 - separate from leftPanel */}
        {currentData.problems && (
          <div className={styles.problemsList}>
            {currentData.problems.map((problem, index) => (
              <div key={index} className={styles.problemCard}>
                <h4 className={styles.problemName}>{problem.name}</h4>
                <p className={styles.problemDescription}>{problem.description}</p>
              </div>
            ))}
          </div>
        )}
        
        {/* Render advantages list for slide 3 - separate from leftPanel */}
        {currentData.advantages && (
          <div className={styles.advantagesList}>
            {currentData.advantages.map((advantage, index) => (
              <div key={index} className={styles.advantageCard}>
                <h4 className={styles.advantageName}>{advantage.name}</h4>
                <p className={styles.advantageDescription}>{advantage.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Carousel indicators */}
      <div className={styles.carouselIndicators}>
        {carouselData.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.indicatorActive : ''
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
