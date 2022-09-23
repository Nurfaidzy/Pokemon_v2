import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ambil_data_pertama } from "../Redux/Action/Actiondata1";
import Card from "./HomePage/Card";

const HomePage = () => {
  const data = useSelector((state) => state.PageReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ambil_data_pertama());
  }, [dispatch]);

  return (
    <div>
      <Card data={data} />;
    </div>
  );
};

export default HomePage;
