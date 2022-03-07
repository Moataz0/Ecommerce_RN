import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { icons, SIZES } from '../constants';
import { Header, IconButton } from '../component';

const Address = ({ navigation }) => {

  function renderHeader() {
    return (
      <Header
        title="Address"
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
              transform: [{ scaleX: -1 }],
            }}
            onPress={() => navigation.goBack()}
          />
        }
      />
    );
  }
  return (
    <View>
      {renderHeader()}
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({});
