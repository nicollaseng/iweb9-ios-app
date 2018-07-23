import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation'
import MainView from './src/MainView.js'
import ClientView from './src/ClientView.js'
import CompanyView from './src/CompanyView.js'
import ServiceView from './src/ServiceView.js'
import NavigationBar from './src/NavigationBar.js'
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

const AppNavigator = createStackNavigator({
  home: MainView,
  client: ClientView,
  company: CompanyView,
  service: ServiceView,
  navigationBar: NavigationBar
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
