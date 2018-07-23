import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const logo = require('../img/logo_iweb9.png')

export default class iweb9 extends Component {
    static navigationOptions = {
        header: null
    }
  render() {
    return (
      <View style={generalView}>
        <View style={viewLogoStyle}>
          <Image source={logo} style={logoStyle}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  generalView:{
    backgroundColor: 'white',
    flex: 1
  },
  logoStyle: {
    width: 180,
    height: 180
  },
  viewLogoStyle:{
    alignItems: 'center',
    marginTop: 30
  },
  generalViewButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  },
  itemsStyle: {
    width: 150,
    height: 150
  }
});

const {logoStyle, generalView, viewLogoStyle,
        generalViewButtons, itemsStyle} = styles
