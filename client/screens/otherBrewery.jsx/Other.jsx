import React from 'react';
import { View, Text } from 'react-native';

import CustomButton from '../../components/CustomButton';
import StyleGuide from '../../components/utils/StyleGuide';

const Other = ({ navigation }) => {
  return (
    <View style={StyleGuide.container}>
      <Text>Other</Text>
      <CustomButton
        title='Aller sur le chat'
        onPress={() => navigation.navigate('Chat')}
      />
    </View>
  );
};

export default Other;
