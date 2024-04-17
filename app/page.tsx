import Head from 'next/head';
import Counter from './components/Counter';
import Header from '../app/layout';
import Image from 'next/image';
import styles from '../app/page.module.css'; // Importa tus estilos CSS

export default function Home() {
  return (
    <div className={styles.container}> {/* Utiliza el contenedor y aplica estilos */}
     
      <Head>
        <title>contador</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.content}> {/* Utiliza el contenedor de contenido y aplica estilos */}
        <picture>
          <source srcSet="https://w.forfun.com/fetch/bd/bdf2e1b072187f2515b8b7e63fd4a6ca.jpeg?h=900&r=0.5" type="image/webp" />
          <img
            src="https://w.forfun.com/fetch/bd/bdf2e1b072187f2515b8b7e63fd4a6ca.jpeg?h=900&r=0.5"
            alt="Landscape picture"
            width={500}
            height={650}
          />
        </picture>
        <p className={styles.description}>¿la moto r6 es la mejor calidad precio? comprala ahora esta moto unica</p>

        <picture>
          <source srcSet="https://w.forfun.com/fetch/86/86746d4c7d81b8cef7d6961d4f372759.jpeg?h=900&r=0.5" type="image/webp" />
          <img
            src="https://w.forfun.com/fetch/86/86746d4c7d81b8cef7d6961d4f372759.jpeg?h=900&r=0.5"
            alt="Landscape picture"
            width={500}
            height={650}
          />
        </picture>
        <p className={styles.description}>comprala por un precio de $250000 pesos mexicanos</p>


        <Counter />
      </main>
      
    </div>
  );
}
