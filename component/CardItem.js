import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {Rating} from '.';

const {height, width} = Dimensions.get('window');
const CardItem = ({
  containerStyle,
  item,
  onPress,
  sale,
  withSale = false,
  localImage = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: SIZES.sm,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.sm,
        backgroundColor: COLORS.primary,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        ...containerStyle,
      }}>
      {/* Header icon  */}
      <View
        style={{
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          top: withSale ? 10 : 20,
          marginHorizontal: withSale ? SIZES.sm : SIZES.lg,
          zIndex: 1,
        }}>
        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
          <Image
            source={icons.love}
            style={{
              height: 20,
              width: 20,
              tintColor: item.isFavourite ? COLORS.red : COLORS.red,
            }}
          />
        </View>
        {withSale && (
          <View
            style={{
              width: 30,
              borderRadius: 50,
              height: 30,
              backgroundColor: COLORS.red,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: COLORS.white, ...FONTS.body5}}>{sale}</Text>
          </View>
        )}
      </View>

      <View
        style={{
          height: 150,
          width: withSale ? 200 : 180,
          marginTop: withSale ? 0 : 10,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={localImage ? item.image : {uri: item.image}}
          resizeMode="contain"
          style={{
            height: '100%',
            width: '100%',
            borderRadius: withSale ? 10 : 0,
          }}
        />
      </View>
      <View style={{marginTop: 20, marginLeft: 10}}>
        <Text
          style={{
            ...FONTS.h4,
            fontWeight: 'bold',
            marginBottom: withSale ? -10 : 10,
          }}>
          {item.title.substring(0, 50) + '...'}
        </Text>
        {!withSale && (
          <Text
            style={{
              ...FONTS.h5,
              color: COLORS.darkGray,
              textAlign: 'left',
              lineHeight: 15,
            }}>
            {item.description.substring(0, 100) + ' ...'}
          </Text>
        )}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              marginVertical: SIZES.sm,
              ...FONTS.h3,
              color: COLORS.red,
            }}>
            ${item.price}
          </Text>
          {withSale && (
            <Text
              style={{
                color: COLORS.lightGray1,
                marginHorizontal: SIZES.sm,
                textDecorationLine: 'line-through',
              }}>
              ${parseFloat(item.originalPrice).toFixed(2)}
            </Text>
          )}
        </View>

        <Rating rating={item.rating.rate} iconStyle={{marginLeft: 3}} />
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;

const styles = StyleSheet.create({});
