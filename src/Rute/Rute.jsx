import { Route, Routes } from "react-router-dom";
import HomePage from "../Component/HomePage";
import Detail from "../Component/Detail";

const Rute = () => {
  return (
    <Routes>
      <Route path="/Pokemon_v2/" element={<HomePage />} />
      <Route path="/Pokemon_v2/detail" element={<Detail />} />
    </Routes>
  );
};

export default Rute;
