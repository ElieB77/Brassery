import React, { useEffect } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from '../components/CustomButton';

const Home = ({ navigation, saveToken }) => {
  useEffect(() => {
    function saveTokenToReducer() {
      AsyncStorage.getItem('user', function (error, data) {
        if (data != null) {
          saveToken(data);
        }
      });
    }
    saveTokenToReducer();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <CustomButton
        title='Aller sur Sign In'
        onPress={() => navigation.navigate('SignIn')}
      />
      <CustomButton
        title='Aller sur Sign Up'
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    saveToken: (token) => {
      dispatch({ type: 'addToken', token });
    },
  };
}

export default connect(null, mapDispatchToProps)(Home);
