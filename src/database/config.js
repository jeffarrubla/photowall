import * as firebase from 'firebase'
// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCjiHbN2Gj6OpyB_WCpnbtpq_VtKSoKGt0",
    authDomain: "photowall-7419b.firebaseapp.com",
    databaseURL: "https://photowall-7419b.firebaseio.com/",
    projectId: "photowall-7419b",
    storageBucket: "photowall-7419b.appspot.com",
    messagingSenderId: "1032353571027",
    appId: "1:1032353571027:web:03bfe5cfa4e1fee0763426",
    measurementId: "G-4SCZBG92V2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
const database = firebase.database()

export {database}