import React, { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react'

import { HomeScreen, LoginScreen } from "./src/screens/index";
import { store, persistor } from './src/features';
const Stack = createStackNavigator();


const App = () => {

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(cekStatus())
  // }, [])

  const isLogin = useSelector((state) => {
    return state.auth.isLogin;
  });

  console.log(isLogin)
  return (
    <NavigationContainer >
      <Stack.Navigator>
        {
          isLogin === false ?
            <Stack.Screen
              name="Login"
              component={LoginScreen}
            />
            :
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
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