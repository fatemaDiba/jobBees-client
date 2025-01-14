// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYS9W5vIF-0IXieHRfuLfJw1C4Xl8E0Sk",
  authDomain: "jobbees-254ba.firebaseapp.com",
  projectId: "jobbees-254ba",
  storageBucket: "jobbees-254ba.firebasestorage.app",
  messagingSenderId: "148164738896",
  appId: "1:148164738896:web:859b06da3b49f73bb7f655",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
