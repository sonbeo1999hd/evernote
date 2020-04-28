import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'
import 'firebase/firestore'
firebase.initializeApp({
  apiKey: "AIzaSyA87n1bq_HOZuzoHSIOBSi0_JCMsYNdyiY",
    authDomain: "evernote-clone-cf39a.firebaseapp.com",
    databaseURL: "https://evernote-clone-cf39a.firebaseio.com",
    projectId: "evernote-clone-cf39a",
    storageBucket: "evernote-clone-cf39a.appspot.com",
    messagingSenderId: "171578941230",
    appId: "1:171578941230:web:6570cc097f3c22dd9be4bf",
    measurementId: "G-NXN3V7M633"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
