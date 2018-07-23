import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation'
import MainView from './src/MainView.js'
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

const AppNavigator = createStackNavigator({
  home: MainView
})

export default class iweb9 extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('iweb9', () => iweb9);
