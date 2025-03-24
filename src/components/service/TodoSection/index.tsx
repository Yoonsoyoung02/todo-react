import styles from "./index.module.css";
import { TodoColumn } from "./TodoColumn";

export const TodoSection = () => {
  return (
    <section className={styles.todoSection}>
      <TodoColumn />
      <TodoColumn />
      <TodoColumn />
    </section>
  );
};
