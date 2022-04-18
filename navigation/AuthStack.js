import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ForgotPassword, SignIn, SignUp} from '../screens';

const AuthStack = createStackNavigator();
export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn">
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
}
