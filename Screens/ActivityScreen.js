import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import Activity from "../components/Activity";

const Stack = createStackNavigator();

const ActivityScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ActivityPage"
        component={Activity}
        initialParams={{ purpose_selected: null }}
        options={{
          headerTitle: "Activity",
        }}
      />
    </Stack.Navigator>
  );
};

export default ActivityScreen;
