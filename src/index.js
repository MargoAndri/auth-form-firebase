import React from "react";
import '@babel/polyfill';
import ReactDOM from "react-dom";
import 'firebase/auth'
import App from "./components/App.jsx";
//import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./ducks/rootSaga.js";
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
//import { reactReduxFirebase } from "react-redux-firebase";
import firebase from "./services/api/firebase.js";

//import firebase from "firebase/app";

import "firebase/auth";

const rrfConfig = {
    userProfile: 'users'
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};
const rootReducer = combineReducers({
    firebase: firebaseReducer
    // firestore: firestoreReducer // <- needed if using firestore
});



const sagaMiddleware = createSagaMiddleware();
//const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(createStore);
//const reducer = (initialState, action) => {};
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    // createFirestoreInstance // <- needed if using firestore
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


