/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { icons, SIZES } from './constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Address, Checkout, Home, Payment, ProductDetail } from './screens';
import Tabs from './navigation/tabs';
import LivingRoom from './screens/LivingRoom';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
const getTabBarVisibility = route => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';

  if (routeName === 'ProductDetail') {
    return false;
  }

  return true;
};
const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="LivingRoom" component={LivingRoom} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Address" component={Address} />
    </Stack.Navigator>
  );
};

export default App;
