import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HouseHold from "../components/HouseHold";
import Community from "../components/Community";

const Stack = createStackNavigator();

const CommunityScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Community"
        component={Community}
        options={{
          headerTitle: "Community",
        }}
      />
    </Stack.Navigator>
  );
};

export default CommunityScreen;
