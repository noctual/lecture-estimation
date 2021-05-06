import firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

var firebaseConfig = {
    apiKey: "AIzaSyCmGyCwto2RFCqfomEenIHSxRZtySRLKxA",
    authDomain: "lecture-estimation.firebaseapp.com",
    databaseURL: "https://lecture-estimation-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lecture-estimation",
    storageBucket: "lecture-estimation.appspot.com",
    messagingSenderId: "356803054194",
    appId: "1:356803054194:web:a4dc1d53b58aef702450eb",
    measurementId: "G-1132TD6D91"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);

export default firebase;
