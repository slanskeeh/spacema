import AsteroidsList from "@/components/AsteroidsList";
import styles from "@/styles/modules/page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Каталог астероидов</h2>
      <div className={styles.divider}></div>
      <AsteroidsList />
    </main>
  );
}
