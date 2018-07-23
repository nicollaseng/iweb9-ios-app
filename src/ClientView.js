import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js'
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,Text
} from 'react-native';

const cliente = require('../img/clientes.png')
const btnBack = require('../img/btn_voltar.png')

export default class iweb9 extends Component {
    static navigationOptions = {
        header: null
    }
  render() {
    return (
      <View style={generalView}>
        <NavigationBar />
       <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={btnBack} style={btnBackStyle}/>
        </TouchableOpacity>
        <View style={viewTextLogo}>
            <View style={viewLogoStyle}>
            <Image source={cliente} style={logoStyle}/>
            </View>
            <Text style={textLogo}> Clientes </Text>
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
    width: 120,
    height: 120
  },
  viewLogoStyle:{
    marginTop: 50,
    marginLeft: -25,
  },
  btnBackStyle: {
    marginTop: -50,
    marginLeft: 10
  },
  viewTextLogo: {
      justifyContent: 'space-around',
      flexDirection: 'row',
      alignItems: 'center'
  },
  textLogo: {
      fontSize: 40,
      color: '#FF3333',
      fontWeight: 'bold',
      marginLeft: -50,
      marginTop: 30
  }
});

const {logoStyle, generalView, viewLogoStyle,
        btnBackStyle, viewTextLogo, textLogo} = styles
