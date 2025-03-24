import { Button } from "../../ui/Button";
import styles from "./index.module.css";

export const ButtonSection = () => {
  return (
    <section className={styles.buttonSection}>
      <Button>+ 새 할 일 추가</Button>
    </section>
  );
};
