import "./Style/style.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ambil_data_pertama } from "./Redux/Action/Actiondata1";

function App() {
  const data = useSelector((state) => state.PageReducer);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ambil_data_pertama());
  }, []);

  return <div className="font-bold">sdsds</div>;
}

export default App;
