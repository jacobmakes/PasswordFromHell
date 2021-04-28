import firebase from 'firebase/app';
import 'firebase/analytics';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD5QzSzMvRymXW5PYD2nlwiwc85NPdUKRw",
    authDomain: "passwordhell.firebaseapp.com",
    projectId: "passwordhell",
    storageBucket: "passwordhell.appspot.com",
    messagingSenderId: "632242473335",
    appId: "1:632242473335:web:a776207254bcc3a1747972",
    measurementId: "G-2NT09L3QJY"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const ana = firebase.analytics();

export { ana };