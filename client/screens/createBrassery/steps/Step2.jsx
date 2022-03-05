import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import StyleGuide from '../../../components/utils/StyleGuide';

import CustomButton from '../../../components/CustomButton';
import ProgressBar from '../../../components/utils/ProgressBar';
import Dropdown from '../../../components/utils/form-elements/Dropdown';

import Header from '../../../components/headings/Header';

import config from '../../../config/globalVariables';

const Step2 = ({ navigation, token, updateFavoriteBeertUser }) => {
  const [recipes, setRecipes] = useState([]);
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    async function loadData() {
      const rawResponse = await fetch(`${config.base_url}/api/recipes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const response = await rawResponse.json();

      if (response.data) {
        response.data.map((item) => {
          setRecipes((prevState) => [...prevState, item.name.toUpperCase()]);
        });
      }
    }
    loadData();
  }, []);

  const getValue = (element) => {
    setBeer(element);
  };

  const nextStep = () => {
    updateFavoriteBeertUser(beer);
    navigation.navigate('Step3');
  };

  return (
    <View style={[StyleGuide.container, { alignItems: 'center' }]}>
      <Header title='Création brasserie' />
      <View
        style={{
          height: 570,
          width: 300,
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
        <CustomButton type='next' onPress={() => nextStep()} />
      </View>
      <ProgressBar pourcent={(2 * 100) / 6} />
    </View>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    updateFavoriteBeertUser: (favoriteBeer) => {
      dispatch({ type: 'updateFavoriteBeertUser', favoriteBeer });
    },
  };
}

function mapStateToProps(state) {
  console.log(state);
  return { token: state.token };
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
