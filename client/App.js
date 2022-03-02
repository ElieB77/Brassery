import React, { useState } from 'react'
import LoadFonts from './components/layouts/LoadFonts'

import Home from './screens/Home'
import SignIn from './screens/authentification/SignIn'
import SignUp from './screens/authentification/SignUp'
import Step1 from './screens/createBrassery/steps/Step1'
import Step2 from './screens/createBrassery/steps/Step2'
import Step3 from './screens/createBrassery/steps/Step3'
import Step4 from './screens/createBrassery/steps/Step4'
import Step5 from './screens/createBrassery/steps/Step5'
import Step6 from './screens/createBrassery/steps/Step6'

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

  //AsyncStorage.clear()
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
                  <Stack.Screen name="Navbar" component={Navbar} />
                </>
              ) : (
                  <>
                    <Stack.Screen name="Step1" component={Step1} />
                    <Stack.Screen name="Step2" component={Step2} />
                    <Stack.Screen name="Step3" component={Step3} />
                    <Stack.Screen name="Step4" component={Step4} />
                    <Stack.Screen name="Step5" component={Step5} />
                    <Stack.Screen name="Step6" component={Step6} />
                    <Stack.Screen name="Navbar" component={Navbar} />
                  </>
              )
            }
        </Stack.Navigator>
      </NavigationContainer>
    </LoadFonts>
    </Provider>
  );
};

export default App;