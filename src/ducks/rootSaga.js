import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/saga.js";


export default function* rootSaga() {
    yield all([yield fork(authSaga)]);
}
