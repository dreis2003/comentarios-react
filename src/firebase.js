import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAMORTmeE048GUQUqUcnPXaNT3yPOd9g0w",
    authDomain: "comments-devreactjs-cdeworks.firebaseapp.com",
    databaseURL: "https://comments-devreactjs-cdeworks.firebaseio.com",
    projectId: "comments-devreactjs-cdeworks",
    storageBucket: "comments-devreactjs-cdeworks.appspot.com",
    messagingSenderId: "484514769894",
    appId: "1:484514769894:web:20411a06c734da5e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database();
  export const auth = firebase.auth();