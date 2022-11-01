// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj0_YAIc437R2Xkog94rMLQSoSqwNfh74",
  authDomain: "react-admin-98f4d.firebaseapp.com",
  databaseURL: "https://react-admin-98f4d.firebaseio.com",
  projectId: "react-admin-98f4d",
  storageBucket: "react-admin-98f4d.appspot.com",
  messagingSenderId: "365151355608",
  appId: "1:365151355608:web:1748b81a780c3261790dad",
  measurementId: "G-90K39CTEE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;