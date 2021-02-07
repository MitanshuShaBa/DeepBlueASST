import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ActivityScreen from "./Screens/ActivityScreen";
import CommunityScreen from "./Screens/CommunityScreen";
import HomeScreen from "./Screens/HomeScreen";
import HouseholdScreen from "./Screens/HouseholdScreen";
import { useStateValue } from "./utils/StateProvider";
import { SET_USER } from "./utils/reducer_actions";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Add Page</Text>
    </View>
  );
}

const TabViews = () => {
  const [{ user }, dispatch] = useStateValue();
  //   useEffect(() => {
  //     setTimeout(() => {
  //       dispatch({
  //         type: SET_USER,
  //         user: "New user",
  //       });
  //     }, 2000);
  //   }, []);
  return (
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
  );
};

export default TabViews;
