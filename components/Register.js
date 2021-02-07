import React, { useRef, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { signInWithGoogleAsync, createUserEmailPassword } from "../auth/helper";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const email_ref = useRef();
  const password_ref = useRef();

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Register Screen</Text>
      <TextInput
        placeholder="Name"
        returnKeyType="next"
        autoCompleteType="name"
        textContentType="name"
        style={styles.input}
        value={name}
        onChangeText={(name) => setName(name)}
        onSubmitEditing={() => email_ref.current.focus()}
      />
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        returnKeyType="next"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        style={styles.input}
        ref={email_ref}
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
        onSubmitEditing={() => createUserEmailPassword(name, email, password)}
      />
      <View style={styles.signIn}>
        <Button
          color="tomato"
          title="Register Now"
          onPress={() => createUserEmailPassword(name, email, password)}
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
          color="tomato"
          title="Login"
          onPress={() => {
            navigation.replace("Login");
          }}
        />
      </View>
    </View>
  );
};

export default Register;

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
