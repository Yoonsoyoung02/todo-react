import { ButtonSection } from "../../components/service/ButtonSection";
import { Header } from "../../components/service/Header";
import { TodoSection } from "../../components/service/TodoSection";
import { Container } from "../../components/shared/Container";

export default function App() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        background: "#f8f9fa",
        boxSizing: "border-box",
      }}
    >
      <Header />
      <Container>
        <ButtonSection />
        <TodoSection />
      </Container>
    </main>
  );
}
