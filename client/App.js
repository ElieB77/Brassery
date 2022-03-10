import React, { useState } from "react";
import LoadFonts from "./components/layouts/LoadFonts";

import UserPage from "./screens/otherbrewers/UserPage";
import Recipe from "./screens/functionalities/Recipe";
import Batch from "./screens/functionalities/Batch";
import Home from "./screens/Home";
import FirstPage from "./screens/FirstPage";
import Discovering from "./screens/Discovering";
import SignIn from "./screens/authentification/SignIn";
import SignUp from "./screens/authentification/SignUp";
import Step1 from "./screens/createBrassery/steps/Step1";
import Step2 from "./screens/createBrassery/steps/Step2";
import Step3 from "./screens/createBrassery/steps/Step3";
import Step4 from "./screens/createBrassery/steps/Step4";
import Step5 from "./screens/createBrassery/steps/Step5";
import Step6 from "./screens/createBrassery/steps/Step6";
import Resources from "./screens/Resources";
import BeerLiked from "./screens/myBrewery/BeerLiked";
import Beer from "./screens/myBrewery/Beer";
import Other from "./screens/otherBrewery.jsx/Other";
import Settings from "./screens/Settings";
import MyInstallation from "./screens/myBrewery/MyInstallation";
import Chat from "./screens/otherBrewery.jsx/Chat";
import CreateRecipe from "./screens/functionalities/CreateRecipe";
import MyMessages from "./screens/otherBrewery.jsx/MyMessages";
import MyBatches from "./screens/myBrewery/MyBatches";

import Navbar from "./components/layouts/navbar/Navbar";

import token from "./reducers/authentification";
import user from "./reducers/user";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();
const store = createStore(combineReducers({ token, user }));

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // AsyncStorage.clear();
  // AsyncStorage.removeItem('user')

  AsyncStorage.getItem("user", function (error, data) {
    if (data != null) {
      setIsLoggedIn(true);
    }
  });

    return (
        <Provider store={store}>
            <LoadFonts>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        {!isLoggedIn ? (
                            <>
                                <Stack.Screen
                                    name="FirstPage"
                                    component={FirstPage}
                                />
                                <Stack.Screen
                                    name="Discovering"
                                    component={Discovering}
                                />
                                <Stack.Screen name="Home" component={Home} />
                                <Stack.Screen
                                    name="Resources"
                                    component={Resources}
                                />
                                <Stack.Screen
                                    name="SignIn"
                                    component={SignIn}
                                />
                                <Stack.Screen
                                    name="SignUp"
                                    component={SignUp}
                                />
                                <Stack.Screen name="Step1" component={Step1} />
                                <Stack.Screen name="Step2" component={Step2} />
                                <Stack.Screen name="Step3" component={Step3} />
                                <Stack.Screen name="Step4" component={Step4} />
                                <Stack.Screen name="Step5" component={Step5} />
                                <Stack.Screen name="Step6" component={Step6} />
                                <Stack.Screen name="Batch" component={Batch} />
                                <Stack.Screen
                                    name="UserPage"
                                    component={UserPage}
                                />
                                <Stack.Screen
                                    name="Recipe"
                                    component={Recipe}
                                />
                                <Stack.Screen
                                    name="Navbar"
                                    component={Navbar}
                                />
                                <Stack.Screen
                                    name="CreateRecipe"
                                    component={CreateRecipe}
                                />
                                <Stack.Screen name="MyMessages" component={MyMessages} />
                                <Stack.Screen name="Chat" component={Chat} />
                                <Stack.Screen name="Other" component={Other} />
                                <Stack.Screen
                                    name="BeerLiked"
                                    component={BeerLiked}
                                />
                                <Stack.Screen name="Beer" component={Beer} />
                                <Stack.Screen
                                    name="Settings"
                                    component={Settings}
                                />
                                <Stack.Screen
                                    name="MyInstallation"
                                    component={MyInstallation}
                                />
                                <Stack.Screen
                                    name="MyBatches"
                                    component={MyBatches}
                                />
                            </>
                        ) : (
                            <>
                                    <Stack.Screen
                                        name="Navbar"
                                        component={Navbar}
                                    />
                                    <Stack.Screen
                                        name="FirstPage"
                                        component={FirstPage}
                                    />
                                    <Stack.Screen
                                        name="Discovering"
                                        component={Discovering}
                                    />
                                    <Stack.Screen name="Home" component={Home} />
                                    <Stack.Screen
                                        name="Resources"
                                        component={Resources}
                                    />
                                    <Stack.Screen
                                        name="SignIn"
                                        component={SignIn}
                                    />
                                    <Stack.Screen
                                        name="SignUp"
                                        component={SignUp}
                                    />
                                    <Stack.Screen name="Step1" component={Step1} />
                                    <Stack.Screen name="Step2" component={Step2} />
                                    <Stack.Screen name="Step3" component={Step3} />
                                    <Stack.Screen name="Step4" component={Step4} />
                                    <Stack.Screen name="Step5" component={Step5} />
                                    <Stack.Screen name="Step6" component={Step6} />
                                <Stack.Screen name="Batch" component={Batch} />
                                <Stack.Screen
                                    name="Recipe"
                                    component={Recipe}
                                />
                                <Stack.Screen name="Other" component={Other} />
                                <Stack.Screen
                                    name="BeerLiked"
                                    component={BeerLiked}
                                />
                                <Stack.Screen name="Beer" component={Beer} />
                                <Stack.Screen
                                    name="Settings"
                                    component={Settings}
                                />
                                <Stack.Screen
                                    name="UserPage"
                                    component={UserPage}
                                />
                                <Stack.Screen
                                    name="MyInstallation"
                                    component={MyInstallation}
                                />
                                <Stack.Screen name="Chat" component={Chat} />
                                <Stack.Screen
                                    name="CreateRecipe"
                                    component={CreateRecipe}
                                />
                                <Stack.Screen name="MyMessages" component={MyMessages} />
                                <Stack.Screen
                                    name="MyBatches"
                                    component={MyBatches}
                                />
                            </>
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            </LoadFonts>
        </Provider>
    );
};

export default App;
