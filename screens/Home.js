import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {Header, SliderImageBox} from '../component';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../constants';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useEffect} from 'react';

import CardItem from '../component/CardItem';
import {useDispatch, useSelector} from 'react-redux';
import {apiData} from '../services/urls';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {appTheme} = useSelector(state => state.theme);
  const [loadingProduct, setLoadingProduct] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [bestSelling, setBestSelling] = useState(dummyData.bestSelling);
  const [products, setProducts] = useState([]);
  const [getCategories, setGetCategories] = useState([]);

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
      setLoadingCategories(true);
      await apiData.getAllCategories().then(data => {
        setGetCategories(data);
        setLoadingCategories(false);
      });
    } catch (error) {
      console.log(error);
      setLoadingCategories(false);
    }
  };
  const getAllProducts = async () => {
    try {
      setLoadingProduct(true);
      await apiData.getSectionProductTracks().then(data => {
        setProducts(data);
        console.log(data);
        setLoadingProduct(false);
      });
    } catch (error) {
      console.log('xxxxxx.....', error);
      setLoadingProduct(false);
    }
  };

  const Section = ({title, onPress}) => {
    return (
      <View>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: SIZES.h1,
            marginVertical: 20,
          }}>
          <Text style={{flex: 1, ...FONTS.body2, color: COLORS.black}}>
            {title}
          </Text>
          <TouchableOpacity
            onPress={onPress}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.red,
                ...FONTS.body3,
                marginHorizontal: SIZES.sm,
              }}>
              View All
            </Text>
            <Image
              source={icons.rightArrow}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.red,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  function renderCategories() {
    return (
      <FlatList
        data={getCategories}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('LivingRoom')}
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: SIZES.md,
              backgroundColor: COLORS.primary,
              height: 100,
              width: 120,
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
            <Image
              source={item.bannerImagePath}
              style={{height: 40, width: 40, tintColor: COLORS.red}}
            />
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.h4,
                alignSelf: 'center',
                marginTop: SIZES.sm,
              }}>
              {item.enName}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }
  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: SIZES.lg,
          paddingHorizontal: SIZES.sm,
          borderRadius: SIZES.sm,
          // backgroundColor: COLORS.gray,
        }}>
        <Image
          source={icons.search}
          style={{height: 20, width: 20, tintColor: COLORS.black}}
        />
        <TextInput
          style={{flex: 1, marginLeft: SIZES.sm, ...FONTS.body4}}
          placeholderTextColor={COLORS.gray}
          placeholder="Search"
        />
      </View>
    );
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, backgroundColor: appTheme.backgroundColor}}>
        <Header title="Home" />
        {renderSearch()}
        {/* Slider Component */}
        <SliderImageBox />
        <Section
          title="By Collection"
          onPress={() => console.log('View All')}></Section>
        {/* renderCategories */}
        {loadingCategories ? (
          <ActivityIndicator size="large" color={COLORS.red} />
        ) : (
          renderCategories()
        )}

        <Section title="New Items" onPress={() => console.log('View All')} />
        {loadingProduct && (
          <ActivityIndicator size="large" color={COLORS.red} />
        )}
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item, index}) => (
            <CardItem
              key={index}
              containerStyle={{
                width: 200,
                marginHorizontal: SIZES.md,
                marginVertical: SIZES.md,
              }}
              item={item}
              onPress={() =>
                navigation.navigate('ItemDetails', {
                  itemId: item.id,
                  itemName: item.productName,
                  itemImage: item.imagePath,
                  itemPrice: item.price,
                  itemRating: item.rateCount,
                  itemDesc: item.productTrackName,
                })
              }
            />
          )}
        />
        <Section title="Best Selling" onPress={() => console.log('View All')} />
        <FlatList
          data={bestSelling}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item, index}) => (
            <CardItem
              key={index}
              containerStyle={{
                marginHorizontal: SIZES.md,
                marginTop: SIZES.md,
                marginBottom: SIZES.xl * 2,
              }}
              withSale={true}
              localImage={true}
              sale="30%"
              item={item}
              onPress={() =>
                navigation.navigate('ProductDetail', {
                  itemId: item.id,
                  itemName: item.title,
                  itemImage: item.image,
                  itemPrice: item.price,
                  itemRating: item.rating.rate,
                  itemDesc: item.description,
                })
              }
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
