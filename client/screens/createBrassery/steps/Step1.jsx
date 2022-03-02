import React, { useState } from 'react';
import { View } from 'react-native';
import StyleGuide from '../../../components/utils/StyleGuide';

import CustomButton from '../../../components/CustomButton';
import ProgressBar from '../../../components/utils/ProgressBar';

import Header from '../../../components/headings/Header';

const Step1 = ({ navigation }) => {
  const [alreadyBrewed, setAlreadyBrewed] = useState(false);
  const [notBrewed, setNotBrewed] = useState(false);

  const handleAlreadyBrewed = () => {
    setAlreadyBrewed(true);
    setNotBrewed(false);
  };

  const handleNotBrewed = () => {
    setNotBrewed(true);
    setAlreadyBrewed(false);
  };

  return (
    <View style={[StyleGuide.container, { alignItems: 'center' }]}>
      <Header title='Création brasserie' />
      <View
        style={{
          height: 570,
          marginBottom: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View style={{ marginBottom: 55 }}>
          <CustomButton
            border={alreadyBrewed}
            onPress={() => handleAlreadyBrewed()}
            title="J'ai déjà brassé"
          />
        </View>
        <CustomButton
          border={notBrewed}
          onPress={() => handleNotBrewed()}
          title="Je n'ai jamais brassé"
        />
      </View>
      <View style={{ alignSelf: 'flex-end', marginBottom: 35 }}>
        <CustomButton
          type='next'
          onPress={() => navigation.navigate('Step2')}
        />
      </View>
      <ProgressBar pourcent={(1 * 100) / 6} />
    </View>
  );
};

export default Step1;
