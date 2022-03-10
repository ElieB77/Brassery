import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { connect } from "react-redux";

import AsyncStorage from "@react-native-async-storage/async-storage";

import config from "../config/globalVariables";

import CustomButton from "../components/CustomButton";
import StyleGuide from "../components/utils/StyleGuide";

const Home = ({ navigation, saveToken }) => {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    function saveTokenToReducer() {
      AsyncStorage.getItem("user", function (error, data) {
        if (data != null) {
          saveToken(data);

          async function loadData() {
            const rawResponse = await fetch(`${config.base_url}/api/auth/me`, {
              headers: {
                Authorization: `Bearer ${data}`,
              },
            });
            const response = await rawResponse.json();

            if (response.data) {
              let avatar = response.data.avatar.split("/");
              avatar[5] = `${avatar[5]}/w_200,h_200,c_fill,r_max`;
              avatar = avatar.join("/");

              setAvatar(avatar);
            }
          }
          loadData();
        }
      });
    }
    saveTokenToReducer();
  });

  return (
    <View style={StyleGuide.container}>
      <View
        style={{
          marginBottom: 25,
          flexDirection: "row",
          alignItems: "center",
          marginLeft: Dimensions.get("window").width / 4.5,
        }}
      >
        <Text
          style={[
            StyleGuide.typography.text1,
            { marginRight: Dimensions.get("window").width / 10 },
          ]}
        >
          Ma brasserie
        </Text>
        <CustomButton
          type="settings"
          onPress={() => navigation.navigate("Settings")}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            width: Dimensions.get("window").width / 3.3,
            height: Dimensions.get("window").width / 3.3,
            marginBottom: Dimensions.get("window").width / 9,
          }}
          source={{ uri: avatar }}
        />
        <View
          style={{
            marginBottom: Dimensions.get("window").width / 15,
          }}
        >
          <CustomButton
            title="Mes brassins en cours"
            onPress={() => navigation.navigate("MyBatches")}
          />
        </View>
        <View
          style={{
            marginBottom: Dimensions.get("window").width / 15,
          }}
        >
          <CustomButton
            title="Mes bières"
            onPress={() => navigation.navigate("BeerLiked")}
          />
        </View>
        <View
          style={{
            marginBottom: Dimensions.get("window").width / 15,
          }}
        >
          <CustomButton
            title="Mes recettes likées"
            onPress={() => navigation.navigate("BeerLiked")}
          />
        </View>
        <View
          style={{
            marginBottom: Dimensions.get("window").width / 15,
          }}
        >
          <CustomButton
            title="Mon installation"
            onPress={() =>
              navigation.navigate("Batch", {
                batchId: "6225eaab94c32d42219a7917",
              })
            }
          />
        </View>
        <View
          style={{
            marginBottom: Dimensions.get("window").width / 12,
          }}
        >
          <CustomButton
            title="Mes messages"
            onPress={() =>
              navigation.navigate("Recipe", {
                recipeId: "6221fc055223412400e58d53",
              })
            }
          />
        </View>
        <View
          style={{
            marginBottom: Dimensions.get("window").width / 15,
          }}
        >
          <CustomButton
            type="brasser"
            onPress={() =>
              navigation.navigate("Batch", {
                batchId: "6225eaab94c32d42219a7917",
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    saveToken: (token) => {
      dispatch({ type: "addToken", token });
    },
  };
}

function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
