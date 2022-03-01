import React, { useState } from 'react'
import LoadFonts from './components/layouts/LoadFonts'

import Home from './screens/Home'
import SignIn from './screens/authentification/SignIn'
import SignUp from './screens/authentification/SignUp'
import CreateMyBrassery from './screens/createBrassery/CreateMyBrassery'

import Navbar from './components/layouts/navbar/Navbar';

import token from './reducers/authentification';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const store = createStore(combineReducers({ token }));

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // AsyncStorage.clear()
  // AsyncStorage.removeItem('user')

  AsyncStorage.getItem("user", function (error, data) {
    if (data != null) {
      setIsLoggedIn(true)
    }
  })
  return (
    <Provider store={store}>
    <LoadFonts>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
              !isLoggedIn ? (
                <>
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="SignIn" component={SignIn} />
                  <Stack.Screen name="SignUp" component={SignUp} />
                  <Stack.Screen name="CreateMyBrassery" component={CreateMyBrassery} />
                  <Stack.Screen name="Navbar" component={Navbar} />
                </>
              ) : (
                <Stack.Screen name="Navbar" component={Navbar} />
              )
            }
        </Stack.Navigator>
      </NavigationContainer>
    </LoadFonts>
    </Provider>
  );
};

export default App;