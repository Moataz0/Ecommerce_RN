import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Header, IconButton } from '../component';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import { ScrollView } from 'react-native-gesture-handler';

const Checkout = ({ navigation }) => {
  function renderHeader() {
    return (
      <Header
        title="Checkout"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.lg,
          marginTop: SIZES.lg,
        }}
        leftComponent={
          <IconButton
            icon={icons.rightArrow}
            containerStyle={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              transform: [{ scaleX: -1 }],
            }}
            onPress={() => navigation.navigate('Home')}
          />
        }
      />
    );
  }
  function Section({
    leftTitle,
    rightTitle,
    rightStyle,
    leftStyle,
    onPress,
    icon,
    iconStyle,
    withImage = false,
    containerStyle,
  }) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: SIZES.md,
          paddingVertical: SIZES.md,
          ...containerStyle,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {withImage && (
            <Image
              source={icon}
              style={{
                ...iconStyle,
              }}
            />
          )}
          <Text style={{ ...FONTS.h3, color: COLORS.black, ...leftStyle }}>
            {leftTitle}
          </Text>
        </View>

        <Text style={{ ...FONTS.h3, color: COLORS.black, ...rightStyle }}>
          {rightTitle}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <View>
      {renderHeader()}
      <ScrollView>
        <View style={{ marginHorizontal: SIZES.lg, marginTop: SIZES.xxl }}>
          <Text style={{ ...FONTS.h3, color: COLORS.black, fontWeight: 'bold' }}>
            Delivery Information
          </Text>
        </View>
        <Section
          containerStyle={{
            borderRadius: SIZES.sm,
            borderColor: COLORS.gray3,
            borderWidth: 1,
            padding: SIZES.md,
            marginTop: SIZES.xl,
          }}
          leftTitle="City Light, Nasr City"
          rightTitle="Change"
          rightStyle={{
            color: COLORS.red,
          }}
          leftStyle={{ marginLeft: SIZES.md }}
          withImage={true}
          icon={icons.time_circle}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Address")}
          style={{
            flexDirection: 'row',
            marginHorizontal: SIZES.xxl * 2,
            alignItems: 'center',
            marginTop: SIZES.sm,
          }}>
          <Image source={icons.addCircle} />
          <Text style={{ color: COLORS.red, marginLeft: SIZES.sm }}>
            Add New Address
          </Text>
        </TouchableOpacity>
        <Section
          containerStyle={{
            borderRadius: SIZES.sm,
            borderColor: COLORS.gray3,
            borderWidth: 1,
            padding: SIZES.md,
            marginTop: SIZES.xl,
          }}
          leftTitle="Delivered within 1-5 days"
          rightTitle="$10.00"
          rightStyle={{
            color: COLORS.red,
          }}
          leftStyle={{ marginLeft: SIZES.md }}
          withImage={true}
          icon={icons.box}
          iconStyle={{ height: 15, width: 15 }}
        />
        <View style={{ marginHorizontal: SIZES.lg, marginTop: SIZES.md }}>
          <Text style={{ ...FONTS.h3, color: COLORS.black, fontWeight: 'bold' }}>
            Payment Method
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
