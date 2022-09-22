import datapertama from "../Handler/datapertama";
import { AMBIL_DATA_PERTAMA, PINDAH_NEXT } from "../../Action/Actiondata1";
import { takeEvery } from "redux-saga/effects";
import { KIRIM_DETAIL } from "../../Action/Actiondetail";
import datadetail from "./../Handler/datadetail";
function* watchersaga() {
  yield takeEvery(AMBIL_DATA_PERTAMA, datapertama);
  yield takeEvery(PINDAH_NEXT, datapertama);
  yield takeEvery(KIRIM_DETAIL, datadetail);
}

export default watchersaga;
