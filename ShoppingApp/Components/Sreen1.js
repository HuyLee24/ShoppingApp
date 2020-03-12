import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Screen1 extends Component {
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#F5F5DC'}}>
                <Text style={{fontSize:100, color:'white'}}>Main Screen 1!</Text>
            </View>
        )
    }
}