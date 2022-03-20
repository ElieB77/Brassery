import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import StyleGuide from '../../../components/utils/StyleGuide';
import * as ImagePicker from 'expo-image-picker';

import CustomButton from '../../../components/CustomButton';
import ProgressBar from '../../../components/utils/ProgressBar';
import Input from '../../../components/utils/form-elements/Input';
import List from '../../../components/lists/list';
import ListItem from '../../../components/lists/listItem';

import Header from '../../../components/headings/Header';
import BrowseTools from './BrowseTools';

const Step5 = ({
  navigation,
  updateInstallationDescription,
  updateInstallationPhoto,
  user,
}) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showTools, setShowTools] = useState(false);
  const [installationDescription, setInstallationDescription] = useState('');
  const [picture, setPicture] = useState(null);
  const [materials, setMaterials] = useState([]);

  const openImagePickerAsync = async () => {
    setMessage('');
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted) {
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (!pickerResult.cancelled) {
        setPicture(pickerResult.uri);
        setMessage('Votre photo a bien été ajouté');
      }
    }
  };

  const showToolsOverlay = () => {
    setShowTools(false);
  };

  const nextStep = () => {
    updateInstallationPhoto(picture);
    updateInstallationDescription(installationDescription);
    navigation.navigate('Step6');
  };

  useEffect(() => {
    setMaterials(user.materials);
  }, [user.materials]);

  return (
    <View
      style={[
        StyleGuide.container,
        { alignItems: 'center', position: 'relative' },
      ]}
    >
      {showTools && <BrowseTools closeBrowseTool={showToolsOverlay} />}
      <ScrollView>
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
              StyleGuide.typography.text3,
              { textAlign: 'center', marginBottom: 50 },
            ]}
          >
            Indiquer aux autres utilisateurs les outils que vous utilisez pour
            brasser
          </Text>
          <Text
            style={[
              StyleGuide.typography.text4,
              { alignSelf: 'flex-start', marginLeft: 15 },
            ]}
          >
            Décrire mon installation
          </Text>
          <View style={{ marginBottom: 45 }}>
            <Input
              type='textArea'
              onChangeText={(val) => setInstallationDescription(val)}
              value={installationDescription}
            />
          </View>
          <View style={{ marginBottom: 45 }}>
            <Text style={StyleGuide.typography.text4}>Ajouter une photo</Text>
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
          <View style>
            <Text style={StyleGuide.typography.text4}>
              Ajouter un outils de brassage
            </Text>
            <CustomButton
              title='Parcourir les outils'
              onPress={() => setShowTools(true)}
            />
          </View>
        </View>
        <View>
          <List>
            {user.materials.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  reverseColor={true}
                />
              );
            })}
          </List>
        </View>
        <View style={{ alignSelf: 'flex-end', marginBottom: 35 }}>
          <CustomButton type='next' onPress={() => nextStep()} />
        </View>
        <ProgressBar pourcent={(5 * 100) / 6} />
      </ScrollView>
    </View>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    updateInstallationDescription: (installationDescription) => {
      dispatch({
        type: 'updateInstallationDescription',
        installationDescription,
      });
    },
    updateInstallationPhoto: (photo) => {
      dispatch({ type: 'updateInstallationPhoto', photo });
    },
  };
}

function mapStateToProps(state) {
  console.log(state);
  return { user: state.user };
}

export default connect(mapStateToProps, mapDispatchToProps)(Step5);
