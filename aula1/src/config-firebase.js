
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0bspcfHTTBkzp9zPF9V8jEclOjTiaTj0",
  authDomain: "cash-tarefas.firebaseapp.com",
  databaseURL: "https://cash-tarefas-default-rtdb.firebaseio.com",
  projectId: "cash-tarefas",
  storageBucket: "cash-tarefas.appspot.com",
  messagingSenderId: "913403201059",
  appId: "1:913403201059:web:d792ecec594277c8731396"
};

// Initialize Firebase
export  const configuration = initializeApp(firebaseConfig);