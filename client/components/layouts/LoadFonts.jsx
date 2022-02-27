import { View } from 'react-native';
import {
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_700Bold,
} from '@expo-google-fonts/manrope';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const LoadFonts = (props) => {
  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <View>{props.children}</View>;
};

export default LoadFonts;
