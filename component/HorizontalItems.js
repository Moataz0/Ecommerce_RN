import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

const HorizontalItems = ({containerStyle, imageStyle, item, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        borderRadius: SIZES.sm,
        ...containerStyle,
      }}>
      <Image source={item.image} style={imageStyle} />
      <View style={{flex: 1}}>
        <Text style={{...FONTS.body5, fontSize: 8, fontWeight: 'bold'}}>
          {item.title}
        </Text>
        <Text style={{color: COLORS.darkGray, fontSize: 7}}>
          {item.description}
        </Text>
        <Text style={{...FONTS.body5, color: COLORS.red}}>
          ${item.price.toFixed(2)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalItems;
