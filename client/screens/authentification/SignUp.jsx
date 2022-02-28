import { StyleSheet, View, Text } from 'react-native';

import Header from '../../components/headings/Header';
import Brasser from '../../components/utils/icons/Brasser';

import StyleGuide from '../../components/utils/StyleGuide';

const SignUp = () => {
  return (
    <View style={StyleGuide.container}>
      <Header title="S'inscrire" />
      <View style={{ justifyContent: 'center' }}>
        <Brasser />
      </View>
    </View>
  );
};

export default SignUp;
