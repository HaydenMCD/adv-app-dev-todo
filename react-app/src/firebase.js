import { initializeApp } from "firebase/app";
import { initializeFirestore,
  CACHE_SIZE_UNLIMITED,
enableIndexedDbPersistence } from "firebase/firestore"; 
  import { getAuth } from "firebase/auth"

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
  const db = initializeFirestore(app, { cacheSizeBytes: CACHE_SIZE_UNLIMITED});
enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });

const auth = getAuth(app);

export { db, auth };
