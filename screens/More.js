import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../constants';
import {Header, LineDivider, TowColumns} from '../component';

const More = ({navigation}) => {
  function renderHeader() {
    return (
      <Header
        title="More"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.lg,
          marginTop: SIZES.lg,
        }}
      />
    );
  }

  return (
    <View style={{flex: 1}}>
      {renderHeader()}
      <TowColumns
        title={dummyData.more.about_us}
        icon={icons.rightArrow}
        onPress={() => console.log('about us')}
      />
      <LineDivider lineStyle={{marginHorizontal: SIZES.md}} />
      <TowColumns
        title={dummyData.more.settings}
        icon={icons.rightArrow}
        onPress={() => navigation.navigate('Settings')}
      />
      <LineDivider lineStyle={{marginHorizontal: SIZES.md}} />
      <TowColumns
        title={dummyData.more.customer_service}
        icon={icons.rightArrow}
        onPress={() => console.log('customer service')}
      />
    </View>
  );
};

export default More;
