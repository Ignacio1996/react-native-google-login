import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class HomeScreen extends Component {
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
