// Import the Firebase SDK
import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBQ73lWMENmPtC2tTyb7xE2xs9Fawpbhm8",
  authDomain: "trivster-78fc7.firebaseapp.com",
  projectId: "trivster-78fc7",
  storageBucket: "trivster-78fc7.appspot.com",
  messagingSenderId: "484062224094",
  appId: "1:484062224094:web:da7341031eb3ff11f12c4f",
  measurementId: "G-Q02M5Y7PSE",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export the Firebase auth object
export default firebase.auth();
