import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Authentication from './Components/Authentication/Authentication';
import ChangeInfo from './Components/ChangeInfo/ChangeInfo';
import Main from './Components/Main/Main';
import OrderHistory from './Components/OrderHistory/OrderHistory';
import { Ionicons } from 'react-native-vector-icons';

StatusBar.setHidden(true);

const Tab = createBottomTabNavigator();

export default class App extends Component {

    render (){
        return (
            <NavigationContainer> 
              <Tab.Navigator>
                <Tab.Screen 
                  name="Main" 
                  component={Main} 
                  options={{ 
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="ios-home" color={color} size={size} />)
                  }}
                />
                <Tab.Screen 
                  name="Authentication" 
                  component={Authentication} 
                />
                <Tab.Screen 
                  name="ChangeInfo" 
                  component={ChangeInfo} 
                />
                <Tab.Screen 
                  name="OrderHistory" 
                  component={OrderHistory} 
                />
              </Tab.Navigator>
            </NavigationContainer>
          )
    };
}
