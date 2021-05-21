import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDCFzc9O6ivydJmsG6L6bHgajJTyn5g-ME",
  authDomain: "crwn-db-59fa0.firebaseapp.com",
  projectId: "crwn-db-59fa0",
  storageBucket: "crwn-db-59fa0.appspot.com",
  messagingSenderId: "232915359182",
  appId: "1:232915359182:web:f6cc40d8fb8543b4bfc79f",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
