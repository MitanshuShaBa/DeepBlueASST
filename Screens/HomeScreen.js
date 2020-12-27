import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "../components/Home";

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "Home",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
