import React, { useEffect } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from '../components/CustomButton';

const Home = ({ navigation, saveToken, token }) => {
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
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <CustomButton
        title='Accéder à ma brasserie'
        onPress={() => navigation.navigate('SignUp')}
      />

      <CustomButton
        title='Les brasseurs aux alentours'
        onPress={() => navigation.navigate('SignUp')}
      />

      <CustomButton
        title='Les ressources'
        onPress={() => navigation.navigate('Resources')}
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

function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
