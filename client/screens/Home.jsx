import { View } from "react-native";

import CustomButton from '../components/CustomButton';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomButton
        title='Aller sur Login'
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

export default Home;
