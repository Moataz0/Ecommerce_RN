import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs';
import {
  AddCard,
  Address,
  Checkout,
  ItemDetails,
  LivingRoom,
  ProductDetail,
  Settings,
  SignIn,
  SignUp,
  Success,
} from '../screens';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName={'Home'}
      initialRouteName={'SignIn'}>

      {AuthStack(Stack)}

      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="LivingRoom" component={LivingRoom} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
      <Stack.Screen name="Settings" component={Settings} />


    </Stack.Navigator>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
