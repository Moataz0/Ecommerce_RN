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
import TextButton from '../component/TextButton';


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
    outputRange: [SIZES.height, SIZES.height - 460],
  });

  function renderPriceRange() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignSelf: "stretch", width: "100%", }}>
          <Text style={{ backgroundColor: COLORS.lightGray2, paddingVertical: SIZES.sm }}>Filter By</Text>
        </View>
        <Section title="Price Range" containerStyle={{ marginBottom: SIZES.sm }}>
          <View style={{ alignItems: 'center', marginBottom: -SIZES.sm }}>
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
              key={item.id}
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
                {selectedId === item.id && (
                  <View style={{ flex: 1, alignItems: "flex-end", marginHorizontal: SIZES.sm }}>
                    <Image source={icons.check} style={{ height: 25, width: 25, tintColor: COLORS.red }} />
                  </View>
                )}


              </View>

              <LineDivider lineStyle={{ alignSelf: 'stretch', marginTop: SIZES.sm }} />


            </TouchableOpacity>
          )
        }}
      />

    )
  }

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
              paddingBottom: 220
            }}
          >
            <LineDivider lineStyle={{ alignSelf: 'stretch' }} />
            {renderFilterItems()}
            {renderPriceRange()}
            <LineDivider lineStyle={{ alignSelf: 'stretch', marginBottom: SIZES.sm }} />
            {/* renderDiscount */}
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", }}>
              <Image source={icons.discount2} style={{ height: 15, width: 15, tintColor: COLORS.transparentPrimary }} />
              <Text style={{ color: COLORS.black, marginHorizontal: SIZES.sm }}>Discount</Text>
            </TouchableOpacity>
            {/* action buttons */}

            <View style={{
              flex: 1,
              flexDirection: "row",
              paddingTop: SIZES.md,
              paddingHorizontal: SIZES.lg,
              justifyContent: "space-evenly"
            }}>
              <TextButton label="Reset"
                buttonContainerStyle={{
                  backgroundColor: COLORS.primary,
                  paddingHorizontal: SIZES.lg * 2,
                  paddingVertical: SIZES.sm,
                  borderRadius: 4,
                  borderWidth: 1,
                  borderTopColor: COLORS.gray2,
                  borderRightColor: COLORS.gray2,
                  borderLeftColor: COLORS.gray2,
                  borderBottomColor: COLORS.gray2,
                }}
                labelStyle={{
                  color: COLORS.black,
                }} />

              <TextButton label="Apply"
                buttonContainerStyle={{
                  backgroundColor: COLORS.red,
                  paddingHorizontal: SIZES.lg * 2,
                  paddingVertical: SIZES.sm,
                  borderRadius: 4,
                  borderWidth: 1,
                  borderTopColor: COLORS.gray2,
                  borderRightColor: COLORS.gray2,
                  borderLeftColor: COLORS.gray2,
                  borderBottomColor: COLORS.gray2,
                }}
                labelStyle={{
                  color: COLORS.primary,
                }} />

            </View>
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
    marginVertical: 4,
  },

})
