 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEInhxQEIQ-El0phMOTKfWJamRMeYKed4",
  authDomain: "let-s-chat-web-app-769ff.firebaseapp.com",
  projectId: "let-s-chat-web-app-769ff",
  storageBucket: "let-s-chat-web-app-769ff.appspot.com",
  messagingSenderId: "282177817024",
  appId: "1:282177817024:web:49d167d78d0368342de025",
  measurementId: "G-QGT03X4C9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Code 

function logOut(){
    window.location = "index.html";
}