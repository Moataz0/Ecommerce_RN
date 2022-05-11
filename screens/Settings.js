import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Header, IconButton, TowColumns} from '../component';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../stores/actions/themeActions';

const Settings = ({navigation}) => {
  const dispatch = useDispatch();
  const {appTheme} = useSelector(state => state.theme);

  function toggleThemeHandler() {
    if (appTheme.name == 'light') {
      dispatch(toggleTheme('dark'));
    } else {
      dispatch(toggleTheme('light'));
    }
  }
  function renderHeader() {
    return (
      <Header
        title="Settings"
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
            onPress={() => navigation.navigate('Home')}
          />
        }
      />
    );
  }
  return (
    <View>
      {renderHeader()}
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            paddingLeft: SIZES.md,
          }}>
          <Text style={{...FONTS.h3, color: COLORS.black}}>Theme</Text>
        </View>
        <TouchableOpacity
          onPress={() => toggleThemeHandler()}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginHorizontal: SIZES.md,
            // paddingHorizontal: SIZES.sm,
            height: 40,
            borderRadius: 20,
            backgroundColor: COLORS.lightGray3,
          }}>
          {/* Sun */}
          <View
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              paddingRight: SIZES.sm,
              ...(appTheme.name == 'light'
                ? styles.selectedLightModeStyle
                : {}),
            }}>
            <Image
              source={icons.sunny}
              style={{height: 30, width: 30, tintColor: COLORS.black}}
            />
          </View>
          {/* Moon */}
          <View
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              ...(appTheme.name == 'dark' ? styles.selectedNightModeStyle : {}),
            }}>
            <Image
              source={icons.night}
              style={{height: 30, width: 30, tintColor: COLORS.white}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  selectedNightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.black,
  },
  selectedLightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.yellow,
  },
});
