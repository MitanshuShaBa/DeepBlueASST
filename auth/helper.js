import firebase from "firebase";
import * as Google from "expo-google-app-auth";

const defaultUser = {
  dob: "TBD",
  email: "abc@gmail.com",
  address: "Address",
  gender: "M",
  name: "Default Name",
  phone_number: 123456789,
  photo_url: "",
  role: "visitor",
};

const signInWithGoogleAsync = async () => {
  try {
    const result = await Google.logInAsync({
      behavior: "web",
      androidClientId:
        "390678902667-tvs8555kssnhec5l0ijd17u1v1bs43n8.apps.googleusercontent.com",
      iosClientId:
        "390678902667-naf96t34ouqturssumcopq6nr0qbkugo.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    });

    if (result.type === "success") {
      onSignIn(result);
      // console.log(result);
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
};
const onSignIn = (result) => {
  const googleUser = result.user;
  const { accessToken, idToken } = result;
  //   console.log("Google Auth Response", googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      var credential = firebase.auth.GoogleAuthProvider.credential(
        idToken,
        accessToken
      );

      // Sign in with credential from the Google user.
      firebase
        .auth()
        .signInWithCredential(credential)
        .then((user) => {
          console.log("User signed in", user);
          if (user.additionalUserInfo.isNewUser) {
            firebase.firestore().collection("users").add({
              email: user.user.email,
              name: user.user.displayName,
              phone_number: user.user.phoneNumber,
              photo_url: user.user.photoURL,
              role: "resident",
              verified: false,
              dob: null,
              address: null,
              gender: null,
              household: [],
            });
          }
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          alert(errorMessage);
        });
    } else {
      console.log("User already signed-in Firebase.");
    }
  });
};
const isUserEqual = (googleUser, firebaseUser) => {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (
        providerData[i].providerId ===
          firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
        providerData[i].uid === googleUser.id
      ) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
};

const createUserEmailPassword = (name, email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      console.log(errorMessage);
    });
};

const signInWithEmailPassword = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      console.log(errorMessage);
    });
};

export {
  signInWithGoogleAsync,
  createUserEmailPassword,
  signInWithEmailPassword,
};
