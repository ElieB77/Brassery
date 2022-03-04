import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import StyleGuide from '../../../components/utils/StyleGuide';

import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from '../../../components/CustomButton';
import ProgressBar from '../../../components/utils/ProgressBar';

import Header from '../../../components/headings/Header';

import config from '../../../config/globalVariables';

const Step6 = ({ navigation, token, user }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    async function sendData() {
      const data = new FormData();

      data.append('avatar', {
        uri: user.avatar,
        type: 'image/jpeg',
        name: `user_picture_user_avatar.jpg`,
      });
      data.append('installationPhoto', {
        uri: user.avatar,
        type: 'image/jpeg',
        name: `user_picture_installation_photo.jpg`,
      });
      data.append('brewedYet', `${user.brewedYet}`);
      data.append('favoriteBeer', user.favoriteBeer);
      data.append('localisation', JSON.stringify(user.localisation));
      data.append('brewedDescription', user.brewedDescription);
      data.append('materials', JSON.stringify(user.materials));

      await fetch(`${config.base_url}/api/auth/updateDetails`, {
        method: 'put',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });
    }

    async function loadData() {
      const rawResponse = await fetch(`${config.base_url}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const response = await rawResponse.json();

      if (response.data) {
        setUserName(response.data.username.split(' ')[0]);
      }
    }
    loadData();
    sendData();
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

function mapStateToProps(state) {
  console.log(state);
  return { token: state.token, user: state.user };
}

export default connect(mapStateToProps, null)(Step6);