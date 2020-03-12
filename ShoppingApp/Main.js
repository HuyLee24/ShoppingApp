import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';

import Screen1 from './Components/Sreen1';
import Screen2 from './Components/Screen2';

export default class Main extends Component {
    renderScene(route, navigator) {
        switch(route.name) {
            case "screen1": return (
                <Screen1 />
            )
            case "screen2": return (
                <Screen2 />
            )
        }
    }
render(){
  return (
    <Navigator 
    initialRoute={{name:"screen1"}}
    renderScene={this.renderScene}/>
  );
}
}


