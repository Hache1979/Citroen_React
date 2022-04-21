// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6UKEj33XClRThOdjLkRNmLAOToBb0GNo",
  authDomain: "ecommercecitroen-be55c.firebaseapp.com",
  projectId: "ecommercecitroen-be55c",
  storageBucket: "ecommercecitroen-be55c.appspot.com",
  messagingSenderId: "133002479552",
  appId: "1:133002479552:web:93e46ad5e7d85c20b6aa25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const ddbb = getFirestore(app);

export default ddbb;