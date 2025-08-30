
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";// this is for firestore database . not for realtime database
import { getDatabase } from "firebase/database";// this is for realtime database
import "firebase/auth";  // this is for authentication


const firebaseConfig = {
  apiKey: "AIzaSyCuqqwpSqzPklWjp6SGLCCQlfUdANojT3Q",
  authDomain: "firsttest-5a995.firebaseapp.com",
  projectId: "firsttest-5a995",
  databaseURL: "https://firsttest-5a995-default-rtdb.firebaseio.com/",
  storageBucket: "firsttest-5a995.firebasestorage.app",
  messagingSenderId: "82773201543",
  appId: "1:82773201543:web:b0eecfaf1f312a35019e22",
  measurementId: "G-NVBK83HBK6"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase(app);

export { db };
export { database };
export { app };