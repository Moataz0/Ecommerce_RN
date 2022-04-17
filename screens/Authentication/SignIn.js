import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AuthLayout} from '..';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {CustomSwitch, FormInput, Spinner, TextButton} from '../../component';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {utils} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../stores/actions/authAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);

  const dispatch = useDispatch();
  const {user, isLoading, error, message} = useSelector(state => state.auth);
  const {token} = user;
  // let token = AsyncStorage.getItem('auth');
  function isEnableSignIn() {
    return email != '' && password != '' && emailError == '';
  }

  const handleLogin = () => {
    let values = {
      email,
      password,
    };
    dispatch(login(values));
    if (token) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('SignIn');
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <ScrollView>
        <AuthLayout
          title="Let's Sign You In"
          subTitle="Welcome back, you've been missed">
          <View
            style={{
              flex: 1,
              marginTop: SIZES.xl,
            }}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: COLORS.red}}>{error}</Text>
            </View>

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
            <FormInput
              label="Password"
              secureTextEntry={!showPass}
              autoCompleteType="password"
              containerStyle={{
                marginTop: SIZES.md,
              }}
              onChange={value => setPassword(value)}
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

            <View
              style={{
                flexDirection: 'row',
                marginTop: SIZES.lg,
                justifyContent: 'space-between',
              }}>
              <CustomSwitch
                value={saveMe}
                onChange={value => setSaveMe(value)}
              />
              <TextButton
                label="Forgot Password?"
                buttonContainerStyle={{
                  backgroundColor: null,
                }}
                labelStyle={{
                  color: COLORS.gray,
                  ...FONTS.body4,
                }}
                onPress={() => navigation.navigate('ForgotPassword')}
              />
            </View>
            {isLoading ? (
              <Spinner size="small" />
            ) : (
              <TextButton
                label="Sign In"
                disabled={isEnableSignIn() ? false : true}
                buttonContainerStyle={{
                  height: 55,
                  alignItems: 'center',
                  marginTop: SIZES.xxl,
                  borderRadius: SIZES.md,
                  backgroundColor: isEnableSignIn()
                    ? COLORS.red
                    : COLORS.transparentPrimary,
                }}
                // onPress={() => navigation.navigate('Home')}
                onPress={() => handleLogin()}
              />
            )}
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginVertical: SIZES.lg,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: COLORS.darkGray,
                ...FONTS.body3,
              }}>
              Don't have an account?
            </Text>
            <TextButton
              label="Sign Up"
              buttonContainerStyle={{
                backgroundColor: null,
                marginLeft: 3,
              }}
              labelStyle={{
                color: COLORS.red,
                ...FONTS.h3,
              }}
              onPress={handleLogin}
            />
          </View>
        </AuthLayout>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
