import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Core from "./Projects/Core";

function App() {
  return (
    <BrowserRouter>
      <Core />
    </BrowserRouter>
  );
}

export default App;
