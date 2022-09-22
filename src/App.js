import "./Style/style.css";
import { BrowserRouter } from "react-router-dom";
import Rute from "./Rute/Rute";

function App() {
  return (
    <BrowserRouter>
      <Rute />
    </BrowserRouter>
  );
}

export default App;
