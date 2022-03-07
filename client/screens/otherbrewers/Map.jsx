
import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import config from '../../config/globalVariables';
import Header from '../../components/headings/Header';
import Input from '../../components/utils/form-elements/Input';
import CustomButton from '../../components/CustomButton';
import StyleGuide from '../../components/utils/StyleGuide';
import Geocode from "react-geocode";


const Location = ({ navigation }) => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [adress, setAdress] = useState();
  const [ville, setVille] = useState('');
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [latVille, setLatVille] = useState(48.866667);
  const [lonVille, setLonVille] = useState(2.333333);
  const [userList, setUserList] = useState([])

  Geocode.setApiKey("AIzaSyBYhX2VO2iJV1HVsw_hVc9bNpsrjjGp_dc");
  Geocode.setRegion("fr");
  Geocode.setLanguage("fr");

  useEffect(()=>{
    async function findUser() {
      const reqFind = await fetch(`${config.base_url}/api/users`)
      const resultFind = await reqFind.json()
      setUserList(resultFind.data)
    }
    findUser()
  },[])

  const sendAdress = () => {
    Geocode.fromAddress(adress).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLat(lat)
        setLon(lng)
        setLatVille(lat)
        setLonVille(lng)
      },
      (error) => {
        console.error(error);
      }
    );
    setModalVisible(!modalVisible);
  }

  const sendVille = () => {
    Geocode.fromAddress(ville).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLatVille(lat)
        setLonVille(lng)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  var userMarker = userList.map((user, i) => {
    return<Marker 
        key={i}
        image={require('../../assets/marker2.png')}
        coordinate={{ latitude: user.localisation.lat, longitude: user.localisation.long }}
        onPress={() => navigation.navigate("UserPage")}
    />
  });

  return (

    <View style={styles.formContainer}>
      <Header title='Autres brasseurs'/>
      <View style={styles.formInput}>
        <Input
            type='searchInput'
            placeholder='Ville'
            onChangeText={(value) => setVille(value)}
            onPress={() => sendVille()}
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
                onPress={() => sendAdress()}
            />
            </View>
          </View>
        </View>
      </Modal>
      <MapView style={styles.map}
          region={{
            latitude: latVille,
            longitude: lonVille,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
      >
        {userMarker}
        {(lat && lon) && <Marker 
          coordinate={{latitude: lat, longitude: lon}}
          image={require('../../assets/marker.png')}
        />}
      </MapView>  
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
