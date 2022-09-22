import datapertama from "../Handler/datapertama";
import { AMBIL_DATA_PERTAMA } from "../../Action/Actiondata1";
import { takeEvery } from "redux-saga/effects";

function* watchersaga() {
  yield takeEvery(AMBIL_DATA_PERTAMA, datapertama);
}

export default watchersaga;
