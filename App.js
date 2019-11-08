import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Screens
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

//React Navigation Setup
import { createStackNavigator } from 'react-navigation-stack';
import {  createAppContainer, createSwitchNavigator } from 'react-navigation';

const MainNavigator = createSwitchNavigator({
  Home: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
});

const App = createAppContainer(MainNavigator);

export default App;

