import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';

import Header from '../components/headings/Header';
import StyleGuide from '../components/utils/StyleGuide';
import CustomButton from '../components/CustomButton';

import AvatarProfile from './myBrewery/settings/AvatarProfile';
import UsernameProfile from './myBrewery/settings/UsernameProfile';
import EmailProfile from './myBrewery/settings/EmailProfile';
import DescriptionProfile from './myBrewery/settings/DescriptionProfile';
import PasswordProfile from './myBrewery/settings/PasswordProfile';

const Settings = () => {
  const [showAvatarProfile, setShowAvatarProfile] = useState(null);
  const [showUsernameProfile, setShowUsernameProfile] = useState(null);
  const [showDescription, setShowDescription] = useState(null);
  const [showEmailProfile, setShowEmailProfile] = useState(null);
  const [showPasswordProfile, setShowPasswordProfile] = useState(null);

  const closeAvatarProfile = () => {
    setShowAvatarProfile(false);
  };

  const closeUsernameProfile = () => {
    setShowUsernameProfile(false);
  };

  const closeEmailProfile = () => {
    setShowEmailProfile(false);
  };

  const closeDescriptionProfile = () => {
    setShowDescription(false);
  };

  const closePasswordProfile = () => {
    setShowPasswordProfile(false);
  };

  return (
    <View
      style={[
        StyleGuide.container,
        { alignItems: 'center', position: 'relative' },
      ]}
    >
      <Header title='paramètres' />
      {showAvatarProfile && <AvatarProfile closeOverlay={closeAvatarProfile} />}
      {showUsernameProfile && (
        <UsernameProfile closeOverlay={closeUsernameProfile} />
      )}
      {showEmailProfile && <EmailProfile closeOverlay={closeEmailProfile} />}
      {showDescription && (
        <DescriptionProfile closeOverlay={closeDescriptionProfile} />
      )}
      {showPasswordProfile && (
        <PasswordProfile closeOverlay={closePasswordProfile} />
      )}
      <CustomButton
        style={{ marginBottom: Dimensions.get('window').width / 10 }}
        title='Modifier ma photo de profil'
        onPress={() => setShowAvatarProfile(true)}
      />
      <CustomButton
        style={{ marginBottom: Dimensions.get('window').width / 10 }}
        title="Modifier mon num d'utilisateur "
        onPress={() => setShowUsernameProfile(true)}
      />
      <CustomButton
        style={{ marginBottom: Dimensions.get('window').width / 10 }}
        title='Modifier mon email'
        onPress={() => setShowEmailProfile(true)}
      />
      <CustomButton
        style={{ marginBottom: Dimensions.get('window').width / 10 }}
        title='Modifier mon mot de passe'
        onPress={() => setShowPasswordProfile(true)}
      />
      <CustomButton
        style={{ marginBottom: Dimensions.get('window').width / 10 }}
        title='Modifier ma description'
        onPress={() => setShowDescription(true)}
      />
    </View>
  );
};

export default Settings;
