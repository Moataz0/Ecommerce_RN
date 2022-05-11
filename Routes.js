import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import AuthStackNavigator from './navigation/AuthStack';
import MainStackNavigator from './navigation/RootStack';

const RootStack = createStackNavigator();
export const Routes = () => {
  const {user, isLogin} = useSelector(state => state.auth);

  function renderScreens() {
    return isLogin ? (
      <RootStack.Screen name={'MainStack'} component={MainStackNavigator} />
    ) : (
      <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
    );
  }
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {renderScreens()}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
