import {Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AuthLayout = ({title, subTitle, titleContainerStyle, children}) => {
  return (
    <View
      style={{flex: 1, paddingTop: SIZES.md, backgroundColor: COLORS.primary}}>
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.lg,
          paddingTop: SIZES.sm,
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={images.logo}
            style={{height: 50, width: 200}}
            resizeMode="contain"
          />
        </View>
        <View style={{marginTop: SIZES.md, ...titleContainerStyle}}>
          <Text style={{textAlign: 'center', ...FONTS.h2}}>{title}</Text>
          <Text
            style={{
              marginTop: SIZES.sm,
              color: COLORS.darkGray,
              textAlign: 'center',
              ...FONTS.body3,
            }}>
            {subTitle}
          </Text>
        </View>
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AuthLayout;
