import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './tabs';
import {
  AddCard,
  Address,
  Checkout,
  Home,
  ItemDetails,
  LivingRoom,
  ProductDetail,
  Settings,
  Success,
} from '../screens';

const MainStack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <MainStack.Screen name="Tabs" component={Tabs} />
      {/* <MainStack.Screen name="Home" component={Tabs} /> */}
      <MainStack.Screen name="LivingRoom" component={LivingRoom} />
      <MainStack.Screen name="ProductDetail" component={ProductDetail} />
      <MainStack.Screen name="AddCard" component={AddCard} />
      <MainStack.Screen name="Checkout" component={Checkout} />
      <MainStack.Screen name="Address" component={Address} />
      <MainStack.Screen name="Success" component={Success} />
      <MainStack.Screen name="ItemDetails" component={ItemDetails} />
      <MainStack.Screen name="Settings" component={Settings} />
    </MainStack.Navigator>
  );
}
