import { StyleSheet, View, Text } from 'react-native';

import Header from '../../components/headings/Header';

import StyleGuide from '../../components/utils/StyleGuide';

const subscribe = () => {
  return (
    <View style={StyleGuide.container}>
      <Header title='Login' />
    </View>
  );
};

export default subscribe;
