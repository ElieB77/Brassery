import { View } from "react-native";

import CustomButton from "../components/CustomButton";

const Home = ({ navigation }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CustomButton
          title='Aller sur Sign In'
          onPress={() => navigation.navigate('SignIn')}
        />
        <CustomButton
          title='Aller sur Sign Up'
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    );
};

export default Home;
