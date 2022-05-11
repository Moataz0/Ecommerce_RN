import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

const FormInput = ({
  containerStyle,
  label,
  labelStyle,
  inputContainerStyle,
  inputStyle,
  placeHolder,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  errorMsg = '',
  maxLength,
  value,
}) => {
  return (
    <View style={{...containerStyle}}>
      {/* Label and error message */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: COLORS.gray, ...FONTS.body4, ...labelStyle}}>
          {label}
        </Text>
        <Text style={{color: COLORS.red, ...FONTS.body4}}>{errorMsg}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: SIZES.height > 800 ? 55 : 45,
          paddingHorizontal: SIZES.md,
          marginTop: SIZES.height > 800 ? SIZES.sm : 0,
          borderRadius: SIZES.sm,
          backgroundColor: COLORS.lightGray2,
          ...inputContainerStyle,
        }}>
        {prependComponent}
        <TextInput
          style={{flex: 1, ...inputStyle}}
          value={value}
          placeholder={placeHolder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={text => onChange(text)}
          maxLength={maxLength}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
