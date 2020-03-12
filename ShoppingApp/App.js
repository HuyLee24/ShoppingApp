import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import ListView from "deprecated-react-native-listview";

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
        }
    }

    render (){
        return (
            <View>
                <Text style={styles.paragraph1}>
                    Shopping App!
                </Text>
            <ListView 
            dataSource={this.state.dataSource}
            renderRow={(r)=>
            <View style={styles.container}>              
                <Text style={styles.paragraph2}>{r}</Text></View>
            }
            />
            </View>
          );
    };

    componentDidMount() {
        //load data
        var mang = ['Item1', 'Item2', 'Item3']
        
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(mang)
        });
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 5,
  },
  paragraph1: {
    top: 10,
    margin: 20,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  paragraph2: {
    top: 10,
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});