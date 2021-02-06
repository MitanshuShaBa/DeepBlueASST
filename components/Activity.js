import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ActivityCard from "./ActivityCard";
import Card from "./Card";
import firebase from "firebase";
import "firebase/firestore";
import { ScrollView } from "react-native-gesture-handler";

const Activity = ({ route, navigation }) => {
  const { purpose_selected } = route.params;
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("visitation_log")
      .get()
      .then((querySnapshot) => {
        let docs = [];
        querySnapshot.forEach(function (doc) {
          docs.push(doc.data());
        });
        setActivities(docs);
      })
      .catch((err) => console.log(err));
  }, []);
  const resetPurpose = () => {
    setTimeout(() => {
      // navigation.setParams({ purpose_selected: null });
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      {activities.map(
        ({ purpose, temperature, is_wearing_mask, user_id }, key) => {
          if (purpose == purpose_selected) {
            resetPurpose();
          }
          return (
            <ActivityCard
              purpose={purpose}
              temperature={temperature}
              is_wearing_mask={is_wearing_mask}
              user_id={user_id}
              key={key}
            />
          );
        }
      )}
      {activities.length === 0 && <Text>Loading...</Text>}
      <Text>{JSON.stringify(purpose_selected)}</Text>
    </ScrollView>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
  },
});
