import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useStateValue } from "../utils/StateProvider";
import { TextInput } from "react-native-gesture-handler";
import { signInWithEmailPassword, signInWithGoogleAsync } from "../auth/helper";

const Login = ({ navigation }) => {
  const [] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const password_ref = useRef();

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        returnKeyType="next"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        style={styles.input}
        value={email}
        onChangeText={(email) => setEmail(email)}
        onSubmitEditing={() => password_ref.current.focus()}
      />
      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        autoCompleteType="password"
        textContentType="password"
        secureTextEntry
        style={styles.input}
        ref={password_ref}
        value={password}
        onChangeText={(password) => setPassword(password)}
        onSubmitEditing={() => signInWithEmailPassword(email, password)}
      />
      <View style={styles.signIn}>
        <Button
          color="tomato"
          title="Log In"
          onPress={() => signInWithEmailPassword(email, password)}
        />
      </View>
      <View style={styles.googleSignIn}>
        <Button
          color="tomato"
          title="Sign In with Google"
          onPress={() => signInWithGoogleAsync()}
        />
      </View>
      <View style={styles.signIn}>
        <Button
          style={styles.signIn}
          color="tomato"
          title="Register"
          onPress={() => {
            navigation.replace("Register");
          }}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  googleSignIn: {
    width: "80%",
    marginVertical: 10,
  },
  input: {
    width: "80%",
    color: "black",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
  },
  loginWith: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 12,
  },
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signIn: {
    width: "80%",
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
  },
});
