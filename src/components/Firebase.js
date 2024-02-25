import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDVCu2q5bZhp0QhdHrGmb9U4V5gWXcfA4k",
  authDomain: "gdsc-solution-challenge-24.firebaseapp.com",
  projectId: "gdsc-solution-challenge-24",
  storageBucket: "gdsc-solution-challenge-24.appspot.com",
  messagingSenderId: "897874133634",
  appId: "1:897874133634:web:7b5fd81ba9c24edfa66a9b",
  measurementId: "G-3FNWJ8TV2D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {
  app,
  analytics
}