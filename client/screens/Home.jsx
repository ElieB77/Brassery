import { View } from 'react-native';
import Bubble from '../components/chat/Bubble';

import MyBrewery from './MyBrewery';

import CustomButton from '../components/CustomButton';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <CustomButton
        title='Aller sur Ma brasserie'
        onPress={() => navigation.navigate('Navbar', { screen: 'MyBrewery' })}
      /> */}
      <Bubble type='left'/>
    </View>
  );
};

export default Home;
