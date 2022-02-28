import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import TextButton from './TextButton';
import {IconButton} from '.';

const CartItems = ({containerStyle, imageStyle, item, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderRadius: SIZES.sm,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.27,
        shadowRadius: 2.65,
        elevation: 3,
        ...containerStyle,
        backgroundColor: COLORS.primary,
        ...containerStyle,
      }}>
      <View style={{flex: 1}}>
        {/* Image */}
        <Image source={item.image} style={imageStyle} resizeMode="contain" />

        <View style={{marginHorizontal: SIZES.xxl, marginVertical: 4}}>
          <IconButton
            icon={icons.heart}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderRadius: SIZES.sm,
              borderColor: COLORS.lightGray1,
            }}
            iconStyle={{
              height: 20,
              width: 20,
              tintColor: COLORS.lightGray1,
            }}
            onPress={() => console.log('Like')}
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.black,
            marginTop: SIZES.md,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            marginVertical: SIZES.sm,
            ...FONTS.h3,
            color: COLORS.red,
          }}>
          ${item.price}
        </Text>
        <Text
          style={{
            ...FONTS.body5,
            color: COLORS.darkGray,
            textAlign: 'left',
            lineHeight: 15,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>
          {item.description.substring(0, 100) + ' ...'}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            top: -10,
            right: SIZES.sm,
          }}>
          <Image
            source={icons.cross}
            style={{width: 20, height: 20, tintColor: COLORS.gray}}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingTop: SIZES.lg,
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: SIZES.lg,
            // marginLeft: -SIZES.xl,
          }}>
          <TextInput
            placeholder="item"
            style={{borderWidth: 1, width: 150, padding: 2}}
          />
        </View>
      </View>
    </View>
  );
};

export default CartItems;
