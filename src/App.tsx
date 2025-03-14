import { Route, Routes } from "react-router-dom";
import Todos from "./pages/todos";
import Create from "./pages/create";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}

export default App;
