import React from "react";
import ReactDOM from "react-dom";
import '@babel/polyfill';
import "firebase/auth";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { ReactReduxFirebaseProvider, firebaseReducer } from "react-redux-firebase";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import App from "./components/App.jsx";
import rootSaga from "./ducks/rootSaga.js";
import auth from './ducks/auth/reducer.js';
import firebase from "./services/api/firebase.js";


const rrfConfig = {
    userProfile: 'users'
};

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    auth,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
};

sagaMiddleware.run(rootSaga);



ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById("root")
);


