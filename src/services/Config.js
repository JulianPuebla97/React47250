import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDObuYHneDBnyY-xPsVLPb2OT3EpDt9Wp4",
    authDomain: "react-47250-final-puebla.firebaseapp.com",
    projectId: "react-47250-final-puebla",
    storageBucket: "react-47250-final-puebla.appspot.com",
    messagingSenderId: "707835286035",
    appId: "1:707835286035:web:f9fbba6e79cf828a5165e6"
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };