import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, SIZES} from '../constants';
import {LineDivider, TextButton} from '.';
const FooterTotal = ({subTotal, total, onPress, shippingFee}) => {
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[COLORS.transparent, COLORS.lightGray2]}
        style={{
          position: 'absolute',
          top: -15,
          left: 0,
          right: 0,
          height: Platform.OS === 'android' ? 50 : 200,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />

      <View
        style={{
          padding: SIZES.lg,
          //   marginHorizontal: SIZES.lg,
          marginBottom: SIZES.xl,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.white,
        }}>
        <View style={{alignItems: 'center', marginBottom: SIZES.lg}}>
          <Text style={{...FONTS.body5, color: COLORS.gray}}>
            All prices are inclusive of 14% VAT
          </Text>
        </View>
        {/* subtotal */}
        <View
          style={{
            flexDirection: 'row',
            marginBottom: SIZES.md,
          }}>
          <Text style={{flex: 1, ...FONTS.body3}}>Sub Total</Text>
          <Text style={{...FONTS.h3}}>${subTotal.toFixed(2)}</Text>
        </View>
        <LineDivider lineStyle={{height: 2}} />
        {/* Total */}
        <View style={{flexDirection: 'row', marginTop: SIZES.md}}>
          <Text
            style={{
              flex: 1,
              ...FONTS.h3,
              fontWeight: 'bold',
              color: COLORS.black,
            }}>
            Total:
          </Text>
          <Text style={{...FONTS.h3, fontWeight: 'bold', color: COLORS.black}}>
            ${total.toFixed(2)}
          </Text>
        </View>

        {/* Button */}
        <TextButton
          buttonContainerStyle={{
            height: 50,
            marginVertical: SIZES.lg,

            borderRadius: SIZES.sm,
            backgroundColor: COLORS.red,
          }}
          label="Continue to checkout"
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default FooterTotal;

const styles = StyleSheet.create({});
