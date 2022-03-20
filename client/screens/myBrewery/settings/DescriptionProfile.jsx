import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

import config from '../../../config/globalVariables';

import { connect } from 'react-redux';

import CustomButton from '../../../components/CustomButton';
import Input from '../../../components/utils/form-elements/Input';

import StyleGuide from '../../../components/utils/StyleGuide';

const DescriptionProfile = ({ closeOverlay, token }) => {
  const [description, setDescription] = useState(null);
  const [newDescription, setNewDescription] = useState(null);
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
        setDescription(response.data.brewDescription);
      }
    }
    loadUser();
  }, []);

  const updataDescription = async () => {
    const rawResponse = await fetch(
      `${config.base_url}/api/auth/updatebrewdescription`,
      {
        method: 'put',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `brewDescription=${newDescription}`,
      }
    );

    const response = await rawResponse.json();

    if (response.success) {
      setMessage('Votre description a bien été modifiée');
      setDescription(newDescription);
      setNewDescription(null);
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
          Modifier ma description
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: Dimensions.get('window').height / 50,
        }}
      >
        <Text
          style={[
            StyleGuide.typography.text4,
            { alignSelf: 'flex-start', marginLeft: 10 },
          ]}
        >
          Ancienne description
        </Text>
        <ScrollView
          style={{
            backgroundColor: StyleGuide.colors.secondary,
            width: Dimensions.get('window').width / 1.2,
            height: Dimensions.get('window').height / 4,
            borderRadius: StyleGuide.borderRadius,
            marginBottom: Dimensions.get('window').height / 18,
            paddingTop: Dimensions.get('window').height / 70,
            paddingBottom: Dimensions.get('window').height / 70,
            paddingLeft: Dimensions.get('window').height / 50,
            paddingRight: Dimensions.get('window').height / 50,
          }}
        >
          <Text
            style={{
              color: StyleGuide.colors.primary,
              fontFamily: 'Manrope_500Medium',
            }}
          >
            {description}
          </Text>
        </ScrollView>
        <Text
          style={[
            StyleGuide.typography.text4,
            { alignSelf: 'flex-start', marginLeft: 15 },
          ]}
        >
          Nouvelle description
        </Text>
        <Input
          type='textArea'
          style={{ marginBottom: Dimensions.get('window').height / 20 }}
          onChangeText={(val) => setNewDescription(val)}
          value={newDescription}
        />
        <CustomButton
          title='Modifier ma description'
          onPress={() => updataDescription()}
        />
        <Text
          style={[
            StyleGuide.typography.text4,
            {
              color: StyleGuide.colors.green,
              marginLeft: 25,
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

export default connect(mapStateToProps, null)(DescriptionProfile);
