import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js'
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,Text
} from 'react-native';

const company = require('../img/empresa.png')
const btnBack = require('../img/btn_voltar.png')
const mission = require('../img/missao.png')
const vision = require('../img/visao.png')
const value = require('../img/valores.png')

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
            <Image source={company} style={logoStyle}/>
            </View>
            <Text style={textLogo}> Empresa </Text>
        </View>
        <View>
            <View style={viewMissionLogo}>
                <Image source={mission} style={missionLogo}/>
                <Text style={textMissionLogo}>Missão</Text>
            </View>
            <Text> Proporcionar a nossos clientes uma experiência única
                    e de qualidade </Text>
        </View>
        <View>
            <View style={viewMissionLogo}>
                <Image source={vision} style={missionLogo}/>
                <Text style={textMissionLogo}>Visão</Text>
            </View>
            <Text> Tornar-se referência no desenvolvimento Web em âmbito 
                Regional e Nacional</Text>
        </View>
        <View>
            <View style={viewMissionLogo}>
                <Image source={value} style={missionLogo}/>
                <Text style={textMissionLogo}>Valores</Text>
            </View>
            <Text> A alma de nosso sucesso está na satisfação de nossos clientes.
                Nosso principal valor é impressionar nossos clientes com serviços
                honestos e de qualidade
            </Text>
        </View>
        <View>
            
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
  missionLogo: {
      width: 70,
      height: 70
  },
  textMissionLogo: {
    fontSize: 30,
    color: '#FF3333',
    fontWeight: 'bold'
  },
  viewMissionLogo: {
      flexDirection: 'row',
      alignItems: 'center'

  }
});

const {logoStyle, generalView, viewLogoStyle,
        btnBackStyle, viewTextLogo, textLogo,
        textOne, textTwo, missionLogo, viewMissionLogo,
        textMissionLogo} = styles
