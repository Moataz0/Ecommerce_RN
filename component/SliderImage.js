import React, { useEffect, useState, useRef, useCallback } from 'react';
import { StyleSheet, ScrollView, View, Dimensions, Text, Image, ActivityIndicator } from 'react-native';
import { SIZES } from '../constants';


const SliderImage = () => {
    const [dimension, setDimension] = useState(Dimensions.get('window'));
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollRef = useRef();
    let intervalId = null;

    const onChange = () => {
        setDimension(Dimensions.get('window'));
    };

    useEffect(() => {
        Dimensions.addEventListener('change', onChange)
        return () => {
            Dimensions.removeEventListener('change', onChange);
        };
    });

    const onSlideChange = useCallback(() => {
        // Calculate newIndex here and use it to update your state and to scroll to the new slide
        const newIndex = selectedIndex === carouselImages.length - 1 ? 0 : selectedIndex + 1;

        setSelectedIndex(newIndex);

        scrollRef?.current?.scrollTo({
            animated: true,
            y: 0,
            x: dimension.width * newIndex,
        });
    }, [selectedIndex]);

    const startInterval = useCallback(() => {
        intervalId = setInterval(onSlideChange, 3000);
    }, [onSlideChange]);

    useEffect(() => {
        startInterval();

        return () => {
            // Clear the interval when component unmounts, otherwise you could have memory leaks
            clearInterval(intervalId);
        };
    }, [onSlideChange]);

    const onTouchStart = () => {
        // As soon as the user touches the slide, stop the automatic sliding
        clearInterval(intervalId);
    };

    const onTouchEnd = () => {
        // As soon as the user stops touching the slide, releases it, start the automatic sliding again
        startInterval();
    };

    const carouselImages = [

        { url: 'https://i.ibb.co/FDwNR9d/img1.jpg' },
        { url: 'https://i.ibb.co/7G5qqGY/1.jpg' },
        { url: 'https://i.ibb.co/Jx7xqf4/pexels-august-de-richelieu-4427816.jpg' },
        { url: 'https://i.ibb.co/GV08J9f/pexels-pixabay-267202.jpg' },
        { url: 'https://i.ibb.co/sK92ZhC/pexels-karolina-grabowska-4210860.jpg' },

    ];

    const setIndex = event => {
        let viewSize = event.nativeEvent.layoutMeasurement.width;
        let contentOffset = event.nativeEvent.contentOffset.x;
        let carouselIndex = Math.floor(contentOffset / viewSize);
        setSelectedIndex(carouselIndex);
    };

    return (
        <View style={{ ...styles.bannerContainer, width: dimension.width }}>
            <ScrollView
                horizontal
                style={{ marginHorizontal: SIZES.lg }}
                ref={scrollRef}
                onMomentumScrollEnd={setIndex}
                showsHorizontalScrollIndicator={false}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                pagingEnabled>
                {carouselImages.map((value, key) => (
                    <View >
                        <Image
                            source={{ uri: `${value.url}` }}
                            style={{
                                width: dimension?.width, height: 250,
                                resizeMode: 'cover',
                                borderRadius: 20

                            }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    </View>

                ))}
            </ScrollView>
            <View
                style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: 0,
                    alignSelf: 'flex-start',
                }}>
                {carouselImages.map((_, key) => (
                    <Text
                        key={key}
                        style={key === selectedIndex ? { color: 'white' } : { color: '#888' }}>
                        ⬤
                    </Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bannerContainer: {


    }
});

export default SliderImage;