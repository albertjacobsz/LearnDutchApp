import * as React from 'react';
import { useQuery } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/Login/LoginComponent';
import { QueryClient, QueryClientProvider } from 'react-query';
import DisplayScreen from './components/DisplayUnit/MainDisplayUnit';
import MainScreen from './components/LevelScreen/MainLevelScreen';
import WordDisplayScreen from './components/WordDisplay/WordDisplayScreen';
import WordQuizPressScreen from './components/WordQuizPress/WordQuizPressScreen';
import WordQuizMatch from './components/WordQuizMatch/WordQuizMatch';
import SignUp from './components/SignUp/SignUp';
const Stack = createNativeStackNavigator();

import { signUp } from './Controllers/apiCalls';
import { AuthContext } from './hooks/AuthContext';

export default function App() {
  const queryClient = new QueryClient();

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await SecureStore.getItemAsync('LOGIN_TOKEN');
        console.log(userToken);
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);
  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        let userToken;

        console.log(userToken);
        if (userToken === 'undefined') {
          console.log('hello');
        }
        userToken = null;
        dispatch({ type: 'SIGN_IN', token: userToken });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        let userToken = null;
        dispatch({ type: 'SIGN_UP', token: userToken });
      },
    }),
    []
  );
  return (
    <AuthContext.Provider value={authContext}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            {state.userToken == null ? (
              <>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUp} />
              </>
            ) : (
              <>
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="Display" component={DisplayScreen} />
                <Stack.Screen name="Word" component={WordDisplayScreen} />
                <Stack.Screen
                  name="PressQuiz"
                  component={WordQuizPressScreen}
                />
                <Stack.Screen name="MatchQuiz" component={WordQuizMatch} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}
