import React, { useState } from 'react';
import { View, Text } from 'react-native';
import StyleGuide from '../../../components/utils/StyleGuide';
import * as ImagePicker from 'expo-image-picker';

import CustomButton from '../../../components/CustomButton';
import ProgressBar from '../../../components/utils/ProgressBar';
import Input from '../../../components/utils/form-elements/Input';

import Header from '../../../components/headings/Header';
import BrowseTools from './BrowseTools';

const Step5 = ({ navigation }) => {
  const [showTools, setShowTools] = useState(false);
  const openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted) {
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (!pickerResult.cancelled) {
        console.log(pickerResult);
      }
    }
  };

  const showToolsOverlay = () => {
    setShowTools(false);
  };

  return (
    <View
      style={[
        StyleGuide.container,
        { alignItems: 'center', position: 'relative' },
      ]}
    >
      {showTools && <BrowseTools closeBrowseTool={showToolsOverlay} />}
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
          <Input type='textArea' />
        </View>
        <View style={{ marginBottom: 45 }}>
          <Text style={StyleGuide.typography.text4}>Ajouter une photo</Text>
          <CustomButton
            title='Parcourir mes photos'
            onPress={() => openImagePickerAsync()}
          />
        </View>
        <View>
          <Text style={StyleGuide.typography.text4}>
            Ajouter un outils de brassage
          </Text>
          <CustomButton
            title='Parcourir les outils'
            onPress={() => setShowTools(true)}
          />
        </View>
      </View>
      <View style={{ alignSelf: 'flex-end', marginBottom: 35 }}>
        <CustomButton
          type='next'
          onPress={() => navigation.navigate('Step6')}
        />
      </View>
      <ProgressBar pourcent={(5 * 100) / 6} />
    </View>
  );
};

export default Step5;
