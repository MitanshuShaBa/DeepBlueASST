import React, { useEffect } from "react";
import LoginScreen from "./Screens/LoginScreen";
import TabViews from "./TabRoutes";
import firebase from "firebase";
import { useStateValue } from "./utils/StateProvider";
import { SET_USER } from "./utils/reducer_actions";

const Main = () => {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    // console.log(user);
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        dispatch({
          type: SET_USER,
          user,
        });
      } else {
        // User is signed out
        dispatch({
          type: SET_USER,
          user: {},
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return Object.keys(user).length !== 0 ? <TabViews /> : <LoginScreen />;
};

export default Main;
