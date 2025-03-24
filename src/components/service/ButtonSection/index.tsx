import { Button } from "../../ui/Button";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

export const ButtonSection = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.buttonSection}>
      <Button onClick={() => navigate("/create")}>+ 새 할 일 추가</Button>
    </section>
  );
};
