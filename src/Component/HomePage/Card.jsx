import { useDispatch } from "react-redux";
import { pindah_next } from "../../Redux/Action/Actiondata1";
import { kirim_detail } from "../../Redux/Action/Actiondetail";

import { useNavigate } from "react-router-dom";
const Card = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pindah = (props) => {
    dispatch(kirim_detail(props));
    navigate("/detail");
  };
  return (
    <div className="py-[5%]">
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
              <div className="text-center uppercase">{x.name}</div>
              <div className="text-center" onClick={() => pindah(x.name)}>
                Detail
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-10 gap-10">
        <div>
          <button onClick={() => dispatch(pindah_next(data.next))}>
            Liat lebih banyak?
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
