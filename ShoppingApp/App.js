import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
    render (){
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Shopping App!
                </Text>
            </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 5,
  },
  paragraph: {
    top: 10,
    margin: 20,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});