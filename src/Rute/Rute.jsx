import { Route, Routes } from "react-router-dom";
import HomePage from "../Component/HomePage";
import Detail from "../Component/Detail";

const Rute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
};

export default Rute;
