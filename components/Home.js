import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import { FontAwesome5 } from "@expo/vector-icons";
import ActivityCard from "./ActivityCard";
import firebase from "firebase";
import "firebase/firestore";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import { useStateValue } from "../utils/StateProvider";

const Home = ({ navigation }) => {
  const [activities] = useState([]);
  const [{ user }] = useStateValue();
  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection("visitation_log")
  //     .limit(2)
  //     .get()
  //     .then((querySnapshot) => {
  //       let docs = [];
  //       querySnapshot.forEach(function (doc) {
  //         docs.push(doc.data());
  //       });
  //       setActivities(docs);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const logout = () => {
    if (user) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Logged Out");
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Card>
          <View style={styles.quickActions}>
            <View style={styles.actionDesc}>
              <Image
                style={styles.img}
                source={{
                  uri:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAACNjY2Kior7+/t2dnbo6Oj09PTR0dGYmJj4+PjBwcG0tLSkpKS4uLhcXFyurq7h4eFTU1NISEgzMzNra2va2tp9fX0mJiaoqKgRERGDg4Nzc3NoaGjt7e3l5eU/Pz+cnJzJyck5OTkbGxstLS0iIiJPT09gYGAVFRULCwuqtBK9AAAJyElEQVR4nN2de1siPQzFYUUYBBRFUbxxcXUXv/8HfJ+R3ZfLdCbnJGk77u9fH2d6mF6SNE07naQsZt3ZIu0rk7Lu7ljnbkgcLobdPcOL3M1xZ/Cje8yPQe4mufL61K3y9Jq7WW683gf0ldz/Gxr75zX6Ss77uZtn5vquQV/J3XXuJpq4fhH0lbx8X43zG0BfydU8d1NVFKi+kpsid3Npihmhr2T2vTRuVqS+ktUmd7NhRm8KfSVvo9xNh7h8V+oreb/M3XyR8YNBX8nDOLeERqaPRn0l22luGbUsPPSVPLbSSe5NnOTtmPRyCzqht3bVV7Juk8Yj992P1gQCBmdR9JWctSEQEHTf/cgeCHhtcm99OM+psf8cXV/Jc65AAOTe+pDFSZ6n05dFI+y++5E0EEC5734kCwRsWPfdj1kKJ1nlvvsRPRAwus2qr+Q2ZiDg0ure+hAtEDD+yC3tfz5iBAKmn7llHfHpHQiYtEtfyePET14E99YHJye5F8e99WFo11jZnW4bxt3yiO67H4ZAQGT33Q9lIKBxd7ptKHbLl2ncdz+el5zAuuyJNnPPCPwOE0yVH7jAi9xtVYIvjte5m6oEj+VscjdVCR7luMzdVCW4bzzO3VQluGc8zd1UJbhf7LvZmQ7cK26zv9QEvjnedo+pDtzrj2HS/Jw9DyeXm6IoNpeT4fPsZ4R34Bny3l7T3aKo+nCDYiHlnrIMsyicTZosjeuJZwg9g8KPtey39dduHfYMVug0Dn+jVlRx5fPCxAqpvemly34rrtBhtXhhwwrL3/aX4g6iecV/0+zXFpa0zS/wmcaqUBtvt74XXw9tdulKnwDTt21P4labybcgoiUBTAsVbnlbFFp3aC3eN65Q7wFv7elLhiAR7gGrf8eZR77kQD0Y8f6jjUT9ctBXorVV8TyNQveCGyeBaon4KrzMLFArEZ8E+prHvzkK7PRU/ga+EL8qnr71TcrWNKGLb5Vq9i3IzS2RuaINxOO39MP9U7EWdBt+Ek+ns7ue3AV2OrTLeEs8nM2vfIggsNNjFTKTORsEi5O+yxoe58SzyTAGHj3gIHMJmGZwrug2kkB2Tmccb865iJfSys2nTDuoETCLJpCc1JlEd2q59cign0+Hi9BzKD+OMTqYAeBgcI/+ZK8GBhLjK1LvJJ5rT57fp5dVOzzzEamX4ifqGUNCEhjyoXGB3HyAbySYc8qPEwQrwSR84XqhXosH9axJuqcZkKd/x90oLowJL0RUuhwgsGoAwt2Jy94foY81LhXVHNZKr4fnGm7Kg4OW3gIDkXm0KVyodgA+1dZJQ1nIVdMLPQpIvhwsAGEySYNp1tVoEjgnsD4q+MNZjgIEBQYWNXDE3JGvxzxEy3IfTpQP+dLYiSR2zwvznwzhmbDA4C4utl6wAwYL7OsPkIUFhr10zKxhIymYd6GOz4QF1nQ0bHGmjSsorK412ZgvCHqr/JQAdX5XgbVTBRRWZKdSrPPX+yvFIuyzNwhsiJQhCvn8D6Tz1/krfyfisGdFC4Qcfd5ARvYQa0Kw++ym0E9AdtESZMQoUlyAp4abdRjHvQIFNgdzkR0MXiBitwUVHnfvU4mKLwjFvvmJBkrfCzbsZNAcS9R8QSjioEk0A6aakMJK1OFQouoLQj+2xhMHAiSh375q7u0lhnubvKECfEPVHrscUQ8Z3oFP/1diWCDgE8jnPXVpEvIm4nPgv0Im+06ibgyWyDONzsmRfevfgf8KmlhXJoEdOX1YV+1ENniDVluwOVfaSeYLOX9ImTAoPje4zIaNobCrAu7a6hoCIHeO4L/h2alg4EH2LTTrfYk8EMMeMJpEje67y8NFG2uQg1w1AxyTCIeO5JiRulydGDStayQi0fH4x6NWoLwO1brAskQi+CdOpaF1GUPuHrWBGkkikfsiB8X0tb9k07Te4G2WyCT3yIFNQ4VTMXzQ0NeaJFLxaTH8bom8i2P8veGf6yVyWWJimTjLGRa5gzSZS3USuRbJASPTLq349EbfOiyRzPOTw5oWgbIH1TwGQhLZPiW6qVqTbYe8id68dVGVyGZqygPFljgor0XCL3gqkZ4VZPPfmO8ixxSFbeBjiXSurbwkV0OyHLJZI32VQ4l8MrEchLImZQFJGVKYaz+W+WsrgNebS+/L3VQcWn9ulmMrqpXIn9Ce/Als6ANmYb9QnakBDmDZK+4C/cS2IDUBnNF3OG4FbPzEqiQOpJt7/LrA/kWUIzMdKDHLpby3/JpIR0qQ4psuL0KqRMbop8iRCJ8TZUiyx6f/pTdQeqTTnRBIooDXMe49SDK918lcKPzpPRShCrhed3thGWC+RdLX0DvdLr3CjiN6HvDCUiOZA4fNgMeg/CSC2euOBzvB00deEkGBK6fXlaDnEX0unkC351yvuQDfqa6fdAhch8vhXYq32gc/fEgdr3uFgJ8+Wtl87lf81KjzvXrEsWrLfEMcQLaeuDqFqW2kfvcFUwfA/bo55pquT91npE6Qh3J5bHB1h274sMycq7oToYwDWSuDvLSQvWrQs6DRX+jiUXf4z8yX94xSiYOv3fQLsjp6U/7JMT6hsgLYuRDf6I1UxYQj3YWovBXwZVwXa5hPlcVn43xCdRm3ryY9TTfLvREyWG4W97/0j4t2naW53O/24XZ1+2C+oJw7ec/Qlps9It6e611iXIe3RXqIqhifO1Ev627DnQJ4tWAVueVZUi0x8l/QEvOi1S/yXpYbb7Hfo6nY6EmCe9bzXslmq6WNkfXKstjTzA64dk0EUtzL3XEwT9XEy/o4Bi1e44/bbppErkUx+lK4J08/9Q8g1pOnn/pnQzSQYz5N2EdL0l8167elDWIORZCkWesPSW2fRgs+1ZP2kkSPzWUahwuaYOJF15ro8bXptTD15D1JF1x0StDjSXWrrmtaCUea+7tjlXyHYPa+tcSPzDQSf7aJVtMeRHVbCoXhkK8Phi03iAy2zClx3eGM0+iemDdAR96jQPG+PnhPjOtrVMTaVtRXg3AnTtwmZVxGJMbKbz3+6owhsaKGzKZMFWWyTS3+h3DM+H7F1n3BEs/pplWTzB6/sEaeoAWAVxA1eWgUx8e6yerxSnjYqFkChzh2T6MV3kQTVn+xBf6gBHHqpcptdo8eQm+ktswUrUeb3+d7VisqulBx4i1QG9dikbUK7943CseGveu2Rf48Crcytn4VDLHEb2dcJcg4jAKaxthqQ7QZ7MbWWAV8kgCcCj1PlqwWCeEzbr/1B9zRaxqN33gEHjKvKzWzyrY/704498a33ktmBtUQzn3SVMMEzI9DxorD3u1ntHeN3xNlpCdnvLsD4uNbGqEg41l3Zr4FmuM/MHyVzK6bIGoAAAAASUVORK5CYII=",
                }}
              />
              <Text style={styles.actionText}>Security Alert</Text>
            </View>
            <View style={styles.actionDesc}>
              <Image
                style={styles.img}
                source={{
                  uri:
                    "https://image.shutterstock.com/image-vector/shipping-fast-delivery-man-riding-260nw-1202545720.jpg",
                }}
              />
              <Text style={styles.actionText}>Pre-Approve Delivery</Text>
            </View>
            <View style={styles.actionDesc}>
              <Image
                style={styles.img}
                source={{
                  uri:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzzi65xDS734zskQnKU_U_g61BIW2ZqHoGQ&usqp=CAU",
                }}
              />
              <Text style={styles.actionText}>Local Services</Text>
            </View>
          </View>
        </Card>
        <Text style={styles.sectionHeader}>Recent Activity</Text>
        <Button title="Sign Out" onPress={() => logout()} />
        {activities.map(({ purpose, user_id }, key) => {
          return (
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() =>
                navigation.navigate("ActivityPage", {
                  // params: { screen: "Activity", purpose_selected: purpose },
                  purpose_selected: purpose,
                })
              }
              key={key}
            >
              <ActivityCard
                purpose={purpose}
                user_id={user_id}
                key={key}
                compact={true}
              />
            </TouchableHighlight>
          );
        })}
        {activities.length === 0 && <Text>Loading...</Text>}
        {/* <ActivityCard
        purpose={"Test purpose"}
        user_id={"ObBo7sLBjjfempkVtTPl"}
        compact={true}
      /> */}
        <Card style={styles.noticeboard}>
          <Text style={styles.noticeboardTitle}>NOTICE BOARD</Text>
          <View style={styles.noticeboardContent}>
            <FontAwesome5 name="newspaper" size={30} color="black" />
            <Text style={styles.noticeboardText}>
              Access all the important announcements, notices and circulars here
            </Text>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  actionDesc: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  actionText: {
    textAlign: "center",
  },
  container: {
    margin: 10,
    padding: 20,
  },
  img: {
    width: 50,
    height: 50,
  },
  noticeboard: {
    backgroundColor: "#fffbd5",
  },
  noticeboardContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  noticeboardText: {
    fontWeight: "bold",
    marginLeft: 10,
    textAlignVertical: "center",
    paddingRight: 10,
  },
  noticeboardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sectionHeader: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    color: "#726b71",
  },
  quickActions: {
    display: "flex",
    flexDirection: "row",
  },
});
