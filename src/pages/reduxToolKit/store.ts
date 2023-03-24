import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./saga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (mw) => mw().concat(sagaMiddleWare)
});


sagaMiddleWare.run(watcherSaga)
export default store;
