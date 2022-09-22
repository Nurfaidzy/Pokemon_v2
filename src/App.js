import "./Style/style.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ambil_data_pertama, pindah_next } from "./Redux/Action/Actiondata1";

function App() {
  const data = useSelector((state) => state.PageReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ambil_data_pertama());
  }, [dispatch]);

  console.log(data);
  return (
    <div>
      <div className="text-center uppercase font-bold text-2xl py-10">
        ini datanya
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-6 gap-40">
          {data.asetpoke.map((x, i) => (
            <div key={i}>
              <div className="flex justify-center">
                <img src={x.sprites.front_default} alt={x.name} />
              </div>
              <div className="text-center">{x.name}</div>
              <div></div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-10 gap-10">
        <div>
          <button onClick={() => dispatch(pindah_next(data.next))}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
