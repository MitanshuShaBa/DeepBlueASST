import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "./Card";

const Person = ({
  name = "Loading...",
  photo_url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
}) => {
  return (
    <Card style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: photo_url,
        }}
      />
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.name}>
        {name}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontSize: 15,
    width: 80,
    textAlign: "center",
  },
  root: {
    width: 110,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 2,
    marginLeft: 2,
  },
});

export default Person;
