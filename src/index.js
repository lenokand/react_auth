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
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';
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
const firebaseApp = initializeApp(  {
  apiKey: "AIzaSyDsHf-1oWVFGo2CcSg1CnuBV1sAEZdJ9bg",
  authDomain: "seo-kabinet.firebaseapp.com",
  projectId: "seo-kabinet",
  storageBucket: "seo-kabinet.appspot.com",
  messagingSenderId: "525063468100",
  appId: "1:525063468100:web:da85810b59ce5b43a6b811",
  measurementId: "G-FFCHQQE6ED"
});

export const Context = createContext(null)

const auth = getAuth();

const firestore = getFirestore(firebaseApp);

// const auth = firebase.auth()
// const firestore = firebase.firestore()


ReactDOM.render(

  // <Router >
  //   <Route path="/" component={App} />
  // </Router>,
  // document.getElementById('root')
<Context.Provider value={{
        firebaseApp,
        auth,
        firestore,
        
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
