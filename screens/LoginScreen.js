import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';

// IOS client ID 978708541571-md66h7bbmmom8vmusp1qo7adojckfhab.apps.googleusercontent.com

const IOS_CLIENT_ID = '978708541571-md66h7bbmmom8vmusp1qo7adojckfhab.apps.googleusercontent.com';
const ANDROID_CLIENT_ID = ''

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Login with Google"
          onPress={()=>this.props.navigation.navigate("Profile")}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
