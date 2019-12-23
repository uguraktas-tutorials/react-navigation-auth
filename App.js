import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/app/HomeScreen'
import LoginScreen from './src/screens/auth/LoginScreen'

import AuthLoadingScreen from './src/screens/AuthLoadingScreen'

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);


export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <AppContainer />
      </View>
    )
  }
}
