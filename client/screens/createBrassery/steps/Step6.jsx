import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import StyleGuide from '../../../components/utils/StyleGuide';

import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from '../../../components/CustomButton';
import ProgressBar from '../../../components/utils/ProgressBar';

import Header from '../../../components/headings/Header';

import config from '../../../config/globalVariables';

const Step6 = ({ navigation }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user', function (error, data) {
      if (data != null) {
        async function loadData() {
          const rawResponse = await fetch(`${config.base_url}/api/auth/me`, {
            headers: {
              Authorization: `Bearer ${data}`,
            },
          });

          const response = await rawResponse.json();

          if (response.data) {
            setUserName(response.data.username.split(' ')[0]);
          }
        }
        loadData();
      }
    });
  }, []);

  return (
    <View style={[StyleGuide.container, { alignItems: 'center' }]}>
      <Header title='Création brasserie' />
      <View
        style={{
          width: '100%',
          height: 570,
          marginBottom: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={[
            StyleGuide.typography.text2,
            { textAlign: 'center', marginBottom: 20 },
          ]}
        >
          Bienvenue {userName} !
        </Text>
        <Text style={[StyleGuide.typography.text2, { textAlign: 'center' }]}>
          🎉
        </Text>
      </View>
      <View style={{ alignSelf: 'flex-end', marginBottom: 35 }}>
        <CustomButton
          type='next'
          onPress={() => navigation.navigate('Navbar', { sreen: 'MyBrewery' })}
        />
      </View>
      <ProgressBar pourcent={(6 * 100) / 6} />
    </View>
  );
};

export default Step6;
