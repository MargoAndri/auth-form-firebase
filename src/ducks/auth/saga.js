import { call, put, takeEvery } from "redux-saga/effects";
import firebase from "../../services/api/firebase.js";
import {REGISTER_NEW_USER_REQUEST} from './constants.js';
import ReduxSagaFirebase from 'redux-saga-firebase';
import {onSubmitNewUserSuccess} from "./actions.js";

const reduxSagaFirebase = new ReduxSagaFirebase(firebase);

function* toRegisterNewUser({ user }) {
    try {
        const result = yield call(reduxSagaFirebase.auth.createUserWithEmailAndPassword, user.email, user.password);
        const userInfo = {
            email: user.email,
            firstName: user.firstName,
            secondName: user.secondName,
            username: user.username,
            password: user.password,
        };
        yield call(reduxSagaFirebase.database.update, `users/${result.user.uid}`, userInfo);
        yield put(onSubmitNewUserSuccess());
    } catch (e) {
        console.log(e);
    }
}


export default function*() {
    yield takeEvery(REGISTER_NEW_USER_REQUEST, toRegisterNewUser);
}
