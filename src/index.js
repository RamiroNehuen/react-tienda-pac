import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { products } from './components/items/item-data'
// import {collection, addDoc, getFirestore} from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARCzjFhixXwee-IOYAciIDbCKMeC8JUVM",
  authDomain: "tienda-pac.firebaseapp.com",
  projectId: "tienda-pac",
  storageBucket: "tienda-pac.appspot.com",
  messagingSenderId: "1097305293501",
  appId: "1:1097305293501:web:5637a800e0b8e20ba2edd4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// const db = getFirestore()
// const ref = collection(db, 'products')
// products.map((product) => addDoc(ref, product))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
