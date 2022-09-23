import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const poke = useSelector((state) => state.DetailReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (poke.nama === null) {
      navigate("/Pokemon_v2/");
    }
  }, []);

  return (
    <div
      className="py-[8%] px-[10%] bg-cover h-screen "
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/564x/90/02/46/9002463f0951e6915d4e30b29f90a002.jpg)",
      }}
    >
      <div className="flex justify-center ">
        <div className="grid grid-cols-1 gap-10 bg-white/60 w-fit p-[5%] rounded-lg shadow-lg backdrop-blur-lg">
          <div className="text-center font-bold capitalize text-6xl  ">
            {poke.nama}
          </div>
          <div>
            <div className=" grid grid-cols-2 gap-10 ">
              <div className=" w-[400px] ">
                <div className=" p-2 rounded-lg">
                  {/* <div className="text-center font-bold text-2xl">Male</div> */}
                  <div className="flex justify-center">
                    <img
                      src={poke.data.sprites && poke.data.sprites.front_default}
                      className="w-[200px] bg-white rounded-full shadow-xl"
                      alt={poke.nama}
                    />
                  </div>
                </div>
                {/* {poke.data && (
                  <div className="pt-10">
                    {poke.data.sprites && (
                      <>
                        {poke.data.sprites.front_female && (
                          <>
                            <div className="bg-green-100 p-2 rounded-lg">
                              <div className="text-center font-bold text-2xl">
                                Female
                              </div>
                              <div className="flex justify-center">
                                <img
                                  className="w-[200px] "
                                  src={poke.data.sprites.front_female}
                                  alt={poke.nama}
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                )} */}
              </div>
              <div className="pt-[5%] bg-white w-fit p-4 rounded-lg shadow-xl">
                <div className="text-2xl font-bold text-center ">Ability</div>
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 w-fit gap-8 py-[5%] text-center">
                    {poke.data.length !== 0 &&
                      poke.data.abilities.map((x, i) => (
                        <div key={i}>
                          <div className="text-center capitalize bg-orange-400 text-white p-2 rounded-lg ">
                            {x.ability.name}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="flex gap-16">
                  <div>
                    <div className=" text-2xl font-bold">Height</div>
                    <div className="py-[20%] ">
                      <div className="p-2 bg-green-200 text-center rounded-lg">
                        {poke.data && poke.data.height}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className=" text-2xl font-bold">Weight</div>
                    <div className="py-[20%] ">
                      <div className="p-2 bg-green-200 text-center rounded-lg">
                        {poke.data && poke.data.weight}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
