import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Screen2 extends Component {
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#6495ED'}}>
                <Text style={{fontSize:100, color:'white'}}>The Screen 2!</Text>
            </View>
        )
    }
}