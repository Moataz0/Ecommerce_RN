import {Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';

const Header = ({
  containerStyle,
  leftComponent,
  rightComponent,
  title,
  titleStyle,
}) => {
  return (
    <View style={{flexDirection: 'row', height: 60, ...containerStyle}}>
      {leftComponent}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{...FONTS.h2, ...titleStyle, color: COLORS.black}}>
          {title}
        </Text>
      </View>
      {rightComponent}
    </View>
  );
};

export default Header;
