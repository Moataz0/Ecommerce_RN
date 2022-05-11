import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS, SIZES } from '../constants';

const { width, height } = Dimensions.get('window');
const SliderImageBox = () => {
  const images = [
    require('../assets/images/banner4.jpg'),
    require('../assets/images/banner2.jpg'),
    require('../assets/images/banner6.jpg'),
  ];
  return (
    <View>
      <SliderBox
        images={images}
        sliderBoxHeight={250}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor="#FFF"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxStyle={{
          position: 'absolute',
          bottom: 0,
          padding: 0,
          alignItems: 'center',
          alignSelf: 'flex-start',
          justifyContent: 'center',
          paddingVertical: 10,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: 'rgba(128, 128, 128, 0.92)',
        }}
        ImageComponentStyle={{
          borderRadius: 4,
          marginTop: SIZES.sm,
          width: width - 35,
        }}
        imageLoadingColor="#2196F3"
      />
      <View
        style={{
          position: 'absolute',
          top: height * 0.10,
          marginLeft: SIZES.xl,
          flex: 1,
        }}>
        <Text
          style={{ color: '#FFF', fontSize: SIZES.h3, marginBottom: SIZES.sm }}>
          New Arrivals
        </Text>
        <Text style={styles.bannerTitle}>Big Sale {'\n'}50% Off</Text>
        <Text
          style={{ color: COLORS.white, fontSize: SIZES.h4, fontWeight: '500' }}>
          SHOP NOW
        </Text>
        <View
          style={{
            borderBottomColor: COLORS.white,
            borderBottomWidth: 1,
            width: 80,
          }}
        />
      </View>
    </View>
  );
};

export default SliderImageBox;

const styles = StyleSheet.create({
  bannerTitle: {
    color: COLORS.white,
    fontSize: SIZES.h1,
    marginVertical: SIZES.sm,
    fontWeight: 'bold',
  },
});
