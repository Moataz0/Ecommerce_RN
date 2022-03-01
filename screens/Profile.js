import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, dummyData, FONTS, icons, images, SIZES} from '../constants';
import {Header, LineDivider, TowColumns} from '../component';

const Profile = ({navigation}) => {
  function renderHeader() {
    return (
      <Header
        title="My Account"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.lg,
          marginTop: SIZES.lg,
          marginBottom: SIZES.lg,
        }}
      />
    );
  }

  function renderPhoto() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.md,
          alignItems: 'center',
        }}>
        <Image
          source={images.myPhoto}
          style={{height: 50, width: 50, borderRadius: SIZES.xl}}
        />
        <Text style={{color: COLORS.black, ...FONTS.h3, paddingLeft: SIZES.md}}>
          Moataz Muhammed
        </Text>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      {renderHeader()}
      {renderPhoto()}
      <TowColumns
        title={dummyData.myAccount.my_orders}
        icon={icons.rightArrow}
        onPress={() => console.log('my orders')}
      />
      <LineDivider lineStyle={{marginHorizontal: SIZES.md}} />
      <TowColumns
        title={dummyData.myAccount.my_details}
        icon={icons.rightArrow}
        onPress={() => console.log('my details')}
      />
      <LineDivider lineStyle={{marginHorizontal: SIZES.md}} />
      <TowColumns
        title={dummyData.myAccount.payment_cards}
        icon={icons.rightArrow}
        onPress={() => console.log('payment cards')}
      />
      <LineDivider lineStyle={{marginHorizontal: SIZES.md}} />
      <TowColumns
        title={dummyData.myAccount.sign_out}
        icon={icons.rightArrow}
        onPress={() => console.log('sign out')}
      />
    </View>
  );
};

export default Profile;
