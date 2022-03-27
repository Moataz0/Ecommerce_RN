import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Header, IconButton, TextButton, TowColumns } from '../component';
import { COLORS, FONTS, icons, images, SIZES } from '../constants';

const ItemDetails = ({ route, navigation }) => {
  const { itemId, itemName, itemImage, itemPrice, itemRating, itemDesc } =
    route.params;

  function renderFooter() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingTop: SIZES.xxl,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          paddingRight: SIZES.lg,
          marginHorizontal: SIZES.md,
          marginBottom: SIZES.md,
        }}>
        <TextButton
          buttonContainerStyle={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.xl,
            justifyContent: 'center',

            borderRadius: SIZES.lg,
            backgroundColor: COLORS.red,
            height: 60,
          }}
          labelStyle={{
            ...FONTS.h2,
          }}
          label="Add To Cart"
          label2Style={{
            marginHorizontal: SIZES.lg,
            marginBottom: SIZES.sm
          }}
          label2={
            <Image
              source={icons.cart}
              style={{ height: 25, width: 25, tintColor: COLORS.primary }}
            />
          }
          onPress={() => console.log('first')}
        />
        <IconButton
          icon={icons.ecommerce}
          containerStyle={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            backgroundColor: COLORS.red,
          }}
          iconStyle={{
            height: 25,
            width: 25,
            tintColor: COLORS.primary,
          }}
          onPress={() => console.log('first')}
        />
      </View>
    );
  }
  return (
    <ScrollView style={styles.flex1} showsVerticalScrollIndicator={false}>
      <View style={styles.wrapperImg}>
        <Image source={{ uri: itemImage }} style={styles.image} />
        <IconButton
          icon={icons.rightArrow}
          iconStyle={{
            width: 25,
            height: 25,
          }}
          containerStyle={{
            position: 'absolute',
            left: 10,
            top: 30,
            backgroundColor: COLORS.primary,
            borderWidth: 1,
            borderColor: COLORS.primary,
            paddingHorizontal: 4,
            paddingVertical: 4,
            borderRadius: 50,
            transform: [{ scaleX: -1 }],
          }}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      {/* Title and icon */}
      <View style={styles.content}>
        <Text style={{ ...FONTS.h3, color: COLORS.black, flex: 1 }}>
          {itemName}
        </Text>
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
          onPress={() => console.log('first')}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          color: COLORS.red,
          marginLeft: SIZES.md,
          marginTop: SIZES.sm,
        }}>
        ${itemPrice}
      </Text>
      <View style={{ marginHorizontal: SIZES.md }}>
        <Text style={{ fontSize: 12, marginTop: SIZES.sm }}>{itemDesc}</Text>
      </View>
      <View style={{ paddingVertical: SIZES.lg }}>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.black,
            marginHorizontal: SIZES.md,
          }}>
          Size
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: SIZES.md,
            marginTop: SIZES.sm,
          }}>
          <TouchableOpacity>
            <Text style={styles.sizes}>Large</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sizes}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sizes}>Small</Text>
          </TouchableOpacity>
        </View>
      </View>
      {renderFooter()}
    </ScrollView>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  wrapperImg: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
  },
  content: {
    paddingTop: SIZES.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: SIZES.md,
  },
  name: {
    ...FONTS.h3,
  },
  sizes: {
    // ...FONTS.h3,
    borderWidth: 1,
    marginTop: SIZES.sm,
    paddingHorizontal: 28,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.sm,
    borderRadius: 4,
    borderColor: COLORS.gray3,
  },
});
