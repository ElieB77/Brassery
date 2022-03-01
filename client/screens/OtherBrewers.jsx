import React, {useState} from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import MapView from 'react-native-maps';
import Header from '../components/headings/Header';
import Input from '../components/utils/form-elements/Input';
import CustomButton from '../components/CustomButton';
import StyleGuide from '../components/utils/StyleGuide';
import Geocode from "react-geocode";

const Location = () => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [adress, setAdress] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();


  Geocode.setApiKey("AIzaSyBYhX2VO2iJV1HVsw_hVc9bNpsrjjGp_dc");
  Geocode.setRegion("fr");
  Geocode.setLanguage("fr");

  Geocode.fromAddress(adress).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setLat(lat)
      setLon(lng)
    },
    (error) => {
      console.error(error);
    }
  );
  console.log(lat, lon);

  return (
    <View style={styles.formContainer}>
      <Header title='Autres brasseurs'/>
      <View style={styles.formInput}>
        <Input
            type='searchInput'
            placeholder='Ville, adresse...'
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modal}>
            <Text style={StyleGuide.typography.text3}>Positionner votre Brassery!</Text>
            </View>
            <View style={styles.modal}>
            <Input 
                type='text'
                placeholder='Votre adresse...'
                onChangeText={(val) => setAdress(val)}
            />  
            </View>  
            <View style={styles.modal}>
            <CustomButton 
                type='Convert' 
                title='Valider'
                onPress={() => setModalVisible(!modalVisible)}
            />
            </View>
          </View>
        </View>

      </Modal>
      <MapView style={styles.map}
          initialRegion={{
          latitude: 48.866667,  
          longitude: 2.333333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }} 
      />
      <View style={styles.button}>
        <CustomButton 
        type='Convert' 
        title='Me positionner'
        onPress={() => setModalVisible(true)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1, 
    justifyContent: 'center', 
    paddingTop: 45, 
    backgroundColor: '#FFFDFB'
  },
  formInput: {
    position: 'absolute', 
    top: 120, 
    zIndex: 10,
    left: '50%',
    marginLeft: -150
  },
  map: {
    flex: 1, 
    position: 'relative', 
    zIndex: 0
  },
  button: {
    position: 'absolute', 
    bottom: 35, 
    zIndex: 10, 
    left: '50%', 
    marginLeft: -100 
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#FFFDFB",
    borderRadius: 8,
    padding: 5,
    alignItems: "center",
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10
  },
  modal: {
    padding: 20,
  }
});

export default Location;
