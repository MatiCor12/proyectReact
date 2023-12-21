import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBXfkRa_sI5ah7xUpUCAtpWYHnyImONEas",
  authDomain: "proyectoreact-d263d.firebaseapp.com",
  projectId: "proyectoreact-d263d",
  storageBucket: "proyectoreact-d263d.appspot.com",
  messagingSenderId: "473751818692",
  appId: "1:473751818692:web:07ce3edae8eff6cd011491"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
