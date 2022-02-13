/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
} from 'react-native';
import Header from './component/Header';
import {icons, SIZES} from './constants';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './screens';
import Tabs from './navigation/tabs';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
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
    </Stack.Navigator>
  );
};

export default App;
