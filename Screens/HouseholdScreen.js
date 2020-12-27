import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HouseHold from "../components/HouseHold";

const Stack = createStackNavigator();

const HouseholdScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HouseHold"
        component={HouseHold}
        options={{
          headerTitle: "Household",
        }}
      />
    </Stack.Navigator>
  );
};

export default HouseholdScreen;
