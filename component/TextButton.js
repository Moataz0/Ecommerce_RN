import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';

const TextButton = ({
  label,
  label2 = '',
  label2Style,
  disabled,
  labelStyle,
  buttonContainerStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...buttonContainerStyle,
      }}
      onPress={onPress}
      disabled={disabled}>
      {label2 != '' && (
        <Text
          style={{
            flex: 1,
            textAlign: 'left',
            color: COLORS.primary,
            ...FONTS.h3,
            ...label2Style,
          }}>
          {label2}
        </Text>
      )}
      <Text style={{color: COLORS.primary, ...FONTS.h3, ...labelStyle}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({});
