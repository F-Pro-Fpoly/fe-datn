// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// export const firebaseConfig = {
//   apiKey: "AIzaSyC5F_WjZQsvXGHvxF1fM_tNGdF5p-AnqTQ",
//   authDomain: "du-an-tot-nghiep-1663990063456.firebaseapp.com",
//   projectId: "du-an-tot-nghiep-1663990063456",
//   storageBucket: "du-an-tot-nghiep-1663990063456.appspot.com",
//   messagingSenderId: "625142945996",
//   appId: "1:625142945996:web:7d4774674d138b234dca69",
//   measurementId: "G-YBD4EJ1Z4B"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPGvnI8eOo_YpwGFZ97bDWFR8sMGZM6lA",
  authDomain: "test-df291.firebaseapp.com",
  databaseURL: "https://test-df291-default-rtdb.firebaseio.com",
  projectId: "test-df291",
  storageBucket: "test-df291.appspot.com",
  messagingSenderId: "347009197657",
  appId: "1:347009197657:web:6303cbe234bf35235b7348",
  measurementId: "G-FS0ZFLZRFT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);