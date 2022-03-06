import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../constants';
import {SliderBox} from 'react-native-image-slider-box';
import {Header, HorizontalItems, IconButton, Rating} from '../component';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const ProductDetail = ({route, navigation}) => {
  const {itemId, itemName, itemImage, itemPrice, itemRating, itemDesc} =
    route.params;
  const images = [
    require('../assets/images/1.jpg'),
    require('../assets/images/2.jpg'),
    require('../assets/images/3.jpg'),
    require('../assets/images/4.jpg'),
    require('../assets/images/5.jpg'),
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
              transform: [{scaleX: -1}],
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
        data={dummyData.bestSelling}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: SIZES.md,
              backgroundColor: COLORS.primary,
              height: 70,
              width: 70,
              marginLeft: index == 0 ? SIZES.lg : SIZES.md,
              marginRight:
                index == dummyData.category.length - 1 ? SIZES.lg : 0,
              paddingHorizontal: SIZES.md,
              borderRadius: SIZES.sm,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            }}>
            <Image source={item.image} style={{height: 50, width: 50}} />
          </TouchableOpacity>
        )}
      />
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
          ImageComponentStyle={
            {
              //   borderRadius: 4,
              // marginTop: SIZES.lg,
              //   width: width - 35,
            }
          }
          imageLoadingColor="#2196F3"
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.xl,
            paddingHorizontal: SIZES.lg,
            justifyContent: 'space-between',
          }}>
          <Text style={{...FONTS.h3, color: COLORS.black}}>{itemName}</Text>
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
            <Rating rating={itemRating} iconStyle={{height: 10, width: 10}} />
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

        {/* Related Items */}
        <HorizontalItems />
      </ScrollView>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
