import axios from "axios";

import { put } from "redux-saga/effects";
import { KIRIM_DATA_PERTAMA, KIRIM_DATA_KEDUA } from "../../Action/Actiondata1";

function* datapertama() {
  const urlpoke = "https://pokeapi.co/api/v2/pokemon";
  try {
    const res = yield axios.get(urlpoke);
    const data = res.data;
    yield put({ type: KIRIM_DATA_PERTAMA, payload: data });
    const panggilurl = yield data.results;
    for (let i = 0; i <= panggilurl.length; i++) {
      const aset = yield panggilurl[i];
      const itemaset = yield axios.get(aset.url);
      yield put({ type: KIRIM_DATA_KEDUA, payload: itemaset });
    }
  } catch (error) {
    console.log(error);
  }
}

export default datapertama;
