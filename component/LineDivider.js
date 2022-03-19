import {Dimensions, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';

const {width} = Dimensions.get('window');

const LineDivider = ({lineStyle}) => {
  return (
    <View
      style={{
        height: 1,
        width: width,
        backgroundColor: COLORS.gray3,
        ...lineStyle,
      }}
    />
  );
};

export default LineDivider;
