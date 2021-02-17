import React, { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react'

import { LoginScreen, ProductScreens, ProfileScreen, DetailScreen, RegisterScreen } from "./src/screens/index";
import { store, persistor } from './src/features';
const Stack = createStackNavigator();
import { navigationRef } from './src/helper/navigator';


const App = () => {

  const isLogin = useSelector((state) => {
    return state.auth.isLogin;
  });

  console.log(isLogin)
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {
          isLogin === false ?
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
              />
              <Stack.Screen
                name="Register"
                component={RegisterScreen}
              />
            </>
            :
            <>
              <Stack.Screen
                name="Profile"
                component={ProfileScreen}
              />
              <Stack.Screen
                name="Product"
                component={ProductScreens}
              />
              <Stack.Screen
                name="Detail"
                component={DetailScreen}
              />
            </>
        }
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const MasterApp = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App {...props} />
      </PersistGate>
    </Provider>
  );
};

export default MasterApp