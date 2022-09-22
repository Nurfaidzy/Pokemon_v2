import { useSelector } from "react-redux";

const Detail = () => {
  const poke = useSelector((state) => state.DetailReducer);

  console.log(poke);
  return (
    <div>
      <div>{poke.nama}</div>
      <div>
        <div>
          <div>A boy</div>
          <img
            src={poke.data.sprites && poke.data.sprites.front_default}
            alt={poke.nama}
          />
        </div>
        {poke.data && (
          <div>
            {poke.data.sprites && (
              <>
                {poke.data.sprites.front_female && (
                  <>
                    <div>A Girl</div>
                    <img src={poke.data.sprites.front_female} alt={poke.nama} />
                  </>
                )}
              </>
            )}
          </div>
        )}

        <div>Ability</div>
        <div>
          {poke.data.length !== 0 &&
            poke.data.abilities.map((x, i) => (
              <div key={i}>
                <div>{x.ability.name}</div>
              </div>
            ))}
        </div>
        <div>
          <div>height</div>
          <div>{poke.data && poke.data.height}</div>
        </div>
        <div>
          <div>weight</div>
          <div>{poke.data && poke.data.weight}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Detail;
