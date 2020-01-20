import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBOgfLqx4_CYsyVnDySjwikAIYejtmkcQU",
    authDomain: "users-app-7f448.firebaseapp.com",
    databaseURL: "https://users-app-7f448.firebaseio.com",
    projectId: "users-app-7f448",
    storageBucket: "users-app-7f448.appspot.com",
    messagingSenderId: "638831714707",
    appId: "1:638831714707:web:4fb751a9364e3a093a8866",
    measurementId: "G-MBWJZ2HHQG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
//   firebase.analytics();

  export default firebase;