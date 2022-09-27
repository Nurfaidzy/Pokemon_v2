import { useDispatch } from "react-redux";
import { pindah_next } from "../../Redux/Action/Actiondata1";
import { kirim_detail } from "../../Redux/Action/Actiondetail";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import Jumbotron from "../Jumbotron";
const Card = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pindah = (props) => {
    dispatch(kirim_detail(props));
    navigate("/Pokemon_v2/detail");
  };
  return (
    <div className="py-[5%] bg-cover">
      <div>
        <Jumbotron />
      </div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center uppercase font-bold text-4xl text-yellow-500 py-20"
      >
        Pokemon List
      </motion.div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-20 ">
          {data.asetpoke.map((x, i) => (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.3 }}
              key={i}
              className=" hover:shadow-2xl p-8 rounded-lg flex gap-5 bg-cover   "
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/564x/90/02/46/9002463f0951e6915d4e30b29f90a002.jpg)",
              }}
            >
              <div className="flex justify-center pt-5 ">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={x.sprites.front_default}
                  className="w-[100px] h-fit bg-white rounded-full shadow-lg "
                  alt={x.name}
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="grid grid-cols-1 gap-1  px-5 py-2 rounded-lg shadow-lg bg-white"
              >
                <div className="text-center capitalize font-bold text-xl ">
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
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="py-1 px-2 rounded-lg  bg-yellow-300 hover:font-bold"
                  >
                    Detail
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-10 gap-10">
        <div>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
              borderRadius: "100%",
            }}
            className="bg-yellow-500 p-4 rounded-xl font-bold shadow-lg "
            onClick={() => dispatch(pindah_next(data.next))}
          >
            Liat lebih banyak?
          </motion.button>
        </div>
      </div>
    </div>
  );
};
export default Card;
