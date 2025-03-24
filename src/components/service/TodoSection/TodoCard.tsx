import styles from "./TodoCard.module.css";

export const TodoCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitle}>UI 개발</div>
        <div className={styles.cardDate}>03/21</div>
      </div>
      <div className={styles.cardDescription}>공통</div>
      <div className={styles.avatarSection}>
        {[0, 1, 2].map((i) => (
          <div
            className={styles.avatar}
            key={i}
            style={{ zIndex: 10 - i, marginLeft: i > 0 ? "-12px" : "0" }}
          ></div>
        ))}
        <span className={styles.avatarText}>A,B,C</span>
      </div>
    </div>
  );
};
