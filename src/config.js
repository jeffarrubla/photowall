import * as firebase from 'firebase'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCjiHbN2Gj6OpyB_WCpnbtpq_VtKSoKGt0",
    authDomain: "photowall-7419b.firebaseapp.com",
    databaseURL: "https://photowall-7419b.firebaseio.com",
    projectId: "photowall-7419b",
    storageBucket: "photowall-7419b.appspot.com",
    messagingSenderId: "1032353571027",
    appId: "1:1032353571027:web:438657a8bc2913b3763426",
    measurementId: "G-8MR12YNJQV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();