import firebase from 'firebase';

// add SDK Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ_sHlcO4vJXLcQGnfg_nR5qo6qXjqTIY",
  authDomain: "voting-app-2826e.firebaseapp.com",
  databaseURL: "https://voting-app-2826e-default-rtdb.firebaseio.com",
  projectId: "voting-app-2826e",
  storageBucket: "voting-app-2826e.appspot.com",
  messagingSenderId: "692448251302",
  appId: "1:692448251302:web:8addbfbd5fc3d069035367",
  measurementId: "G-B82MRTB63W"
};
// Initialize Firebase
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default firebase.database();