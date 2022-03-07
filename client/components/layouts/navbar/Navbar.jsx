import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import StyleGuide from '../../utils/StyleGuide';

import MyBrewery from "../../../screens/MyBrewery";
import OtherBrewers from "../../../screens/otherbrewers/Map";
import Ressources from "../../../screens/ressources/Ressources";

import BrasserieIcon from "../../utils/icons/Brasserie";
import LocationIcon from "../../utils/icons/Location";
import ResourcesIcon from "../../utils/icons/Resources";

const Tab = createBottomTabNavigator();

const Navbar = ({ saveToken }) => {
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
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          shadowColor: '#7F5DF0',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name='Ma brasserie'
        component={MyBrewery}
        options={{
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <BrasserieIcon
                color={
                  focused
                    ? StyleGuide.colors.secondary
                    : StyleGuide.colors.primary
                }
                style={{ marginTop: 20, marginBottom: 10 }}
              />
              <Text
                style={[
                  StyleGuide.typography.textButton,
                  {
                    color: focused
                      ? StyleGuide.colors.secondary
                      : StyleGuide.colors.primary,
                  },
                ]}
              >
                Ma Brasserie
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='Autres brasseurs'
        component={OtherBrewers}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <LocationIcon
                color={
                  focused
                    ? StyleGuide.colors.secondary
                    : StyleGuide.colors.primary
                }
                style={{ marginTop: 20, marginBottom: 10 }}
              />
              <Text
                style={[
                  StyleGuide.typography.textButton,
                  {
                    color: focused
                      ? StyleGuide.colors.secondary
                      : StyleGuide.colors.primary,
                  },
                ]}
              >
                Autres brasseurs
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='Resources'
        component={Resources}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <ResourcesIcon
                color={
                  focused
                    ? StyleGuide.colors.secondary
                    : StyleGuide.colors.primary
                }
                style={{ marginTop: 20, marginBottom: 10 }}
              />
              <Text
                style={[
                  StyleGuide.typography.textButton,
                  {
                    color: focused
                      ? StyleGuide.colors.secondary
                      : StyleGuide.colors.primary,
                  },
                ]}
              >
                Resources
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    saveToken: (token) => {
      dispatch({ type: 'saveToken', token });
    },
  };
}

export default connect(null, mapDispatchToProps)(Navbar);
