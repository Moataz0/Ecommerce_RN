import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons} from '../constants';

const Rating = ({
  rating,
  iconStyle,
  activeColor = COLORS.orange,
  inActiveColor = COLORS.lightOrange3,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 1 ? activeColor : inActiveColor,
          ...iconStyle,
          ...styles.rateIcon,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 2 ? activeColor : inActiveColor,
          ...iconStyle,
          ...styles.rateIcon,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 3 ? activeColor : inActiveColor,
          ...iconStyle,
          ...styles.rateIcon,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 4 ? activeColor : inActiveColor,
          ...iconStyle,
          ...styles.rateIcon,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 5 ? activeColor : inActiveColor,
          ...iconStyle,
          ...styles.rateIcon,
        }}
      />
      <Text
        style={{
          ...COLORS.black,
          ...FONTS.body5,
          marginLeft: 4,
          fontWeight: 'bold',
        }}>
        {rating}
      </Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  rateIcon: {
    height: 15,
    width: 15,
  },
});
