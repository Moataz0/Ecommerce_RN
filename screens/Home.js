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
import React, {useState} from 'react';
import {Header, SliderImageBox} from '../component';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../constants';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useEffect} from 'react';
import apiData from '../services/API';
import CardItem from '../component/CardItem';

const Home = () => {
  const [menuList, setMenuList] = useState([]);
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

  const Section = ({title, onPress, children}) => {
    return (
      <View>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: SIZES.h1,
            marginTop: 30,
            marginBottom: 20,
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
        {children}
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
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
              width: 120,
              marginLeft: index == 0 ? SIZES.lg : SIZES.md,
              marginRight:
                index == dummyData.category.length - 1 ? SIZES.lg : 0,
              paddingHorizontal: SIZES.md,
              borderRadius: 4,
              borderWidth: 0.1,
              shadowColor: '#f6f6f5',
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
              style={{height: 40, width: 40, tintColor: COLORS.red}}
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
      <View
        style={{flex: 1, backgroundColor: COLORS.primary, paddingBottom: 100}}>
        <Header title="Home" />

        {renderSearch()}
        {/* Slider Component */}
        <SliderImageBox />
        <Section
          title="By Collection"
          onPress={() => console.log('View All')}></Section>
        {/* renderCategories */}
        {renderCategories()}
        <Section title="New Items" onPress={() => console.log('View All')}>
          <FlatList
            data={products}
            keyExtractor={item => item.id}
            horizontal
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <CardItem
                containerStyle={{
                  marginHorizontal: SIZES.sm,
                }}
                sale="30%"
                item={item}
                onPress={() => console.log('Vertical items')}
              />
            )}
          />
        </Section>

        <View></View>
      </View>
    </ScrollView>
  );
};

export default Home;
