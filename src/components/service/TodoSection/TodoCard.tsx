import styles from "./TodoCard.module.css";
import { Todo } from "../../../types/todo";

type Props = {
  task: Todo;
};

export const TodoCard = ({ task }: Props) => {
  const { title, content, startDate, assignees } = task;

  const formattedDate = new Date(startDate).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardDate}>{formattedDate}</div>
      </div>
      <div className={styles.cardDescription}>{content}</div>
      <div className={styles.avatarSection}>
        {assignees.map((assignee, i) => (
          <div
            className={styles.avatar}
            key={assignee}
            style={{ zIndex: 10 - i, marginLeft: i > 0 ? "-12px" : "0" }}
          ></div>
        ))}
        <span className={styles.avatarText}>{assignees.join(",")}</span>
      </div>
    </div>
  );
};
