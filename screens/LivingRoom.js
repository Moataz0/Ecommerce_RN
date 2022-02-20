import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Header, IconButton, CardItem, FilterModal} from '../component';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../constants';
import CheckBox from '@react-native-community/checkbox';

const {width} = Dimensions.get('window');
const LivingRoom = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [showFilterModal, setShowFilterModal] = useState(false);

  function renderHeader() {
    return (
      <Header
        title="Living Room"
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
        rightComponent={
          <IconButton
            icon={icons.search}
            iconStyle={{
              height: 25,
              width: 25,
            }}
            containerStyle={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => console.log('Search')}
          />
        }
      />
    );
  }

  function renderItemsCount() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{padding: SIZES.lg}}>
          <Text>255 items</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: SIZES.lg,
          }}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Image
            source={icons.category}
            style={{height: 20, width: 20, tintColor: COLORS.red}}
          />
        </View>
      </View>
    );
  }
  function renderCategories() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: SIZES.sm,
        }}>
        <TouchableOpacity
          onPress={() => {
            setShowFilterModal(true);
            console.log('show');
          }}
          style={{
            marginLeft: SIZES.lg,
            marginHorizontal: 4,
            marginVertical: SIZES.sm,
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            width: 50,
            shadowColor: '#000',
            borderRadius: SIZES.sm,
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6,
            backgroundColor: COLORS.primary,
          }}>
          <Image
            source={icons.filter}
            style={{height: 25, width: 25, tintColor: '#4d4f53'}}
          />
        </TouchableOpacity>

        <FlatList
          data={dummyData.category}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 120,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                elevation: 6,
                marginTop: SIZES.sm,
                marginLeft: index == 0 ? SIZES.sm : SIZES.sm,
                marginRight:
                  index == dummyData.category.length - 1 ? SIZES.lg : 0,
                borderRadius: SIZES.sm,

                backgroundColor:
                  selectedCategoryId == item.id ? COLORS.red : COLORS.primary,
                // backgroundColor: COLORS.primary,
              }}
              onPress={() => {
                setSelectedCategoryId(item.id);
                // handleChangeCategory(item.id, selecteMenuType)
              }}>
              <Text
                style={{
                  //   alignSelf: 'center',
                  color:
                    selectedCategoryId == item.id
                      ? COLORS.primary
                      : COLORS.black,
                  alignItems: 'center',
                  justifyContent: 'center',

                  ...FONTS.h3,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
  function renderAllProduct() {
    return (
      <FlatList
        contentContainerStyle={{paddingBottom: 20}}
        data={dummyData.bestSelling}
        showsVerticalScrollIndicator={false}
        key={'_'}
        keyExtractor={item => '_' + item.id}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <View style={styles.parent}>
              <CardItem
                key={index}
                containerStyle={{
                  marginHorizontal: SIZES.lg,
                  paddingHorizontal: -SIZES.lg,
                  width: width / 2.4,
                  marginRight: -SIZES.sm,
                  flex: 1,
                }}
                withSale={true}
                localImage={true}
                sale="30%"
                item={item}
                onPress={() => console.log('Vertical items')}
              />
            </View>
          );
        }}
      />
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      {renderHeader()}
      {showFilterModal && (
        <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      )}
      {renderItemsCount()}

      {renderCategories()}

      {renderAllProduct()}
    </View>
  );
};

export default LivingRoom;

const styles = StyleSheet.create({
  parent: {
    marginVertical: SIZES.sm,
  },
});
