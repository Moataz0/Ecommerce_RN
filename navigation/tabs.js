import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {Cart, Favourite, Home, More, Profile} from '../screens';
import {COLORS, icons} from '../constants';
import {useSelector} from 'react-redux';
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
  const qantity = useSelector(state => state.cart.cart);
  // console.log('qanty', qantity.length);
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
            <>
              {qantity.length > 0 && (
                <View>
                  <View
                    style={{
                      position: 'absolute',
                      margin: 15,
                      height: 25,
                      marginLeft: -5,
                      bottom: -20,
                      width: 25,
                      borderRadius: 15,
                      backgroundColor: COLORS.green,
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2000,
                    }}>
                    <Text style={{color: COLORS.white}}>{qantity?.length}</Text>
                  </View>
                </View>
              )}
              <Image
                source={icons.cart}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? COLORS.red : COLORS.gray2,
                }}
              />
            </>
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
