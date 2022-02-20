import {
  View,
  Text,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {IconButton, TwoPointSlider, LineDivider} from '../component';

const Section = ({containerStyle, title, children}) => {
  return (
    <View
      style={{
        // marginVertical: SIZES.lg,
        ...containerStyle,
      }}>
      <Text
        style={{...FONTS.body4, color: COLORS.black, marginVertical: SIZES.md}}>
        {title}
      </Text>
      {children}
    </View>
  );
};
const FilterModal = ({isVisible, onClose}) => {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;
  const [showFilterModal, setShowFilterModal] = useState(isVisible);

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
      <Section title="Price Range" containerStyle={{marginBottom: 20}}>
        <View style={{alignItems: 'center'}}>
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
    );
  }
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={{flex: 1, backgroundColor: COLORS.transparentBlack7}}>
        {/* Transparent background */}
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
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
            <Text style={{flex: 1, ...FONTS.h3, color: COLORS.black}}>
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
            <LineDivider lineStyle={{alignSelf: 'stretch'}} />
            {renderPriceRange()}
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
