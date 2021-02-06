import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Card from "./Card";
import Person from "./Person";
import firebase from "firebase";
import "firebase/firestore";

const HouseHold = () => {
  const user_id = "buLq0q1alEATPdJurwqE";
  const [userInfo, setUserInfo] = useState({ name: "Loading..." });
  useEffect(() => {
    let retries = 5;

    while (retries-- > 0) {
      if (getUserInfo(user_id)) {
        // console.log(retries);
        break;
      }
    }
  }, [user_id]);

  const getUserInfo = (user_id) => {
    if (user_id) {
      firebase
        .firestore()
        .collection("users")
        .doc(user_id)
        .get()
        .then((doc) => {
          setUserInfo(doc.data());
          return true;
        })
        .catch((err) => {
          console.log("err", err);
          return false;
        });
    } else {
      setTimeout(() => {}, 1000);
    }
  };
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.account}>
          <View style={styles.photo}>
            <Image
              style={{ height: 50, width: 50, borderRadius: 50 }}
              source={{
                uri: userInfo.photo_url,
              }}
            />
          </View>
          <View style={styles.accountInfo}>
            <Text style={styles.residentName}>{userInfo.name}</Text>
            <Text style={styles.residentId}>#{user_id}</Text>
          </View>
        </View>
      </Card>
      <View>
        <Text style={styles.header}>My Family</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.profiles}
        >
          {userInfo.household?.map(({ name, photo_url }, key) => {
            return (
              <Person
                name={name.split(" ", 1)}
                photo_url={photo_url}
                key={key}
              />
            );
          })}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.header}>My Daily Help</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.profiles}
        >
          <Person />
          <Person />
          <Person />
          <Person />
        </ScrollView>
      </View>
      <View>
        <Text style={styles.header}>My Vehicles</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.profiles}
        >
          {/* TODO Change from profile to vehicles */}
          <Person />
          <Person />
        </ScrollView>
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
