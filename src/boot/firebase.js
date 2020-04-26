import * as firebase from "firebase/app";
import "firebase/firestore";

// Agregar configuración firebase:
var firebaseConfig = {
    apiKey: "AIzaSyB7D2YqMKc0C4NII7bFFVAyu49DL3oyrEY",
    authDomain: "notealarcon.firebaseapp.com",
    databaseURL: "https://notealarcon.firebaseio.com",
    projectId: "notealarcon",
    storageBucket: "notealarcon.appspot.com",
    messagingSenderId: "162155509311",
    appId: "1:162155509311:web:5acd23a9ad9f59ed25aa8a",
    measurementId: "G-2JZ59KQVZ5"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export { db, firebase };