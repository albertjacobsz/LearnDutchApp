import { createContext } from 'react';
export const AuthContext = createContext({
  signIn: () => {},
  userToken: null,
  signUp: () => {},
});
