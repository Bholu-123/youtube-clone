import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQ-CiAGT-IrBdjd-PyGbIr8NMqPGWTmOM",
  authDomain: "clone-64273.firebaseapp.com",
  projectId: "clone-64273",
  storageBucket: "clone-64273.appspot.com",
  messagingSenderId: "91937011159",
  appId: "1:91937011159:web:a082592a31683695d80792",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
