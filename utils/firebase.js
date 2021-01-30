import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBcVKrIaohfl48yRvAz1i3Ym93ZwfBTpdc",
  authDomain: "deep-blue-asst.firebaseapp.com",
  databaseURL: "https://deep-blue-asst.firebaseio.com",
  projectId: "deep-blue-asst",
  storageBucket: "deep-blue-asst.appspot.com",
  messagingSenderId: "390678902667",
  appId: "1:390678902667:web:2e9f6b2487e310358f218e",
  measurementId: "G-8WHZHXGB89",
});
firebase.analytics();

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();
const FieldValue = firebase.firestore.FieldValue;

export { db, auth, provider, storage, FieldValue };
