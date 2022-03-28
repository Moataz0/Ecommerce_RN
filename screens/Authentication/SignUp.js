import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { AuthLayout } from '..';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import { CustomSwitch, FormInput, TextButton } from '../../component';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { utils } from '../../utils';

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("")

    const [emailError, setEmailError] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [usernameError, setusernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    function isEnableSignIn() {
        return email != "" && password != "" && emailError == "";
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <ScrollView>
                <AuthLayout
                    title="Getting Started"
                    subTitle="Create an account to continue!"
                >
                    <View style={{
                        flex: 1,
                        marginTop: SIZES.xl
                    }}>
                        <FormInput
                            label="Email"
                            keyboardType='email-address'
                            onChange={(value) => {
                                utils.validateEmail(value, setEmailError);
                                setEmail(value);
                            }}
                            autoCompleteType="email"
                            errorMsg={emailError}
                            appendComponent={
                                <View style={{ justifyContent: "center" }}>
                                    <Image
                                        source={
                                            email == "" || (email != "" && emailError == "")
                                                ? icons.correct
                                                : icons.cancel
                                        }
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor:
                                                email == ""
                                                    ? COLORS.gray
                                                    : email != "" && emailError == ""
                                                        ? COLORS.green
                                                        : COLORS.red,
                                        }}
                                    />
                                </View>
                            }
                        />

                        <FormInput
                            label="Username"
                            containerStyle={{
                                marginTop: SIZES.md
                            }}
                            keyboardType='email-address'
                            autoCompleteType='email'
                            onChange={(value) => {

                                setUsername(value)
                            }}
                            errorMsg={usernameError}
                            appendComponent={
                                <View style={{ justifyContent: "center" }}>
                                    <Image source={username == "" || (username != "" && usernameError == "") ?
                                        icons.correct : icons.cancel}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor: username == "" ?
                                                COLORS.gray : (username != "" &&
                                                    usernameError == "") ?
                                                    COLORS.green : COLORS.red
                                        }} />
                                </View>
                            }
                        />

                        <FormInput
                            label="Password"
                            secureTextEntry={!showPass}
                            autoCompleteType='password'
                            containerStyle={{
                                marginTop: SIZES.md
                            }}
                            onChange={(value) => {
                                utils.validatePassword(value, setPasswordError)
                                setPassword(value)
                            }}
                            errorMsg={passwordError}
                            appendComponent={
                                <TouchableOpacity style={{
                                    width: 40,
                                    alignItems: "flex-end",
                                    justifyContent: "center"
                                }}
                                    onPress={() => setShowPass(!showPass)}
                                >
                                    <Image
                                        source={showPass ? icons.eye_close :
                                            icons.eye}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor: COLORS.gray
                                        }} />
                                </TouchableOpacity>
                            }
                        />
                        <View style={{
                            flex: 1,
                            marginTop: SIZES.md
                        }}>
                            <TextButton
                                label="Sign Up"
                                disabled={isEnableSignIn() ? false : true}
                                buttonContainerStyle={{
                                    height: 55,
                                    alignItems: "center",
                                    marginTop: SIZES.xxl,
                                    borderRadius: SIZES.md,
                                    backgroundColor: isEnableSignIn()
                                        ? COLORS.red
                                        : COLORS.transparentPrimary,
                                }}
                                onPress={() => navigation.navigate("Home")}
                            />

                            <View style={{
                                flexDirection: "row",
                                marginVertical: SIZES.lg,
                                justifyContent: "center",
                            }}>
                                <Text style={{
                                    color: COLORS.darkGray, ...FONTS.body3
                                }}>
                                    Already have an account?
                                </Text>
                                <TextButton
                                    label=" Sign In"
                                    buttonContainerStyle={{
                                        backgroundColor: null
                                    }}
                                    labelStyle={{
                                        color: COLORS.red
                                    }}
                                    onPress={() => navigation.goBack()}
                                />
                            </View>
                        </View>
                    </View>
                </AuthLayout>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;

const styles = StyleSheet.create({});
