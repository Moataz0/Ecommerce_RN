import {
  View,
  Text,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { COLORS, dummyData, FONTS, icons, SIZES } from '../constants';
import { IconButton, TwoPointSlider, LineDivider } from '../component';
import { FlatList } from 'react-native-gesture-handler';


const Section = ({ containerStyle, title, children }) => {
  return (
    <View
      style={{
        // marginVertical: SIZES.lg,01
        ...containerStyle,
      }}>
      <Text
        style={{ ...FONTS.body4, color: COLORS.black, marginVertical: SIZES.md }}>
        {title}
      </Text>
      {children}
    </View>
  );
};
const FilterModal = ({ isVisible, onClose }) => {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;
  const [showFilterModal, setShowFilterModal] = useState(isVisible);


  const [selectedId, setSelectedId] = useState(null);


  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 380],
  });

  function renderPriceRange() {
    return (
      <View style={{ flex: 1, }}>
        <View style={{ alignSelf: "stretch", width: "100%", paddingVertical: 4, }}>
          <Text style={{ backgroundColor: COLORS.lightGray2, paddingVertical: SIZES.sm }}>Filter By</Text>
        </View>
        <Section title="Price Range" containerStyle={{ marginBottom: 20 }}>
          <View style={{ alignItems: 'center' }}>
            <TwoPointSlider
              values={[0, 115]}
              min={1}
              max={200}
              prefix="$"
              postfix=""
              onValuesChange={values => console.log(values)}
            />
          </View>
        </Section>
      </View>
    );
  }
  function renderFilterItems() {
    return (

      <FlatList
        data={dummyData.filterItems}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          const backgroundColor = item.id === selectedId ? "#FEFEFE" : COLORS.primary;

          return (
            <TouchableOpacity
              onPress={() => setSelectedId(item.id)}
              style={{ backgroundColor: backgroundColor, ...styles.item, }}>
              <View style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: 'stretch'

              }} >
                <Image
                  source={item.icon}
                  style={{ height: 15, width: 15, tintColor: COLORS.transparentPrimary }}
                />
                <Text style={{
                  color:
                    COLORS.black, ...FONTS.h4, marginHorizontal: SIZES.sm
                }}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />

    )
  }


  let getDiscount = dummyData.filterItems.map((rank, i, arr) =>
    arr.length - 1 === i && (
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={rank.icon} style={{ height: 15, width: 15, tintColor: COLORS.transparentPrimary }} />
        <Text style={{ color: COLORS.white, backgroundColor: "red" }}>{rank.title}</Text>
      </TouchableOpacity>
    )

  )

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={{ flex: 1, backgroundColor: COLORS.transparentBlack7 }}>
        {/* Transparent background */}
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          />
        </TouchableWithoutFeedback>

        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: modalY,
            width: '100%',
            height: '100%',
            padding: SIZES.lg,
            borderTopRightRadius: SIZES.lg,
            borderTopLeftRadius: SIZES.lg,
            backgroundColor: COLORS.primary,
          }}>
          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: SIZES.md,
            }}>
            <Text style={{ flex: 1, ...FONTS.h3, color: COLORS.black }}>
              Sort & Filter
            </Text>
            <IconButton
              onPress={() => setShowFilterModal(false)}
              icon={icons.cross}
              iconStyle={{
                height: 20,
                width: 20,
                tintColor: COLORS.transparentBlack7,
              }}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 250,
            }}>
            <LineDivider lineStyle={{ alignSelf: 'stretch' }} />

            {renderFilterItems()}
            {renderPriceRange()}
            {/* renderDiscount */}
            <TouchableOpacity style={{ flex: 1, paddingBottom: 100, }}>
              {getDiscount}
            </TouchableOpacity>









          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  item: {
    flex: 1,
    marginVertical: SIZES.sm,
  },

})
