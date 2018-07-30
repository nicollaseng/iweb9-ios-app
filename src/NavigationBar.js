import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

const cliente = require('../img/clientes.png')

export default class iweb9 extends Component {
    static navigationOptions = {
        header: null
    }
  render() {
    return (
        <View>
            <View style={generalView}>
                <Text style={textStyle}> iWeb9 </Text>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  generalView:{
    backgroundColor: '#FF3333',
    alignItems: 'center'
  },
  textStyle: {
    color: 'white',
    fontSize: 35,
    padding: 20
  }
});

const {generalView, textStyle, btnBackStyle} = styles
