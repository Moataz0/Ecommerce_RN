import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {Cart, Favourite, Home, More, Profile} from '../screens';
import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();
const CustomTabBar = props => {
  return (
    <View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 20,
          backgroundColor: COLORS.gray3,
        }}
      />
      <BottomTabBar {...props.props} />
    </View>
  );
};
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#FFF',
          borderTopColor: 'transparent',
          height: Platform.OS == 'android' ? 55 : 80,
        },
      }}
      tabBar={props => <CustomTabBar props={props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? COLORS.red2 : COLORS.gray2,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.profile}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? COLORS.red : COLORS.gray2,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.favourite}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? COLORS.red : COLORS.gray2,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.cart}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? COLORS.red : COLORS.gray2,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.setting}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? COLORS.red : COLORS.gray2,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
