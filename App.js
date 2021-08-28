import React, { Component } from 'react';
import BoasVindas from './components/BoasVindas';
import { StyleSheet, View } from 'react-native';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <BoasVindas saudacao='Bom dia!' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4e8c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
