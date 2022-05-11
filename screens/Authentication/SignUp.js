import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AuthLayout} from '..';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {CustomSwitch, FormInput, TextButton} from '../../component';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {utils} from '../../utils';
import {registerUser} from '../../stores/actions/authAction';
import {useSelector, useDispatch} from 'react-redux';
const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [emailError, setEmailError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [firstNameError, setfirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();

  function isEnableSignIn() {
    return (
      email != '' &&
      firstName != '' &&
      lastName != '' &&
      password != '' &&
      emailError == ''
    );
  }

  const handleRegister = () => {
    let values = {
      email,
      firstName,
      lastName,
      password,
      phoneNumber: '',
      termsCondition: true,
    };
    dispatch(registerUser(values, navigation));
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <ScrollView>
        <AuthLayout
          title="Getting Started"
          subTitle="Create an account to continue!">
          <View
            style={{
              flex: 1,
              marginTop: SIZES.md,
            }}>
            <FormInput
              label="Email"
              keyboardType="email-address"
              onChange={value => {
                utils.validateEmail(value, setEmailError);
                setEmail(value);
              }}
              autoCompleteType="email"
              errorMsg={emailError}
              appendComponent={
                <View style={{justifyContent: 'center'}}>
                  <Image
                    source={
                      email == '' || (email != '' && emailError == '')
                        ? icons.correct
                        : icons.cancel
                    }
                    style={{
                      height: 20,
                      width: 20,
                      tintColor:
                        email == ''
                          ? COLORS.gray
                          : email != '' && emailError == ''
                          ? COLORS.green
                          : COLORS.red,
                    }}
                  />
                </View>
              }
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <FormInput
                label="First Name"
                containerStyle={{
                  // flex: 1,
                  width: 150,
                  marginTop: SIZES.md,
                }}
                onChange={value => {
                  utils.validateInput(value, 3, setfirstNameError);
                  setFirstName(value);
                }}
                errorMsg={firstNameError}
                appendComponent={
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      source={
                        firstName == '' ||
                        (firstName != '' && firstNameError == '')
                          ? icons.correct
                          : icons.cancel
                      }
                      style={{
                        height: 20,
                        width: 20,
                        tintColor:
                          firstName == ''
                            ? COLORS.gray
                            : firstName != '' && firstNameError == ''
                            ? COLORS.green
                            : COLORS.red,
                      }}
                    />
                  </View>
                }
              />

              <FormInput
                label="Last Name"
                containerStyle={{
                  width: 150,
                  marginTop: SIZES.md,
                }}
                onChange={value => {
                  utils.validateInput(value, 3, setLastNameError);
                  setLastName(value);
                }}
                errorMsg={lastNameError}
                appendComponent={
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      source={
                        lastName == '' ||
                        (lastName != '' && lastNameError == '')
                          ? icons.correct
                          : icons.cancel
                      }
                      style={{
                        height: 20,
                        width: 20,
                        tintColor:
                          lastName == ''
                            ? COLORS.gray
                            : lastName != '' && lastNameError == ''
                            ? COLORS.green
                            : COLORS.red,
                      }}
                    />
                  </View>
                }
              />
            </View>

            <FormInput
              label="Password"
              secureTextEntry={!showPass}
              autoCompleteType="password"
              containerStyle={{
                marginTop: SIZES.md,
              }}
              onChange={value => {
                utils.validatePassword(value, setPasswordError);
                setPassword(value);
              }}
              errorMsg={passwordError}
              appendComponent={
                <TouchableOpacity
                  style={{
                    width: 40,
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}
                  onPress={() => setShowPass(!showPass)}>
                  <Image
                    source={showPass ? icons.eye_close : icons.eye}
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: COLORS.gray,
                    }}
                  />
                </TouchableOpacity>
              }
            />

            <TextButton
              label="Sign Up"
              disabled={isEnableSignIn() ? false : true}
              buttonContainerStyle={{
                height: 55,
                alignItems: 'center',
                marginTop: SIZES.xl,
                borderRadius: SIZES.md,
                backgroundColor: isEnableSignIn()
                  ? COLORS.red
                  : COLORS.transparentPrimary,
              }}
              onPress={handleRegister}
            />

            <View
              style={{
                flexDirection: 'row',
                marginVertical: SIZES.lg,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: COLORS.darkGray,
                  ...FONTS.body3,
                }}>
                Already have an account?
              </Text>
              <TextButton
                label=" Sign In"
                buttonContainerStyle={{
                  backgroundColor: null,
                }}
                labelStyle={{
                  color: COLORS.red,
                }}
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
        </AuthLayout>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
