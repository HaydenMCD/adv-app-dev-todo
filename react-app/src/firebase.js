import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDFo8Q_jBGKrTaKtd_0zbjjkcx4geB5B0k",
    authDomain: "hayden-adv-app-dev.firebaseapp.com",
    projectId: "hayden-adv-app-dev",
    storageBucket: "hayden-adv-app-dev.appspot.com",
    messagingSenderId: "380718640189",
    appId: "1:380718640189:web:cf5ce120c31ee45ed98e54",
    measurementId: "G-6H1KNC0MRS"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };
