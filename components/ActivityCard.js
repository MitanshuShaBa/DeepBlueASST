import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

const ActivityCard = () => {
  return (
    <Card style={styles.activityCard}>
      <View style={styles.upper}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://www.freepnglogos.com/uploads/wrench/wrench-logo-png-gear-hard-repair-fix--0.png",
            }}
          />
        </View>
        <View style={styles.title}>
          <Text style={styles.name}>Visiting Help</Text>
          <View style={styles.statusContainer}>
            <View style={styles.status}>
              <Text>INSIDE</Text>
            </View>
            <View style={styles.statusTime}>
              <Text>9:45 am</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.description}>
        <View style={styles.descriptionLine}>
          <Image
            style={styles.activityImg}
            source={{
              uri:
                "https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
            }}
          />
          <Text>Dilshad</Text>
        </View>
        <View style={styles.descriptionLine}>
          <Image
            style={styles.activityImg}
            source={{
              uri:
                "https://image.freepik.com/free-icon/thermometer-symbol_318-8418.jpg",
            }}
          />
          <Text>Temp - 97.1 Mask - On</Text>
        </View>
        <View style={styles.descriptionLine}>
          <Image
            style={styles.activityImg}
            source={{
              uri: "https://static.thenounproject.com/png/219377-200.png",
            }}
          />
          <Text>Allowed by you</Text>
        </View>
      </View>
      <View style={styles.actionSection}>
        <View style={styles.call}>
          <Ionicons name="ios-call" size={24} color="#29B966" />
        </View>
        <View style={styles.access}>
          <MaterialCommunityIcons name="cancel" size={24} color="grey" />
          <Text>Wrong Entry</Text>
        </View>
        <View style={styles.access}>
          <FontAwesome name="ticket" size={24} color="black" />
          <Text>Gate Pass</Text>
        </View>
      </View>
    </Card>
  );
};

export default ActivityCard;

const styles = StyleSheet.create({
  access: {
    borderLeftWidth: 1,
    borderLeftColor: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 5,
  },
  actionSection: {
    borderTopColor: "grey",
    borderTopWidth: 1,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  activityCard: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
  },
  activityImg: {
    borderRadius: 50,
    height: 20,
    width: 20,
    marginRight: 10,
  },
  call: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 5,
  },
  description: {},
  descriptionLine: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  imgContainer: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  status: {
    backgroundColor: "lightgreen",
    fontSize: 5,
    borderRadius: 50,
    paddingRight: 5,
    paddingLeft: 5,
    marginRight: 5,
  },
  statusContainer: {
    display: "flex",
    flexDirection: "row",
  },
  statusTime: {
    fontSize: 5,
    color: "grey",
  },
  title: {
    display: "flex",
  },
  upper: {
    display: "flex",
    flexDirection: "row",
  },
});
