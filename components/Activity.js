import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ActivityCard from "./ActivityCard";
import Card from "./Card";

const Activity = () => {
  return (
    <View style={styles.container}>
      <ActivityCard />
      <ActivityCard />
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 20,
  },
});
