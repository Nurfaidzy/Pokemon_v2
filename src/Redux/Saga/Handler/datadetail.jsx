import axios from "axios";
import { put } from "redux-saga/effects";
import { TERIMA_DETAIL } from "../../Action/Actiondetail";

function* datadetail(Action) {
  const urlpoke = "https://pokeapi.co/api/v2/pokemon";
  try {
    const res = yield axios.get(urlpoke + "/" + Action.payload);
    yield put({ type: TERIMA_DETAIL, payload: res.data });
  } catch (error) {
    console.log(error);
  }
}

export default datadetail;
