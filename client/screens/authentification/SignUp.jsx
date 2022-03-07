import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { connect } from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config/globalVariables';

import Header from '../../components/headings/Header';
import Input from '../../components/utils/form-elements/Input';
import CustomButton from '../../components/CustomButton';
import Facebook from '../../components/utils/icons/Facebook';
import Apple from '../../components/utils/icons/Apple';
import Google from '../../components/utils/icons/Google';

import StyleGuide from '../../components/utils/StyleGuide';

const SignUp = ({ navigation, saveToken }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    const rawResponse = await fetch(`${config.base_url}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `username=${username}&email=${email}&password=${password}`,
    });

    const response = await rawResponse.json();

    if (response.token) {
      AsyncStorage.setItem('user', response.token);
      saveToken(response.token);
      navigation.navigate('Step1');
    } else {
      console.log(response);
    }
  };

  return (
    <View style={[StyleGuide.container, { alignItems: 'center' }]}>
      <Header title="S'inscrire" />
      <View style={styles.formContainer}>
        <View style={styles.formInput}>
          <Input
            type='text'
            placeholder="Nom d'utilisateur ..."
            value={username}
            onChangeText={(val) => setUsername(val)}
          />
        </View>
        <View style={styles.formInput}>
          <Input
            type='text'
            placeholder='Email ...'
            value={email}
            onChangeText={(val) => setEmail(val)}
          />
        </View>
        <View style={styles.lastInput}>
          <Input
            style={styles.formInput}
            type='password'
            value={password}
            onChangeText={(val) => setPassword(val)}
          />
        </View>
        <CustomButton title='Créer mon compte' onPress={() => handleSignUp()} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 45,
        }}
      >
        <View style={styles.divider}></View>
        <Text
          style={[
            StyleGuide.typography.overline,
            {
              color: StyleGuide.colors.gray,
              marginLeft: 15,
              marginRight: 15,
            },
          ]}
        >
          Continuer avec
        </Text>
        <View style={styles.divider}></View>
      </View>
      <View style={styles.logosContainer}>
        <Facebook />
        <Apple />
        <Google />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={[
            StyleGuide.typography.overline,
            { color: StyleGuide.colors.gray, marginRight: 5 },
          ]}
        >
          J'ai déjà un compte ?
        </Text>
        <Text
          style={[
            StyleGuide.typography.overline,
            { color: StyleGuide.colors.secondary },
          ]}
          onPress={() => navigation.navigate('SignIn')}
        >
          M’identifier
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 185,
    flexDirection: 'column',
    alignItems: 'center',
  },
  formInput: {
    marginBottom: 20,
  },
  lastInput: {
    marginBottom: 25,
  },
  divider: {
    width: 75,
    height: 1,
    backgroundColor: StyleGuide.colors.gray,
  },
  logosContainer: {
    width: 300,
    height: 75,
    marginTop: 25,
    marginBottom: 75,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

function mapDispatchToProps(dispatch) {
  return {
    saveToken: (token) => {
      dispatch({ type: 'addToken', token });
    },
  };
}

export default connect(null, mapDispatchToProps)(SignUp);

