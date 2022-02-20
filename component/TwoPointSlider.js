import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {COLORS, FONTS, SIZES} from '../constants';

const TwoPointSlider = ({
  values,
  min,
  max,
  prefix,
  postfix,
  onValuesChange,
}) => {
  return (
    <MultiSlider
      values={values}
      sliderLength={SIZES.width - SIZES.lg * 3}
      min={min}
      max={max}
      step={1}
      markerOffsetY={20}
      selectedStyle={{
        backgroundColor: COLORS.red,
      }}
      trackStyle={{
        height: 5,
        borderRadius: 5,
        backgroundColor: COLORS.lightGray1,
      }}
      minMarkerOverlapDistance={50}
      customMarker={e => {
        return (
          <View
            style={{
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{marginBottom: 20, color: COLORS.black, ...FONTS.h3}}>
              {prefix}
              {e.currentValue}
              {postfix}
            </Text>
            <View
              style={{
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 20,
                  width: 20,
                  marginBottom: 80,
                  borderRadius: 15,
                  borderWidth: 3,
                  borderColor: COLORS.red,
                  backgroundColor: COLORS.primary,
                  ...styles.shadow,
                }}
              />
            </View>
          </View>
        );
      }}
      onValuesChange={values => onValuesChange(values)}
    />
  );
};

export default TwoPointSlider;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
  },
});
