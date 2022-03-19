import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {CartItems, Header, IconButton, LineDivider} from '../component';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../constants';
import {ScrollView} from 'react-native-gesture-handler';

const Checkout = ({navigation}) => {
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
              transform: [{scaleX: -1}],
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
          <Text style={{...FONTS.h3, color: COLORS.black, ...leftStyle}}>
            {leftTitle}
          </Text>
        </View>

        <Text style={{...FONTS.h3, color: COLORS.black, ...rightStyle}}>
          {rightTitle}
        </Text>
      </TouchableOpacity>
    );
  }
  function renderPaymentMethod() {
    return (
      <View
        style={{
          borderWidth: 1,
          flexGrow: 1,
          borderColor: COLORS.gray3,
          marginHorizontal: SIZES.md,
          justifyContent: 'center',
          marginVertical: SIZES.md,
          padding: SIZES.sm,
          borderRadius: SIZES.sm,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: SIZES.md,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={icons.check_off} style={{width: 20, height: 20}} />
            <Text
              style={{...FONTS.h4, color: COLORS.gray, marginLeft: SIZES.md}}>
              234235235226262
            </Text>
          </View>
          <Image
            source={icons.visa}
            style={{width: 35, height: 35}}
            resizeMode="center"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Address')}
          style={{
            flexDirection: 'row',
            marginHorizontal: SIZES.xxl * 2,
            alignItems: 'center',
            marginTop: SIZES.sm,
          }}>
          <Image source={icons.addCircle} />
          <Text
            style={{
              color: COLORS.red,
              marginLeft: SIZES.sm,
              fontWeight: '600',
            }}>
            Add New Card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: SIZES.md,
            marginTop: SIZES.lg,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={icons.check_off} style={{width: 20, height: 20}} />
            <Text
              style={{...FONTS.h4, color: COLORS.gray, marginLeft: SIZES.md}}>
              Cash
            </Text>
          </View>
          <Image source={icons.finance} style={{width: 25, height: 30}} />
        </TouchableOpacity>
      </View>
    );
  }
  function renderOrderSummary() {
    return (
      <View
        style={{
          marginHorizontal: SIZES.md,
          paddingVertical: SIZES.md,
          borderRadius: SIZES.sm,
          borderColor: COLORS.gray3,
          borderWidth: 1,
          padding: SIZES.md,
          marginTop: SIZES.xl,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{...FONTS.h3, color: COLORS.black}}>Item Total</Text>
          <Text style={{color: COLORS.red, ...FONTS.h3}}>2</Text>
        </View>
        {/* Delivery Fee */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: SIZES.md,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.black,
                paddingRight: SIZES.lg,
              }}>
              Delivery Fee
            </Text>
            <Image source={icons.information} style={{height: 15, width: 15}} />
          </View>

          <Text style={{color: COLORS.red, ...FONTS.h3}}>$15</Text>
        </View>

        {/* Taxes and charges */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: SIZES.md,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.black,
                paddingRight: SIZES.lg,
              }}>
              Taxes and Charges
            </Text>
            <Image source={icons.information} style={{height: 15, width: 15}} />
          </View>

          <Text style={{color: COLORS.red, ...FONTS.h3}}>$100</Text>
        </View>

        <LineDivider lineStyle={{width: 300}} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: SIZES.md,
          }}>
          <Text style={{...FONTS.h3, color: COLORS.black}}>Total</Text>
          <Text style={{color: COLORS.red, ...FONTS.h3}}>$115</Text>
        </View>
      </View>
    );
  }
  function renderCartItem() {
    return (
      <View>
        <View style={{marginHorizontal: SIZES.lg, marginTop: SIZES.md}}>
          <Text style={{...FONTS.h3, color: COLORS.black, fontWeight: 'bold'}}>
            My Cart ({dummyData.cart.length} Item)
          </Text>
        </View>
        <FlatList
          style={{paddingTop: SIZES.sm}}
          data={dummyData.cart}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item, i}) => {
            return (
              <CartItems
                inCart={false}
                imageStyle={{
                  marginBottom: 20,
                  marginHorizontal: SIZES.sm,
                  height: 120,
                  width: 120,
                }}
                containerStyle={{
                  alignItems: 'center',
                  marginHorizontal: SIZES.lg,
                  paddingVertical: SIZES.md,
                  marginBottom: SIZES.lg,
                }}
                onPress={() => navigation.navigate('Cart')}
                item={item}
              />
            );
          }}
        />
      </View>
    );
  }
  return (
    <View>
      {renderHeader()}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          // flexGrow: 1,
          paddingBottom: 200,
          // paddingHorizontal:SIZES.sm
        }}>
        <View style={{marginHorizontal: SIZES.md, marginTop: SIZES.xxl}}>
          <Text style={{...FONTS.h3, color: COLORS.black, fontWeight: 'bold'}}>
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
          leftStyle={{marginLeft: SIZES.md}}
          withImage={true}
          icon={icons.time_circle}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Address')}
          style={{
            flexDirection: 'row',
            marginHorizontal: SIZES.xxl * 2,
            alignItems: 'center',
            marginTop: SIZES.sm,
          }}>
          <Image source={icons.addCircle} />
          <Text
            style={{
              color: COLORS.red,
              marginLeft: SIZES.sm,
              fontWeight: '600',
            }}>
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
          leftStyle={{marginLeft: SIZES.md}}
          withImage={true}
          icon={icons.box}
          iconStyle={{height: 15, width: 15}}
        />
        <View style={{marginHorizontal: SIZES.lg, marginTop: SIZES.md}}>
          <Text style={{...FONTS.h3, color: COLORS.black, fontWeight: 'bold'}}>
            Payment Method
          </Text>
        </View>
        {renderPaymentMethod()}
        {/* Order Summary */}
        <View style={{marginHorizontal: SIZES.lg, marginTop: SIZES.md}}>
          <Text style={{...FONTS.h3, color: COLORS.black, fontWeight: 'bold'}}>
            Order Summary
          </Text>
        </View>

        {renderOrderSummary()}
        {/* Cart items */}

        {renderCartItem()}
      </ScrollView>
    </View>
  );
};

export default Checkout;
