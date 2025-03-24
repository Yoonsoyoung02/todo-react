import styles from "./TodoColumn.module.css";
import { TodoCard } from "./TodoCard";
import { Todo } from "../../../types/todo";

type Props = {
  title: string;
  tasks: Todo[];
};

export const TodoColumn = ({ title, tasks }: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {tasks.map((task) => (
        <TodoCard key={task.id} task={task} />
      ))}
    </div>
  );
};
