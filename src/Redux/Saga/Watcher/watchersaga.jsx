import datapertama from "../Handler/datapertama";
import { AMBIL_DATA_PERTAMA, PINDAH_NEXT } from "../../Action/Actiondata1";
import { takeEvery } from "redux-saga/effects";

function* watchersaga() {
  yield takeEvery(AMBIL_DATA_PERTAMA, datapertama);
  yield takeEvery(PINDAH_NEXT, datapertama);
}

export default watchersaga;
