import styles from "@/styles/modules/asteroidsList.module.scss";
import AsteroidItem from "./AsteroidItem";

const AsteroidsList = () => {
  return (
    <section className={styles.section}>
      <div className={styles.buttons__wrapper}>
        <button className={`${styles.button} ${styles.button_accent}`}>
          Фильтры
        </button>
        <button className={styles.button}>По возрастанию</button>
      </div>
      <AsteroidItem />
    </section>
  );
};

export default AsteroidsList;
