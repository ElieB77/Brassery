<<<<<<< HEAD
import LoadFonts from './components/layouts/LoadFonts'

import Home from './screens/Home'
import SignIn from './screens/authentification/SignIn'
import SignUp from './screens/authentification/SignUp'

import Navbar from './components/layouts/navbar/Navbar';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
=======
import { Text, View } from "react-native";
import LoadFonts from "./components/layouts/LoadFonts";
import ProgressBar from "./components/utils/ProgressBar";
import InputText from "./components/utils/form-elements/Input";
import CustomButton from "./components/CustomButton";
import Dropdown from "./components/utils/form-elements/Dropdown";
import Input from "./components/utils/form-elements/Input";
>>>>>>> form-elements

const App = () => {
  return (
    <LoadFonts>
<<<<<<< HEAD
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Navbar" component={Navbar} />
        </Stack.Navigator>
      </NavigationContainer>
=======
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Dropdown />
        <Input type="searchInput" />
      </View>
>>>>>>> form-elements
    </LoadFonts>
  );
};

export default App;