import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, Modal } from "react-native";
import StyleGuide from "../../components/utils/StyleGuide";
import config from "../../config/globalVariables";
import ListItem from "../../components/lists/listItem";
import CustomButton from "../../components/CustomButton";
import Header from "../../components/headings/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserPage = ({ route }) => {
  const { userId } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [userBio, setUserBio] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [userName, setUserName] = useState();
  const [userInstallation, setUserInstallation] = useState({ data: [] });
  const [userBatches, setUserBatches] = useState({ data: [] });
  const [userRecipes, setUserRecipes] = useState([]);
  const [recipesId, setRecipesId] = useState([]);

  useEffect(() => {
    async function findUser() {
      const reqFind = await fetch(`${config.base_url}/api/users?_id=${userId}`);
      const resultFind = await reqFind.json();
      setUserBio(resultFind.data[0].brewDescription);
      setUserAvatar(resultFind.data[0].avatar);
      setUserName(resultFind.data[0].username);

      AsyncStorage.getItem("user", function (error, data) {
        if (data != null) {
          async function loadData() {
            // Find batches
            const rawResponse = await fetch(
              `${config.base_url}/api/batches/findbatches`,
              {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${data}`,
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `userId=${userId}`,
              }
            );
            const response = await rawResponse.json();
            setUserBatches(response);

            // Get recipes id from batches
            var id = response.data.map((user, i) => {
              return user.recipe;
            });
            setRecipesId(id);

            // Get recipes' data
            let temp = [];
            for (var i = 0; i < id.length; i++) {
              async function loadData2() {
                const rawResponse2 = await fetch(
                  `${config.base_url}/api/recipes/${id[i]}`,
                  {
                    method: "GET",
                    headers: {
                      Authorization: `Bearer ${data}`,
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                  }
                );
                const response2 = await rawResponse2.json();
                temp.push(response2);
              }
              loadData2();
            }
            setUserRecipes(temp);
          }
          loadData();
        }
      });
    }
    // Run main function of useEffect
    findUser();
  }, [userId]);

  useEffect(() => {
    AsyncStorage.getItem("user", function (error, data) {
      if (data != null) {
        async function loadData() {
          const rawResponse = await fetch(
            `${config.base_url}/api/materials/findmaterialbyid`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${data}`,
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: `userId=${userId}`,
            }
          );
          const response = await rawResponse.json();
          setUserInstallation(response);
        }
        loadData();
      }
    });
  }, [modalVisible]);

  var userMaterial = userInstallation.data.map((user, i) => {
    return <ListItem key={i} title={user.type} content={user.name} />;
  });
  var userRecipesList = userRecipes.map((user, i) => {
    return <ListItem key={i} title={user.name} content={user.description} />;
  });

  return (
    <View style={styles.formContainer}>
      <View style={{ paddingLeft: 25 }}>
        <Header title={`${userName} Brassery`} />
      </View>
      <View>
        <Image
          style={{
            width: Dimensions.get("window").width / 2,
            height: Dimensions.get("window").width / 2,
            marginBottom: Dimensions.get("window").width / 10,
            borderRadius: 8,
          }}
          source={{ uri: userAvatar }}
        />
      </View>
      <View style={styles.container}>
        <Text style={[StyleGuide.typography.text1, styles.headline]}>Bio</Text>
        <Text style={[StyleGuide.typography.text3, styles.text]}>
          {userBio}
        </Text>
      </View>
      <View
        style={{
          marginBottom: Dimensions.get("window").width / 10,
        }}
      >
        <CustomButton
          title="Mon installation"
          onPress={() => setModalVisible(true)}
        />
      </View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modal}>{userMaterial}</View>
            <View style={styles.modal}>
              <CustomButton
                type="Convert"
                title="Fermer"
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          marginBottom: Dimensions.get("window").width / 10,
        }}
      >
        <CustomButton
          title="Mes dernières recettes"
          onPress={() => setModal2Visible(true)}
        />
        <Modal
          transparent={true}
          animationType="slide"
          visible={modal2Visible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModal2Visible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modal}>{userRecipesList}</View>
              <View style={styles.modal}>
                <CustomButton
                  type="Convert"
                  title="Fermer"
                  onPress={() => setModal2Visible(false)}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.button}>
        <CustomButton type="Convert" title="Envoyer un message" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 45,
    backgroundColor: "#FFFDFB",
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: "left",
    borderColor: StyleGuide.colors.secondary,
    borderRadius: StyleGuide.borderRadius,
    backgroundColor: StyleGuide.colors.secondary,
    elevation: 10,
    marginBottom: 40,
    width: "90%",
  },
  text: {
    color: StyleGuide.colors.white,
  },
  headline: {
    color: StyleGuide.colors.primary,
  },
  button: {
    position: "absolute",
    bottom: 50,
    zIndex: 10,
    left: "65%",
    marginLeft: -100,
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
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
  },
  modal: {
    padding: 20,
  },
});

export default UserPage;
