import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export const Button = ({ children }: Props) => {
  return <button className={styles.button}>{children}</button>;
};
