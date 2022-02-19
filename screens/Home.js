import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import { Header, SliderImageBox } from '../component';
import { COLORS, dummyData, FONTS, icons, SIZES } from '../constants';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import apiData from '../services/API';
import CardItem from '../component/CardItem';

const Home = ({ navigation }) => {
  const [bestSelling, setBestSelling] = useState(dummyData.bestSelling);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      await apiData.getProductsFromApi().then(data => {
        setProducts(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const Section = ({ title, onPress }) => {
    return (
      <View>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: SIZES.h1,
            marginVertical: 20,
          }}>
          <Text style={{ flex: 1, ...FONTS.body2, color: COLORS.black }}>
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
        data={dummyData.category}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("LivingRoom")}
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
              source={item.icon}
              style={{ height: 40, width: 40, tintColor: COLORS.red }}
            />
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.h4,
                alignSelf: 'center',
                marginTop: SIZES.sm,
              }}>
              {item.name}
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
          style={{ height: 20, width: 20, tintColor: COLORS.black }}
        />
        <TextInput
          style={{ flex: 1, marginLeft: SIZES.sm, ...FONTS.body4 }}
          placeholderTextColor={COLORS.gray}
          placeholder="Search"
        />
      </View>
    );
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
        <Header title="Home" />
        {renderSearch()}
        {/* Slider Component */}
        <SliderImageBox />
        <Section
          title="By Collection"
          onPress={() => console.log('View All')}>

        </Section>
        {/* renderCategories */}
        {renderCategories()}
        <Section title="New Items" onPress={() => console.log('View All')} />
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item, index }) => (
            <CardItem
              key={index}
              containerStyle={{
                marginHorizontal: SIZES.md,
                marginVertical: SIZES.md
              }}
              item={item}
              onPress={() => console.log('Vertical items')}
            />

          )}
        />
        <Section
          title="Best Selling"
          onPress={() => console.log('View All')}
        />
        <FlatList
          data={bestSelling}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item, index }) => (
            <CardItem
              key={index}
              containerStyle={{
                marginHorizontal: SIZES.md,
                marginTop: SIZES.md,
                marginBottom: SIZES.xl * 2
              }}
              withSale={true}
              localImage={true}
              sale="30%"
              item={item}
              onPress={() => console.log('Vertical items')}
            />

          )}
        />

      </View>
    </ScrollView>
  );
};

export default Home;
