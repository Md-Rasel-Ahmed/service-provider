// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp-A111dfk1U10YDhErvmHHyOvJTZlFFs",
  authDomain: "talking-mind-firebase.firebaseapp.com",
  projectId: "talking-mind-firebase",
  storageBucket: "talking-mind-firebase.appspot.com",
  messagingSenderId: "51375075927",
  appId: "1:51375075927:web:86e829320859644cb52912",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
