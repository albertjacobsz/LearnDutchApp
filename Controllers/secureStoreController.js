import * as SecureStore from 'expo-secure-store';

exports.saveSecure = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
};
exports.getKeyFor = async (key) => {
  let user = await SecureStore.getItemAsync(key);
  console.log(user);
  if (user) {
    return user;
  }
  return null;
};
