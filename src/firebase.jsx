// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyC5F_WjZQsvXGHvxF1fM_tNGdF5p-AnqTQ",
  authDomain: "du-an-tot-nghiep-1663990063456.firebaseapp.com",
  projectId: "du-an-tot-nghiep-1663990063456",
  storageBucket: "du-an-tot-nghiep-1663990063456.appspot.com",
  messagingSenderId: "625142945996",
  appId: "1:625142945996:web:7d4774674d138b234dca69",
  measurementId: "G-YBD4EJ1Z4B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);