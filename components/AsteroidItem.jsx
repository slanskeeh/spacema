import styles from "@/styles/modules/asteroidItem.module.scss";

const AsteroidItem = ({ imageUrl = "", name, diameter, distance, date }) => {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper__image}>
        <img
          className={styles.image}
          src="https://fikiwiki.com/uploads/posts/2022-02/1645055141_5-fikiwiki-com-p-kartinki-asteroidi-6.jpg"
          alt="asteroid image"
        />
      </div>
      <div className={styles.wrapper__info}>
        <div className={styles.wrapper__text}>
          <strong className={styles.title}>
            Название: <span>EFIN-124</span>
          </strong>
          <p>
            Диаметр: <span>145 м</span>
          </p>
          <p>
            Подлетит: <span>15.07.2012</span>
          </p>
          <p>
            Расстрояние: <span>7.5 млн км</span>
          </p>
        </div>
        <div className={styles.wrapper__buttons}>
          <button className={`${styles.button} ${styles.button_favorite}`}>
            <svg
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4755 1.08156L16.8922 8.51925C17.093 9.13729 17.6689 9.55573 18.3188 9.55573H26.1392C26.6236 9.55573 26.825 10.1755 26.4331 10.4602L20.1062 15.057C19.5805 15.439 19.3605 16.116 19.5613 16.734L21.978 24.1717C22.1277 24.6324 21.6004 25.0154 21.2086 24.7307L14.8817 20.134C14.3559 19.752 13.6441 19.752 13.1183 20.134L6.79144 24.7307C6.39959 25.0154 5.87234 24.6324 6.02202 24.1717L8.43867 16.734C8.63949 16.116 8.4195 15.439 7.89377 15.057L1.56688 10.4602C1.17503 10.1755 1.37641 9.55573 1.86078 9.55573H9.68123C10.3311 9.55573 10.907 9.13729 11.1078 8.51925L13.5245 1.08156C13.6741 0.620904 14.3259 0.6209 14.4755 1.08156Z"
                fill="#FAFDFF"
                stroke="#159CE5"
              />
            </svg>
          </button>
          <button className={`${styles.button} ${styles.button_cart}`}>
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.232975 7.6819L1.96595 14.6138C2.13289 15.2816 2.73286 15.75 3.42116 15.75H14.5788C15.2671 15.75 15.8671 15.2816 16.034 14.6138L17.767 7.6819C17.8854 7.20854 17.5273 6.75 17.0394 6.75H14.625V3C14.625 1.34315 13.2819 0 11.625 0H6.375C4.71815 0 3.375 1.34315 3.375 3V6.75H0.960582C0.472654 6.75 0.114635 7.20854 0.232975 7.6819ZM10.875 2.25C11.7034 2.25 12.375 2.92157 12.375 3.75V6.75H5.625V3.75C5.625 2.92157 6.29657 2.25 7.125 2.25H10.875ZM4.5 12.375C4.08579 12.375 3.75 12.0392 3.75 11.625V10.875C3.75 10.4608 4.08579 10.125 4.5 10.125H5.25C5.66421 10.125 6 10.4608 6 10.875V11.625C6 12.0392 5.66421 12.375 5.25 12.375H4.5ZM8.625 12.375C8.21079 12.375 7.875 12.0392 7.875 11.625V10.875C7.875 10.4608 8.21079 10.125 8.625 10.125H9.375C9.78921 10.125 10.125 10.4608 10.125 10.875V11.625C10.125 12.0392 9.78921 12.375 9.375 12.375H8.625ZM12.75 12.375C12.3358 12.375 12 12.0392 12 11.625V10.875C12 10.4608 12.3358 10.125 12.75 10.125H13.5C13.9142 10.125 14.25 10.4608 14.25 10.875V11.625C14.25 12.0392 13.9142 12.375 13.5 12.375H12.75Z"
                fill="#FAFDFF"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default AsteroidItem;
