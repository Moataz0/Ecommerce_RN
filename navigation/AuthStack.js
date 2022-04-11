import React from 'react';
import {SignIn, SignUp} from '../screens';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </>
  );
}
