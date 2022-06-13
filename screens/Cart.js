import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  CartItems,
  FooterTotal,
  FormInput,
  Header,
  IconButton,
  TextButton,
} from '../component';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector} from 'react-redux';
const Cart = ({navigation}) => {
  const cartItems = useSelector(state => state.cart);
  useEffect(() => {
    console.log('Cartitems....', cartItems.cart.length);
  }, [cartItems]);
  function renderHeader() {
    return (
      <Header
        title="Cart"
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
            onPress={() => navigation.goBack()}
          />
        }
      />
    );
  }

  function renderCartItems() {
    return (
      <FlatList
        style={{paddingTop: SIZES.sm}}
        data={cartItems?.cart}
        keyExtractor={item => item.itemId}
        // keyExtractor={(_item, i) => i.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item, i}) => {
          return (
            <CartItems
              inCart={true}
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
    );
  }

  function renderNoCart() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Your cart is empty!</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor: COLORS.red,
            padding: SIZES.sm,
            marginVertical: SIZES.sm,
            borderRadius: SIZES.sm,
          }}>
          <Text style={{color: COLORS.white}}>Continue shopping</Text>
        </TouchableOpacity>
      </View>
    );
  }
  function renderDiscountCoupon() {
    return (
      <View style={{marginTop: SIZES.lg, marginBottom: 10}}>
        <Text
          style={{
            ...FONTS.h3,
            fontWeight: 'bold',
            marginLeft: SIZES.lg,
            color: COLORS.black,
          }}>
          Add Discount Code
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <FormInput
            onChange={text => console.log(text)}
            inputContainerStyle={{
              marginTop: 0,
              width: 200,
              marginHorizontal: SIZES.lg,
              borderWidth: 1,
              borderColor: COLORS.lightGray1,
              backgroundColor: COLORS.primary,
              overflow: 'hidden',
            }}
            placeHolder="Add promo code"
          />
          <TextButton
            label="Add"
            buttonContainerStyle={{
              backgroundColor: COLORS.red,
              marginTop: SIZES.md,
              paddingHorizontal: SIZES.xl,
              paddingVertical: 10,
              borderRadius: 4,
            }}
          />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraScrollHeight={-200}
        contentContainerStyle={{
          flexGrow: 1,
          // paddingHorizontal: SIZES.lg,
          paddingBottom: 20,
        }}>
        {cartItems.cart.length === 0
          ? renderNoCart()
          : [renderCartItems(), renderDiscountCoupon()]}
      </KeyboardAwareScrollView>
      {cartItems.cart.length !== 0 && (
        <FooterTotal
          subTotal={50.0}
          total={50.0}
          onPress={() => navigation.navigate('Checkout')}
        />
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
