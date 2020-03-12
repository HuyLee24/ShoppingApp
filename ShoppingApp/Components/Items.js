import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Items extends Component {
    constructor(props) {
        super(props);
        this.state={
            amount:0
        }
    }

    clickMe(){
        this.setState({
            amount:this.state.amount + 1
        });
    }

    render() {
        return (
            <TouchableOpacity onPress={()=>{this.clickMe()}}>
                <View style={styles.container}>
                    <Text>This is an item!</Text>
                    <Text>{this.props.title}</Text>
                    <Text>Amount: {this.state.amount}</Text>
                </View>   
            </TouchableOpacity>      
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 100,
        backgroundColor: 'lightgreen',
        margin: 5,
    }
});