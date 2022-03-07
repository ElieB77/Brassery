import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import config from '../../../config/globalVariables';

import { connect } from 'react-redux';

import CustomButton from '../../../components/CustomButton';
import Input from '../../../components/utils/form-elements/Input';

import StyleGuide from '../../../components/utils/StyleGuide';

const UsernameProfile = ({ closeOverlay, token }) => {
  const [newEmail, setNewEmail] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const rawResponse = await fetch(`${config.base_url}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await rawResponse.json();

      if (response.data) {
        setEmail(response.data.email);
      }
    }
    loadUser();
  }, []);

  const updateEmail = async () => {
    const rawResponse = await fetch(`${config.base_url}/api/auth/updateemail`, {
      method: 'put',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `email=${newEmail}`,
    });

    const response = await rawResponse.json();

    if (response.success) {
      setMessage('Votre email a bien été modifié');
      setEmail(newEmail);
      setNewEmail('');
    }
  };

  return (
    <View style={[styles.container]}>
      <View style={{ alignItems: 'center', flexDirection: 'row' }}>
        <CustomButton type='close' onPress={() => closeOverlay()} />
        <Text
          style={[
            StyleGuide.typography.text3,
            { width: 235, textAlign: 'center' },
          ]}
        >
          Modifier mon email
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: Dimensions.get('window').height / 50,
        }}
      >
        <Text
          style={{
            color: StyleGuide.colors.secondary,
            fontFamily: 'Manrope_700Bold',
            marginBottom: Dimensions.get('window').height / 18,
          }}
        >
          {email}
        </Text>

        <Input
          type='text'
          placeholder='Nouvel email'
          value={newEmail}
          onChangeText={(val) => setNewEmail(val)}
          style={{
            marginBottom: Dimensions.get('window').height / 20,
            width: Dimensions.get('window').width / 1.2,
          }}
        />
        <CustomButton
          title='Modifier mon email'
          onPress={() => updateEmail()}
        />
        <Text
          style={[
            StyleGuide.typography.text4,
            {
              color: StyleGuide.colors.green,
              textDecorationLine: 'underline',
            },
          ]}
        >
          {message}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 10,
    backgroundColor: StyleGuide.colors.white,
  },
});

function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps, null)(UsernameProfile);
