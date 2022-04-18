import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getAuthASyncStorage() {
  const token = await AsyncStorage.getItem('userToken');
  // const user = await AsyncStorage.getItem('userData');
  return {
    token,
  };
}

export async function setAuthAsyncStorage(response) {
  await AsyncStorage.setItem('userToken', response.data.token);
  // await AsyncStorage.setItem('userData', response.data);
}

export async function resetAuthAsyncStorage() {
  await AsyncStorage.removeItem('userToken');
  // await AsyncStorage.removeItem('userData');/
}
