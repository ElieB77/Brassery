import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import StyleGuide from "../../utils/StyleGuide";

import MyBrewery from "../../../screens/MyBrewery";
import OtherBrewers from "../../../screens/OtherBrewers";
import Ressources from "../../../screens/ressources/Ressources";

import BrasserieIcon from "../../utils/icons/Brasserie";
import LocationIcon from "../../utils/icons/Location";
import RessourcesIcon from "../../utils/icons/Ressources";

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          shadowColor: "#7F5DF0",
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
        name="Ma brasserie"
        component={MyBrewery}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
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
        name="Autres brasseurs"
        component={OtherBrewers}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
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
        name="Ressources"
        component={Ressources}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <RessourcesIcon
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
                Ressources
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navbar;
