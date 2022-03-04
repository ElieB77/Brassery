import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import StyleGuide from '../../../components/utils/StyleGuide';
import * as ImagePicker from 'expo-image-picker';

import CustomButton from '../../../components/CustomButton';
import ProgressBar from '../../../components/utils/ProgressBar';
import Input from '../../../components/utils/form-elements/Input';

import Header from '../../../components/headings/Header';

const Step4 = ({
  navigation,
  updateAvatarUser,
  updateBrewedDescription,
  updateAddEmptyTab,
}) => {
  const [message, setMessage] = useState('');
  const [description, setDescription] = useState('');
  const [avatar, setAvatar] = useState(null);

  const openImagePickerAsync = async () => {
    setMessage('');
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted) {
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (!pickerResult.cancelled) {
        setAvatar(pickerResult.uri);
        setMessage('Votre photo a bien été ajouté');
      }
    }
  };

  const nextStep = () => {
    updateAvatarUser(avatar);
    updateBrewedDescription(description);
    updateAddEmptyTab();
    navigation.navigate('Step5');
  };

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
        <Text style={StyleGuide.typography.text3}>
          Rendez votre brassery attractive !
        </Text>
        <Text
          style={[
            StyleGuide.typography.text4,
            { marginTop: 100, alignSelf: 'flex-start', marginLeft: 60 },
          ]}
        >
          Ma photo de profil
        </Text>
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
        <Text
          style={[
            StyleGuide.typography.text4,
            { alignSelf: 'flex-start', marginTop: 100, marginLeft: 15 },
          ]}
        >
          Ajouter une description de ma brassery
        </Text>
        <Input
          type='textArea'
          onChangeText={(val) => setDescription(val)}
          value={description}
        />
      </View>
      <View style={{ alignSelf: 'flex-end', marginBottom: 35 }}>
        <CustomButton type='next' onPress={() => nextStep()} />
      </View>
      <ProgressBar pourcent={(4 * 100) / 6} />
    </View>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    updateAvatarUser: (avatar) => {
      dispatch({ type: 'updateAvatarUser', avatar });
    },
    updateBrewedDescription: (description) => {
      dispatch({ type: 'updateBrewedDescription', description });
    },
    updateAddEmptyTab: () => {
      dispatch({ type: 'updateAddEmptyTab' });
    },
  };
}

function mapStateToProps(state) {
  console.log(state);
  return { user: state.user };
}

export default connect(mapStateToProps, mapDispatchToProps)(Step4);
