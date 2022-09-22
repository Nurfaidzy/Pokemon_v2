import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

//reducer
import PageReducer from "./../Reducer/PageReducer";

//saga
import StoreSaga from "./../Saga/Root/StoreSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  PageReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(StoreSaga);

export default store;
