import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import StyleGuide from '../../../components/utils/StyleGuide';

import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from '../../../components/CustomButton';
import ProgressBar from '../../../components/utils/ProgressBar';
import Dropdown from '../../../components/utils/form-elements/Dropdown';

import Header from '../../../components/headings/Header';

import config from '../../../config/globalVariables';

const Step2 = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('user', function (error, data) {
      if (data != null) {
        async function loadData() {
          const rawResponse = await fetch(`${config.base_url}/api/recipes`, {
            headers: {
              Authorization: `Bearer ${data}`,
            },
          });

          const response = await rawResponse.json();

          if (response.data) {
            response.data.map((item) => {
              setRecipes((prevState) => [...prevState, item.name]);
            });
          }
        }
        loadData();
      }
    });
  }, []);

  const getValue = (element) => {
    console.log(element);
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
        <Text
          style={[StyleGuide.typography.text4, { alignSelf: 'flex-start' }]}
        >
          Ma bière préférée
        </Text>
        <Dropdown item={recipes} title='Choisir ma bière' getValue={getValue} />
      </View>
      <View style={{ alignSelf: 'flex-end', marginBottom: 35 }}>
        <CustomButton
          type='next'
          onPress={() => navigation.navigate('Step3')}
        />
      </View>
      <ProgressBar pourcent={(2 * 100) / 6} />
    </View>
  );
};

export default Step2;
