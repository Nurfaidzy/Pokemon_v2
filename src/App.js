import "./Style/style.css";
import { BrowserRouter } from "react-router-dom";
import Rute from "./Rute/Rute";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Rute />
    </BrowserRouter>
  );
}

export default App;
