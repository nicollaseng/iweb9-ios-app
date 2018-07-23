import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js'
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,Text
} from 'react-native';

const service = require('../img/servicos.png')
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
            <Image source={service} style={logoStyle}/>
            </View>
            <Text style={textLogo}> Serviços </Text>
        </View>
        <View>
            <Text style={textTwo}>{`Confira nossos serviços:\n`}</Text>
            <Text style={textOne}>- Desenvolvimento de sistemas para internet;</Text>
            <Text style={textOne}>- Desenvolvimento de aplicativos mobile(Android e iPhone);</Text>
            <Text style={textOne}>- Desenvolvimento de API Restful;</Text>
            <Text style={textOne}>- Integração de sistema a API de terceiros;</Text>
            <Text style={textOne}>- Atualização e manutenção em sistemas web pré-existente</Text>
            <Text style={textOne}>- Atualização e manutenção em aplicativos mobile</Text>
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
      marginBottom: 10
  },
  textLogo: {
      fontSize: 50,
      color: '#FF3333',
      fontWeight: 'bold',
      marginLeft: -50,
      marginTop: 30
  },
  textOne: {
      margin: 8,
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
  }
});

const {logoStyle, generalView, viewLogoStyle,
        btnBackStyle, viewTextLogo, textLogo,
        textOne, textTwo} = styles
