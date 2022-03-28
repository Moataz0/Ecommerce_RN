import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, dummyData, FONTS, icons, SIZES } from '../constants';
import { SliderBox } from 'react-native-image-slider-box';
import {
  FormInput,
  Header,
  HorizontalItems,
  IconButton,
  Rating,
  TextButton,
} from '../component';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');

const ProductDetail = ({ route, navigation }) => {
  const [relatedItems, setRelatedItems] = useState(dummyData.relatedItems);
  const { itemId, itemName, itemImage, itemPrice, itemRating, itemDesc } =
    route.params;
  const images = [
    require('../assets/images/1.jpg'),
    require('../assets/images/2.jpg'),
    require('../assets/images/3.jpg'),
    require('../assets/images/4.jpg'),
    require('../assets/images/5.jpg'),
  ];

  const imageItems = [
    {
      id: 1,
      image: require('../assets/images/Group1.png'),
    },
    {
      id: 2,
      image: require('../assets/images/Group2.png'),
    },
    {
      id: 3,
      image: require('../assets/images/Group3.png'),
    },
    {
      id: 4,
      image: require('../assets/images/Group4.png'),
    },
  ];

  function renderHeader() {
    return (
      <Header
        title={itemName}
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
            onPress={() => navigation.goBack()}
          />
        }
      />
    );
  }
  function renderImageItems() {
    return (
      <FlatList
        data={imageItems}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: SIZES.md,
              backgroundColor: COLORS.primary,
              marginLeft: index == 0 ? SIZES.lg : SIZES.md,
              marginRight: index == imageItems.length - 1 ? SIZES.lg : 0,
            }}>
            <Image source={item.image} style={{ height: 70, width: 70 }} />
          </TouchableOpacity>
        )}
      />
    );
  }
  function renderRelatedItems() {
    return (
      <FlatList
        data={relatedItems}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <HorizontalItems
            containerStyle={{
              height: 60,
              width: SIZES.width * 0.66,
              marginLeft: index == 0 ? SIZES.lg : SIZES.md,
              marginRight: index == relatedItems.length - 1 ? SIZES.lg : 0,
              paddingRight: SIZES.sm,
              alignItems: 'center',
              marginTop: SIZES.md,
              backgroundColor: COLORS.primary,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            }}
            imageStyle={{
              marginHorizontal: 10,
              borderRadius: SIZES.sm,
              height: 50,
              width: 60,
            }}
            item={item}
            onPress={() => console.log('related items')}
          />
        )}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />
    );
  }

  function renderFooter() {
    return (
      <View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[COLORS.transparent, COLORS.lightGray2]}
          style={{
            position: 'absolute',
            top: -15,
            left: 0,
            right: 0,
            height: Platform.OS === 'android' ? 120 : 200,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 20,
            justifyContent: "space-around"
          }}>
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
              // marginLeft: SIZES.lg,
            }}
            iconStyle={{
              height: 20,
              width: 20,
              tintColor: COLORS.lightGray1,
            }}

            onPress={() => console.log('Like')}
          />
          <TextButton
            buttonContainerStyle={{
              flexDirection: 'row',
              paddingHorizontal: SIZES.sm,
              borderRadius: SIZES.sm,
              backgroundColor: COLORS.red,
              width: width / 3,
              height: 40,
              // marginHorizontal: SIZES.md,
            }}
            label="Add To Cart"
            labelStyle={{
              fontSize: 14,
              marginHorizontal: SIZES.md,
            }}
            label2={
              <Image
                source={icons.bag}
                style={{
                  height: 15,
                  width: 15,
                  tintColor: COLORS.primary,
                }}
              />
            }
            onPress={() => console.log('add to cart')}
          />
          <TextButton
            buttonContainerStyle={{
              paddingHorizontal: SIZES.sm,
              flexDirection: 'row',
              borderRadius: SIZES.sm,
              backgroundColor: COLORS.transparent,
              borderColor: COLORS.red,
              borderWidth: 1,
              width: width / 3,
              height: 40,
              // marginRight: SIZES.lg,
            }}
            labelStyle={{
              color: COLORS.red,
              marginHorizontal: SIZES.md,

            }}
            label="Buy Now"
            label2={
              <Image source={icons.ecommerce} style={{ height: 15, width: 15 }} />
            }
            onPress={() => console.log('add to cart')}
          />
        </View>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        <SliderBox
          images={images}
          sliderBoxHeight={250}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotColor={COLORS.red}
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          // autoplay
          // circleLoop
          // resizeMethod={'resize'}
          resizeMode={'contain'}
          paginationBoxStyle={{
            position: 'absolute',
            bottom: -30,
            padding: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: COLORS.red,
          }}
          imageLoadingColor="#2196F3"
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.xl,
            paddingHorizontal: SIZES.lg,
            justifyContent: 'space-between',
          }}>
          <Text style={{ ...FONTS.h3, color: COLORS.black }}>{itemName}</Text>
          <View>
            <Text
              style={{
                ...FONTS.body5,
                color: COLORS.black,
                fontSize: 8,
                marginBottom: -8,
              }}>
              Customers Rating
            </Text>
            <Rating rating={itemRating} iconStyle={{ height: 10, width: 10 }} />
          </View>
        </View>
        <Text
          style={{
            paddingHorizontal: SIZES.lg,
            ...FONTS.body5,
          }}>
          {itemDesc}
          {itemDesc}
          {itemDesc}
        </Text>
        {renderImageItems()}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <FormInput
            onChange={text => console.log(text)}
            inputContainerStyle={{
              marginTop: 0,
              width: 200,
              height: 40,
              marginHorizontal: SIZES.lg,
              marginVertical: SIZES.xl,
              borderWidth: 1,
              borderColor: COLORS.lightGray1,
              backgroundColor: COLORS.primary,
              overflow: 'hidden',
            }}
            placeHolder="1"
          />
          <Text
            style={{
              color: COLORS.red,
              ...FONTS.h2,
              marginRight: SIZES.lg,
              marginBottom: 12,
            }}>
            ${itemPrice.toFixed(2)}
          </Text>
        </View>
        {/* Related Items */}
        <View style={{ flex: 1 }}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.black,
              paddingLeft: SIZES.lg,
              fontWeight: 'bold',
            }}>
            Related Items
          </Text>
        </View>
        {renderRelatedItems()}
      </ScrollView>
      {/* RenderFooter */}
      {renderFooter()}
    </View>
  );
};

export default ProductDetail;
