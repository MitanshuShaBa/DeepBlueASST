import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "./Card";
import Person from "./Person";

const HouseHold = () => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.account}>
          <View style={styles.photo}>
            <Image
              style={{ height: 50, width: 50 }}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
          </View>
          <View style={styles.accountInfo}>
            <Text style={styles.residentName}>Mitanshu Reshamwala</Text>
            <Text style={styles.residentId}>#ub20c4de</Text>
          </View>
        </View>
      </Card>
      <View>
        <Text style={styles.header}>My Family</Text>
        <View style={styles.profiles}>
          <Person />
          <Person />
          <Person />
        </View>
      </View>
      <View>
        <Text style={styles.header}>My Daily Help</Text>
        <View style={styles.profiles}>
          <Person />
          <Person />
          <Person />
          <Person />
        </View>
      </View>
      <View>
        <Text style={styles.header}>My Vehicles</Text>
        <View style={styles.profiles}>
          {/* TODO Change from profile to vehicles */}
          <Person />
          <Person />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  account: {
    display: "flex",
    flexDirection: "row",
  },
  accountInfo: {
    flex: 0.7,
    display: "flex",
    flexDirection: "column",
  },
  container: {
    margin: 10,
    padding: 20,
  },
  header: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    color: "#726b71",
  },
  photo: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  profiles: {
    display: "flex",
    flexDirection: "row",
  },
  residentId: {
    fontWeight: "900",
    color: "tomato",
  },
  residentName: {
    fontSize: 20,
  },
});

export default HouseHold;
