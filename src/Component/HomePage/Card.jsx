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
  console.log(data);
  return (
    <div className="py-[5%]">
      <div className="text-center uppercase font-bold text-4xl text-yellow-500 py-20">
        Pokemon List
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-20 ">
          {data.asetpoke.map((x, i) => (
            <div
              key={i}
              className="bg-yellow-200/20 shadow-lg p-8 rounded-lg flex"
            >
              <div className="flex justify-center">
                <img
                  src={x.sprites.front_default}
                  className="w-[100px] h-fit "
                  alt={x.name}
                />
              </div>
              <div className="grid grid-cols-1 gap-1">
                <div className="text-center uppercase font-bold text-xl ">
                  {x.name}
                </div>
                <div className="text-center">Type</div>
                <div className="grid grid-cols-2 gap-4">
                  {x.types.map((y, j) => (
                    <div key={j} className="text-center capitalize">
                      <div>{y.type.name}</div>
                    </div>
                  ))}
                </div>
                <div className="text-center" onClick={() => pindah(x.name)}>
                  <button className="py-1 px-2 rounded-lg  bg-yellow-300">
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-10 gap-10">
        <div>
          <button
            className="bg-yellow-500 p-4 rounded-xl font-bold shadow-lg"
            onClick={() => dispatch(pindah_next(data.next))}
          >
            Liat lebih banyak?
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
