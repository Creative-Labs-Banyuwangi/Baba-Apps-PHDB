import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD4J0tNvTXfbjkWr1A69_WtVcdmfoApySM",
  authDomain: "baba-apps.firebaseapp.com",
  databaseURL: "https://baba-apps-default-rtdb.firebaseio.com",
  projectId: "baba-apps",
  storageBucket: "baba-apps.appspot.com",
  messagingSenderId: "356487672188",
  appId: "1:356487672188:web:f7a42be0213893742674f9"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export default firebaseApp;