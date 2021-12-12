import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {
  BrowserRouter as Router,
  
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
// import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase/app';
// import { FirebaseApp } from '@firebase/app';
// import firebase from "firebase";
import { getAuth, onAuthStateChanged, getRedirectResult } from 'firebase/auth';
import { collection, doc, getDoc } from 'firebase/firestore/lite';
import { getFirestore } from 'firebase/firestore';
// Initialize Firebase
// const firebaseApp = initializeApp({ /* config */ });


// const app = initializeApp(
//   {
//     apiKey: "AIzaSyDsHf-1oWVFGo2CcSg1CnuBV1sAEZdJ9bg",
//     authDomain: "seo-kabinet.firebaseapp.com",
//     projectId: "seo-kabinet",
//     storageBucket: "seo-kabinet.appspot.com",
//     messagingSenderId: "525063468100",
//     appId: "1:525063468100:web:da85810b59ce5b43a6b811",
//     measurementId: "G-FFCHQQE6ED"
//   }

// );
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlwXuyZ7pnFql0mVhdq7HxmdnhSuTQri8",
  authDomain: "seo-cabinet-next.firebaseapp.com",
  databaseURL: "https://seo-cabinet-next-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "seo-cabinet-next",
  storageBucket: "seo-cabinet-next.appspot.com",
  messagingSenderId: "1038801052701",
  appId: "1:1038801052701:web:3348e928e1bbbd838c12f4",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);





// const firebaseApp = initializeApp(  {
//   // apiKey: "AIzaSyDsHf-1oWVFGo2CcSg1CnuBV1sAEZdJ9bg",
//   // authDomain: "seo-kabinet.firebaseapp.com",
//   // projectId: "seo-kabinet",
//   // storageBucket: "seo-kabinet.appspot.com",
//   // messagingSenderId: "525063468100",
//   // appId: "1:525063468100:web:da85810b59ce5b43a6b811",
//   // measurementId: "G-FFCHQQE6ED"

//   apiKey: "AIzaSyAlwXuyZ7pnFql0mVhdq7HxmdnhSuTQri8",
//   authDomain: "seo-cabinet-next.firebaseapp.com",
//   databaseURL: "https://seo-cabinet-next-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "seo-cabinet-next",
//   storageBucket: "seo-cabinet-next.appspot.com",
//   messagingSenderId: "1038801052701",
//   appId: "1:1038801052701:web:3348e928e1bbbd838c12f4",
//   measurementId: "G-JB7DCTJ8QH"
// });

export const Context = createContext(null);

const auth = getAuth();

const db = getFirestore(firebaseApp);
console.log(db)
// console.log(firestore.collection, 1)
// const auth = firebase.auth()
// const firestore = firebase.firestore()

// console.log(db)
ReactDOM.render(

  <Context.Provider value={{
        firebaseApp,
        auth,
        db,
        
      } }>
        <React.StrictMode>
          <Router >
            <App />
          </Router>
        </React.StrictMode>
  </Context.Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
