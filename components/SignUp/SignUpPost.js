import { useQuery } from 'react-query';
import SecureStoreController from './../../Controllers/secureStoreController';
const postNewUser = async (userData, navigation) => {
  let data;
  console.log(userData);
  const url = 'https://learn-dutch-api.herokuapp.com/api/v1/users/signup';
  await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: userData,
  })
    .then((res) => res.json())
    .then((res) => {
      data = res;
      console.log(data);
      SecureStoreController.saveSecure('LOGIN_TOKEN', data.token);
      if (data.status === 'success') {
        navigation.navigate('MainScreen');
      }
    });
};

const useUser = (data) => useQuery(['user', data], () => postNewUser(data));
export default postNewUser;
