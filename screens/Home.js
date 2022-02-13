import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import Header from '../component/Header';
import {COLORS, images, SIZES} from '../constants';

const serverImages = [
  'https://www.ikea.com/ext/ingkadam/m/6f1cba42d7e45883/original/PH162921-crop001.jpg?f=xxxl',
  'https://www.ikea.com/ext/ingkadam/m/76ab6c1e5ea6d9e6/original/PH162803-crop003.jpg?f=xxxl',
  'https://www.ikea.com/ext/ingkadam/m/6ae56a720626b004/original/PH164216-crop002.jpg?f=xxxl',
  'https://www.ikea.com/ext/ingkadam/m/34a153c69024eca6/original/PH178540-crop001.jpg?f=xxxl',
];
const Home = () => {
  const [activeBanner, setActiveBanner] = useState(0);
  const timeout = useRef(null);

  let length = serverImages.length;

  const changeBanner = ({nativeEvent}) => {
    const slider = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    // timeout.current = slider;
    if (slider !== activeBanner) {
      setActiveBanner(slider);
    }
  };

  //   const nextSlide = () => {
  //     if (timeout.current) {
  //       clearTimeout(timeout.current);
  //     }
  //     setActiveBanner(activeBanner === length - 1 ? 0 : activeBanner + 1);
  //   };

  //   const prevSlide = () => {
  //     if (timeout.current) {
  //       clearTimeout(timeout.current);
  //     }
  //     setActiveBanner(activeBanner === 0 ? length - 1 : activeBanner - 1);
  //   };
  //   useEffect(() => {
  //     const nextSlide = () => {
  //       setActiveBanner(current => (current === length - 1 ? 0 : current + 1));
  //     };

  //     timeout.current = setTimeout(nextSlide, 3000);

  //     // return function () {
  //     //   if (timeout.current) {
  //     //     clearTimeout(timeout.current);
  //     //   }
  //     // };
  //   }, [activeBanner]);

  if (!Array.isArray(serverImages) || serverImages.length <= 0) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="HOME" />
      <View style={styles.wrap}>
        <ScrollView
          onScroll={changeBanner}
          horizontal
          style={styles.wrap}
          pagingEnabled
          showsHorizontalScrollIndicator={false}>
          {serverImages.map((e, i) => (
            <Image
              key={e}
              source={{uri: e}}
              resizeMode="stretch"
              style={styles.wrap}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {serverImages.map((e, i) => (
            <TouchableOpacity>
              <Text
                key={e}
                style={activeBanner === i ? styles.dotActive : styles.dot}>
                &#x25cf;
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: SIZES.width,
    height: SIZES.height * 0.5,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    margin: 3,
    color: '#888',
  },
  dotActive: {
    margin: 3,
    color: '#FFF',
  },
});
