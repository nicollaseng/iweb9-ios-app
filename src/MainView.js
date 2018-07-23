import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const logo = require('../img/logo_iweb9.png')
const cliente = require('../img/clientes.png')
const contato = require('../img/contato.png')
const servicos = require('../img/servicos.png')
const empresa = require('../img/empresa.png')

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
        <View style={generalViewButtons}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('client')}>
              <Image source={cliente} style={itemsStyle}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('company')}>
              <Image source={empresa} style={itemsStyle}/>
            </TouchableOpacity>
          </View>
          <View style={generalViewButtons}>
            <TouchableOpacity>
              <Image source={servicos} style={itemsStyle}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={contato} style={itemsStyle}/>
            </TouchableOpacity>
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
