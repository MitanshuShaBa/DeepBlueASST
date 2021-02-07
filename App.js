import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { StateProvider } from "./utils/StateProvider";
import reducer, { initialState } from "./utils/reducer";
import * as firebase from "firebase";
import Main from "./Main";
const firebaseConfig = {
  apiKey: "AIzaSyBcVKrIaohfl48yRvAz1i3Ym93ZwfBTpdc",
  authDomain: "deep-blue-asst.firebaseapp.com",
  databaseURL: "https://deep-blue-asst.firebaseio.com",
  projectId: "deep-blue-asst",
  storageBucket: "deep-blue-asst.appspot.com",
  messagingSenderId: "390678902667",
  appId: "1:390678902667:web:2e9f6b2487e310358f218e",
  measurementId: "G-8WHZHXGB89",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </StateProvider>
  );
}
