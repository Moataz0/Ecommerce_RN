import { Dimensions, View } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

const { width } = Dimensions.get('window');

const LineDivider = ({ lineStyle }) => {
  return (
    <View
      style={{
        height: 0.5,
        width: width,
        backgroundColor: COLORS.gray2,
        ...lineStyle,
      }}
    />
  );
};

export default LineDivider;
