import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import StyleGuide from '../../../components/utils/StyleGuide';

import CustomButton from '../../../components/CustomButton';
import ProgressBar from '../../../components/utils/ProgressBar';

import Header from '../../../components/headings/Header';

import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Next from '../../../components/utils/icons/Next';

const Step3 = ({ navigation, updateLocalisationUser }) => {
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [currentLongitude, setCurrentLongitude] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
        enableHighAccuracy: true,
        timeInterval: 5,
      });

      mapRef.current.animateCamera({
        center: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      });

      Location.watchPositionAsync({ distanceInterval: 20 }, (loc) => {
        setCurrentLatitude(loc.coords.latitude);
        setCurrentLongitude(loc.coords.longitude);
      });
    })();
  }, []);

  const mapRef = useRef(null);

  const nextStep = () => {
    const localisation = {
      lat: currentLatitude,
      long: currentLongitude,
    };
    updateLocalisationUser(localisation);
    navigation.navigate('Step4');
  };

  return (
    <View style={[StyleGuide.container, { alignItems: 'center' }]}>
      <Header title='Création brasserie' />
      <View
        style={{
          height: 570,
          marginBottom: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={[StyleGuide.typography.text3, { textAlign: 'center' }]}>
          Pour rencontrer d’autres brasseurs, nous avons besoin de votre
          position.
        </Text>
        <View style={{ marginTop: 40 }}>
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={{
              latitude: 48.499998, // pour centrer la carte
              longitude: 2.499998,
              latitudeDelta: 0.03358723958820065, // le rayon à afficher à partir du centre
              longitudeDelta: 0.04250270688370961,
            }}
          >
            <Marker
              coordinate={{
                latitude: currentLatitude,
                longitude: currentLongitude,
              }}
              pinColor={StyleGuide.colors.secondary}
            />
          </MapView>
        </View>
      </View>
      <View style={{ alignSelf: 'flex-end', marginBottom: 35 }}>
        <CustomButton type='next' onPress={() => nextStep()} />
      </View>
      <ProgressBar pourcent={(3 * 100) / 6} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: 330,
    height: 480,
    borderRadius: 8,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    updateLocalisationUser: (localisation) => {
      dispatch({ type: 'updateLocalisationUser', localisation });
    },
  };
}

function mapStateToProps(state) {
  console.log(state);
  return { user: state.user };
}

export default connect(mapStateToProps, mapDispatchToProps)(Step3);
