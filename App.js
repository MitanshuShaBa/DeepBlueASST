import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HouseholdScreen from "./Screens/HouseholdScreen";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import CommunityScreen from "./Screens/CommunityScreen";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
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
        <Tab.Screen name="Activity" component={SettingsScreen} />
        <Tab.Screen name="Add" component={SettingsScreen} />
        <Tab.Screen name="Household" component={HouseholdScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
      </Tab.Navigator>
      <ExpoStatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
