import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAr1qkLxVoTdtFPJnRkI5xTWT29XXAF2-c",
  authDomain: "ciclista-eletronico-parte-4.firebaseapp.com",
  projectId: "ciclista-eletronico-parte-4",
  storageBucket: "ciclista-eletronico-parte-4.appspot.com",
  messagingSenderId: "343555985544",
  appId: "1:343555985544:web:980dd63cecf527c4ec8f3d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
