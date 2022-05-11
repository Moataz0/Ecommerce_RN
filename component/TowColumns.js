import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const TowColumns = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: SIZES.md,
        paddingVertical: SIZES.md,
      }}>
      <Text style={{...FONTS.h3, color: COLORS.black}}>{title}</Text>
      <Image
        source={icon}
        style={{height: 25, width: 25, tintColor: COLORS.black}}
      />
    </TouchableOpacity>
  );
};

export default TowColumns;
