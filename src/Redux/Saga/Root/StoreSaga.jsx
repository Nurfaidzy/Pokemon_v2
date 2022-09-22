import { all } from "redux-saga/effects";
import watchersaga from "../Watcher/watchersaga";

function* StoreSaga() {
  yield all([watchersaga()]);
}
export default StoreSaga;
