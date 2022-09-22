import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

//reducer
import PageReducer from "./../Reducer/PageReducer";
import DetailReducer from "../Reducer/DetailReducer";

//saga
import StoreSaga from "./../Saga/Root/StoreSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  PageReducer,
  DetailReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(StoreSaga);

export default store;
