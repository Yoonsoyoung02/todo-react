import styles from "./TodoColumn.module.css";
import { TodoCard } from "./TodoCard";
export const TodoColumn = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>시작하지 않음</h2>
      <TodoCard />
    </div>
  );
};
