import styles from "./index.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="logo" className={styles.logo} />
    </header>
  );
};
