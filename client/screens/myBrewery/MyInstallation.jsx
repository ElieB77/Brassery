import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import StyleGuide from '../../components/utils/StyleGuide';
import config from '../../config/globalVariables';

import Header from '../../components/headings/Header';

import CustomButton from '../../components/CustomButton';

const MyInstallation = ({ route, token }) => {
  const [installationPicture, setInstallationPicture] = useState(null);
  const [installationDescription, setInstallationDescription] = useState(null);
  const { userId } = route.params;

  useEffect(() => {
    async function loadUser() {
      const rawResponse = await fetch(`${config.base_url}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await rawResponse.json();

      if (response.data) {
        setInstallationPicture(response.data.installationPicture);
        setInstallationDescription(response.data.installationDescription);
      }
    }
    loadUser();
  }, []);

  return (
    <View style={StyleGuide.container}>
      <Header title='Mon installation' />
      <View style={{ alignItems: 'center' }}>
        <Image
          style={{
            width: Dimensions.get('window').width / 1.2,
            height: Dimensions.get('window').height / 2.5,
            borderRadius: StyleGuide.borderRadius,
            marginBottom: Dimensions.get('window').height / 20,
          }}
          source={{ uri: installationPicture }}
        />
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
            {installationDescription}
          </Text>
        </ScrollView>
        <CustomButton title='Modifier mon installation' />
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps, null)(MyInstallation);
