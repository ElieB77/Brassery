import React from 'react';
import { View, Text } from 'react-native';

import StyleGuide from '../../components/utils/StyleGuide';

import Header from '../../components/headings/Header';

const Beer = () => {
  return (
    <View style={StyleGuide.container}>
      <Header title='Nom de la bière' />
    </View>
  );
};

export default Beer;
