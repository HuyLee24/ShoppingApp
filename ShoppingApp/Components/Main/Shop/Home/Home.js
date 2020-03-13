import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeView from './HomeView';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';

const Tab = createBottomTabNavigator();

class Home extends Component {
    render() {
        const { types, topProducts } = this.props;
        return (
            <NavigationContainer> 
              <Tab.Navigator>
                <Tab.Screen 
                  name="HOME_VIEW" 
                  component={HomeView} 
                  options={{ 
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="ios-home" color={color} size={size} />)
                  }}
                  types={types} topProducts={topProducts}
                />
                <Tab.Screen 
                  name="LIST_PRODUCT" 
                  component={ListProduct} 
                  category={route.category}
                />
                <Tab.Screen 
                  name="ProductDetail" 
                  component={ProductDetail} 
                  product={route.product}
                />
                
              </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default Home;
