import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import config from '../../../config/globalVariables';

import { connect } from 'react-redux';

import CustomButton from '../../../components/CustomButton';
import Input from '../../../components/utils/form-elements/Input';

import StyleGuide from '../../../components/utils/StyleGuide';

const PasswordProfile = ({ closeOverlay, token }) => {
  const [currentPassword, setCurrentPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [message, setMessage] = useState(null);

  const updatePassword = async () => {
    const rawResponse = await fetch(
      `${config.base_url}/api/auth/updatepassword`,
      {
        method: 'put',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `currentPassword=${currentPassword}&newPassword=${newPassword}`,
      }
    );

    const response = await rawResponse.json();

    if (response.success) {
      setMessage('Votre mot de passe a bien été modifié');
      setCurrentPassword('');
      setNewPassword('');
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
          Modifier mon mot de passe
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: Dimensions.get('window').height / 50,
          width: Dimensions.get('window').width / 1.25,
        }}
      >
        <View style={{ marginTop: Dimensions.get('window').height / 50 }}>
          <Text style={StyleGuide.typography.text4}>Ancien mot de passe</Text>
          <Input
            type='password'
            placeholder=' '
            value={currentPassword}
            onChangeText={(val) => setCurrentPassword(val)}
            style={{ marginTop: Dimensions.get('window').height / 100 }}
          />
        </View>
        <View style={{ marginTop: Dimensions.get('window').height / 50 }}>
          <Text style={StyleGuide.typography.text4}>Nouveau mot de passe</Text>
          <Input
            type='password'
            placeholder=' '
            value={newPassword}
            onChangeText={(val) => setNewPassword(val)}
            style={{ marginTop: Dimensions.get('window').height / 100 }}
          />
        </View>
        <CustomButton
          title='Valider'
          style={{ marginTop: Dimensions.get('window').height / 20 }}
          onPress={() => updatePassword()}
        />
        <Text
          style={[
            StyleGuide.typography.text4,
            {
              color: StyleGuide.colors.green,
              marginLeft: 60,
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

export default connect(mapStateToProps, null)(PasswordProfile);
