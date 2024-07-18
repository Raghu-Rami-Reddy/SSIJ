// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSdayiJ3Ng-W0CGHdR14v3GsT0k6_vPfo",
  authDomain: "ssij-be0e6.firebaseapp.com",
  projectId: "ssij-be0e6",
  storageBucket: "ssij-be0e6.appspot.com",
  messagingSenderId: "1040230736072",
  appId: "1:1040230736072:web:a9127861571753abe705fd",
  measurementId: "G-RFZ940LF1L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);