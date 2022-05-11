import {
  KeyboardAvoidingViewBase,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {Header, IconButton, TextButton, FormInput} from '../component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Address = ({navigation}) => {
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
              transform: [{scaleX: -1}],
            }}
            onPress={() => navigation.goBack()}
          />
        }
      />
    );
  }
  function renderForm() {
    return (
      <View
        style={{
          backgroundColor: COLORS.primary,
          marginHorizontal: SIZES.lg,
          marginTop: SIZES.md,
        }}>
        <Text
          style={{...FONTS.h3, color: COLORS.black, marginBottom: SIZES.md}}>
          Add New Address
        </Text>

        <View
          style={{
            borderWidth: 1,
            borderRadius: SIZES.sm,
            padding: SIZES.md,
            borderColor: COLORS.lightGray3,
          }}>
          <FormInput
            labelStyle={{
              marginBottom: 4,
            }}
            label="Address"
            placeHolder="Add new address"
            containerStyle={{
              marginTop: SIZES.sm,
            }}
            inputContainerStyle={{
              backgroundColor: COLORS.primary,
              borderColor: COLORS.lightGray3,
              borderWidth: 1,
            }}
          />
          <FormInput
            labelStyle={{
              marginBottom: 4,
            }}
            label="Street"
            placeHolder="Abass el akaad"
            containerStyle={{
              marginTop: SIZES.sm,
            }}
            inputContainerStyle={{
              backgroundColor: COLORS.primary,
              borderColor: COLORS.lightGray3,
              borderWidth: 1,
            }}
          />
          <FormInput
            labelStyle={{
              marginBottom: 4,
            }}
            label="City"
            placeHolder="Cairo"
            containerStyle={{
              marginTop: SIZES.sm,
            }}
            inputContainerStyle={{
              backgroundColor: COLORS.primary,
              borderColor: COLORS.lightGray3,
              borderWidth: 1,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginVertical: SIZES.sm,
            }}>
            <FormInput
              labelStyle={{
                marginBottom: 4,
              }}
              label="State"
              placeHolder="Nasr city"
              containerStyle={{
                flex: 1,
              }}
              inputContainerStyle={{
                backgroundColor: COLORS.primary,
                borderColor: COLORS.lightGray3,
                borderWidth: 1,
              }}
            />

            <FormInput
              labelStyle={{
                marginBottom: 4,
              }}
              label="Zip Code"
              placeHolder="111"
              inputContainerStyle={{
                backgroundColor: COLORS.primary,
                borderColor: COLORS.lightGray3,
                borderWidth: 1,
              }}
              containerStyle={{
                flex: 1,
                marginLeft: SIZES.md,
              }}
            />
          </View>
        </View>
      </View>
    );
  }
  function renderFooter() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.lg,
          paddingVertical: SIZES.md,
        }}>
        <TextButton
          buttonContainerStyle={{
            height: 40,
            borderRadius: 4,
            backgroundColor: COLORS.red,
          }}
          label="Save Address"
          onPress={() => console.log('Complete')}
        />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      {renderHeader()}

      <ScrollView>
        <KeyboardAwareScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{
            flexGrow: 1,
            flex: 1,
          }}>
          {renderForm()}
        </KeyboardAwareScrollView>
      </ScrollView>
      {renderFooter()}
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({});
