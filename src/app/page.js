import Image from 'next/image';
import styles from './page.module.css';
import Card from './components/Card/Card.jsx';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>Hola!</div>
      <Card></Card>
    </main>
  );
}
