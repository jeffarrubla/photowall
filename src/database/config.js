import * as firebase from 'firebase'
// Your web app's Firebase configuration
 var firebaseConfig = {
    // Put your credentials here
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
const database = firebase.database()

export {database}