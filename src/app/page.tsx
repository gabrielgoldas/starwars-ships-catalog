import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Conheça as Naves do Universo Star Wars</h1>
      <Link href="/spaceships" className="btn-outline">Ver Todas</Link>
    </main>
  );
}
