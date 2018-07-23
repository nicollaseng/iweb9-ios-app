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
        <View>
            <Text style={textOne}>Somos uma empresa focada em oferecer o melhor a nossos clientes.
                Damos a nossos clientes toda a atenção necessária para a elaboração
                de seus projetos. Desde o desenho à entrega, cuidamos para que nenhum
                detalhe seja perdido. No final nossos clientes recebem seu aplicativo
                ou sistema web devidamente testados e com garantia e manutenção periódica.
            </Text>
        </View>
        <View>
            <Text style={textTwo}>{`Alguns de nosso Clientes: \n`}</Text>
            <Text style={textOne}>- ATM Consultoria;</Text>
            <Text style={textOne}>- Erger e Rodney Advocacia;</Text>
            <Text style={textOne}>- Djas Contabilidade;</Text>
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
  }
});

const {logoStyle, generalView, viewLogoStyle,
        btnBackStyle, viewTextLogo, textLogo,
        textOne, textTwo} = styles
