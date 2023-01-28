import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDpklhVY_0r2Lb4Su3Zqzf_GBipMahwZvQ",
    authDomain: "e-ride-projects-94f66.firebaseapp.com",
    projectId: "e-ride-projects-94f66",
    storageBucket: "e-ride-projects-94f66.appspot.com",
    messagingSenderId: "637804880136",
    appId: "1:637804880136:web:95668a03d1ae12fba90cbd"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
