import LoadFonts from './components/layouts/LoadFonts'

import Home from './screens/Home'
import SignIn from './screens/authentification/SignIn'
import SignUp from './screens/authentification/SignUp'

import Navbar from './components/layouts/navbar/Navbar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <LoadFonts>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Navbar" component={Navbar} />
        </Stack.Navigator>
      </NavigationContainer>
    </LoadFonts>
  );
};

export default App;