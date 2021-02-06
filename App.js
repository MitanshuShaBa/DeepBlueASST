import { NavigationContainer, TabActions } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HouseholdScreen from "./Screens/HouseholdScreen";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import CommunityScreen from "./Screens/CommunityScreen";
import ActivityScreen from "./Screens/ActivityScreen";
import HomeScreen from "./Screens/HomeScreen";
import { StateProvider } from "./utils/StateProvider";
import reducer, { initialState } from "./utils/reducer";

import * as firebase from "firebase";
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

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Firebase</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
        <Tab.Navigator
          backBehavior={"initialRoute"}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "ios-home";
              } else if (route.name === "Activity") {
                iconName = "ios-hourglass";
              } else if (route.name === "Add") {
                iconName = "ios-add-circle";
              } else if (route.name === "Household") {
                iconName = "md-people";
              } else if (route.name === "Community") {
                iconName = "ios-people";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Activity" component={ActivityScreen} />
          <Tab.Screen name="Add" component={SettingsScreen} />
          <Tab.Screen name="Household" component={HouseholdScreen} />
          <Tab.Screen name="Community" component={CommunityScreen} />
        </Tab.Navigator>
        <ExpoStatusBar />
      </NavigationContainer>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
