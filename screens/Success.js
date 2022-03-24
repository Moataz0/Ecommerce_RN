import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Header, IconButton, TextButton} from '../component';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import LottieView from 'lottie-react-native';

const Success = ({navigation}) => {
  function renderHeader() {
    return (
      <Header
        title="Order Confirmation"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.lg,
          marginTop: SIZES.lg,
        }}
        leftComponent={
          <IconButton
            icon={icons.rightArrow}
            containerStyle={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              transform: [{scaleX: -1}],
            }}
            onPress={() => navigation.navigate('Home')}
          />
        }
      />
    );
  }
  function renderFooter() {
    return (
      <View
        style={{
          // flex: 1,
          paddingHorizontal: SIZES.lg,
          marginVertical: SIZES.sm,
        }}>
        <TextButton
          buttonContainerStyle={{
            height: 50,
            borderRadius: SIZES.sm,
            backgroundColor: COLORS.red,
          }}
          label="Continue Shopping"
          onPress={() => navigation.navigate('Home')}
        />
        <TextButton
          labelStyle={{
            color: COLORS.gray,
          }}
          buttonContainerStyle={{
            height: 50,
            borderRadius: SIZES.sm,
            backgroundColor: COLORS.primary,
          }}
          label="Go to Orders"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <LottieView
        source={require('./Animations/success.json')}
        style={{marginBottom: SIZES.xxl * 3}}
        autoPlay
      />
      {renderHeader()}
      <View
        style={{
          marginVertical: SIZES.xxl * 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{...FONTS.body2, color: COLORS.red, marginTop: SIZES.xxl * 3}}>
          Order Success !
        </Text>
        <View
          style={{
            paddingTop: SIZES.sm,
            alignItems: 'center',
          }}>
          <Text>Thanks for your order,</Text>
          <Text>your order placed and</Text>
          <Text>on it's way to your address.</Text>
        </View>
      </View>
      {renderFooter()}
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({});
