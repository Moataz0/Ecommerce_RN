import {StyleSheet, Dimensions, View} from 'react-native';
import React from 'react';
import {COLORS, icons, SIZES} from '../constants';
import {SliderBox} from 'react-native-image-slider-box';
import {Header, IconButton} from '../component';

const {width, height} = Dimensions.get('window');
const ProductDetail = ({navigation}) => {
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
        title="Chair Dacey li"
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
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      {renderHeader()}
      <SliderBox
        images={images}
        sliderBoxHeight={250}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor={COLORS.red}
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        // autoplay
        // circleLoop
        // resizeMethod={'resize'}
        resizeMode={'contain'}
        paginationBoxStyle={{
          position: 'absolute',
          bottom: -60,
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
        ImageComponentStyle={{
          //   borderRadius: 4,
          marginTop: SIZES.lg,
          //   width: width - 35,
        }}
        imageLoadingColor="#2196F3"
      />
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
