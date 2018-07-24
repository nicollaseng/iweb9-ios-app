import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js'
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,Text
} from 'react-native';

const contact = require('../img/contato.png')
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
            <Image source={contact} style={logoStyle}/>
            </View>
            <Text style={textLogo}> Contato </Text>
        </View>
        <View>
            <Text style={textOne}>Telefone: (085)99819-3842</Text>
            <Text style={emailSytle}>Email: iweb9@gmail.com</Text>
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
      alignItems: 'center',
      marginBottom: 30
  },
  textLogo: {
      fontSize: 50,
      color: '#FF3333',
      fontWeight: 'bold',
      marginLeft: -50,
      marginTop: 30
  },
  textOne: {
      marginTop: 0,
      marginLeft: 10,
      textAlign: 'justify',
      fontSize: 16,
      color: 'grey'
  },
  textTwo: {
      fontSize: 23,
      fontWeight: 'bold',
      color: 'black',
      marginLeft: 10,
      marginTop: 10
  },
  emailSytle:{
      color: 'blue',
      fontSize: 16,
      marginLeft: 10
  }
});

const {logoStyle, generalView, viewLogoStyle,
        btnBackStyle, viewTextLogo, textLogo,
        textOne, textTwo, emailSytle} = styles
