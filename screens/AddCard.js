import {ScrollView, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {Header, IconButton, TextButton, FormInput} from '../component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AddCard = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  function renderHeader() {
    return (
      <Header
        title="Payment"
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
          Add New Card
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
            label="Account Number"
            placeHolder="xxxx xxxx xxxx 3463"
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
            label="Carddholder Name"
            placeHolder="Moataz Muhammed"
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
              label="Expiry"
              placeHolder="Month / Year"
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
              secureTextEntry={true}
              onChange={e => console.log(e)}
              label="CVV"
              autoCompleteType="password"
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Switch
              trackColor={{false: '#767577', true: COLORS.lightGray3}}
              thumbColor={isEnabled ? COLORS.red : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={{...FONTS.h5, color: COLORS.black}}>
              Save card information for nex payment
            </Text>
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
          label="Save Card"
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

export default AddCard;
