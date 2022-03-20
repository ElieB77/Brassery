import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import config from '../../../config/globalVariables';

import { connect } from 'react-redux';

import CustomButton from '../../../components/CustomButton';

import StyleGuide from '../../../components/utils/StyleGuide';

const AvatarProfile = ({ closeOverlay, token }) => {
  const [avatar, setAvatar] = useState(null);
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
        let avatar = response.data.avatar.split('/');
        avatar[5] = `${avatar[5]}/w_200,h_200,c_fill,r_max`;
        avatar = avatar.join('/');

        setAvatar(avatar);
      }
    }
    loadUser();
  }, []);

  const openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted) {
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (!pickerResult.cancelled) {
        const data = new FormData();

        data.append('avatar', {
          uri: pickerResult.uri,
          type: 'image/jpeg',
          name: `user_picture_avatar.jpg`,
        });

        const rawResponse = await fetch(
          `${config.base_url}/api/auth/updateavatar`,
          {
            method: 'put',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: data,
          }
        );

        const response = await rawResponse.json();

        if (response.data) {
          const newRawResponse = await fetch(`${config.base_url}/api/auth/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const newResponse = await newRawResponse.json();

          if (newResponse.data) {
            let avatar = newResponse.data.avatar.split('/');
            avatar[5] = `${avatar[5]}/w_200,h_200,c_fill,r_max`;
            avatar = avatar.join('/');

            setAvatar(avatar);
            setMessage('Votre avatar a bien été modifié');
          }
        }
      }
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
          Modifier photo de profil
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: Dimensions.get('window').height / 50,
        }}
      >
        <Image
          style={{
            width: Dimensions.get('window').width / 3.3,
            height: Dimensions.get('window').width / 3.3,
            marginBottom: Dimensions.get('window').width / 9,
          }}
          source={{ uri: avatar }}
        />
        <CustomButton
          title='Parcourir mes photos'
          onPress={() => openImagePickerAsync()}
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

export default connect(mapStateToProps, null)(AvatarProfile);
