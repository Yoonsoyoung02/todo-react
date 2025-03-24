import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { TodoColumn } from "./TodoColumn";
import { Todo } from "../../../types/todo";

const columns = [
  { title: "시작하지 않음", status: "notStarted" },
  { title: "진행 중", status: "inProgress" },
  { title: "완료", status: "done" },
];

export const TodoSection = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos");
      const data = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  console.log(todos);
  return (
    <section className={styles.todoSection}>
      {columns.map((column) => (
        <TodoColumn
          key={column.status}
          title={column.title}
          tasks={todos.filter((todo) => todo.status === column.status)}
        />
      ))}
    </section>
  );
};
