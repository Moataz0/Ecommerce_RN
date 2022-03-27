import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { AuthLayout } from '..';
import { COLORS, SIZES } from '../../constants';
import { FormInput } from '../../component';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView>
        <AuthLayout
          title="Let's Sign You In"
          subTitle="Welcome back, you've been missed"
        />
        <View style={{

          flex: 1,
          marginTop: SIZES.lg,

        }}>
          <FormInput
            label="Email"
            keyboardType='email-address'
            onChange={(e) => console.log(e)}
            autoCompleteType="email"
            errorMsg={emailError}

          />
          <FormInput
            label="Password"
            secureTextEntry={!showPass}
            autoCompleteType="password"
            containerStyle={{
              marginTop: SIZES.md,
            }}

          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
