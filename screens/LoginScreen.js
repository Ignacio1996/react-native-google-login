import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

import * as Google from "expo-google-app-auth";

const IOS_CLIENT_ID =
  "978708541571-md66h7bbmmom8vmusp1qo7adojckfhab.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
  "978708541571-qfe9eks6kkf2a9nf94tlrhe7qsv7no1n.apps.googleusercontent.com";

export default class LoginScreen extends Component {
  signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        console.log("LoginScreen.js.js 22 | ", result.user.givenName);
        this.props.navigation.navigate("Profile", {
          username: result.user.givenName
        }); //after Google login redirect to Profile
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Login with Google" onPress={this.signInWithGoogle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
