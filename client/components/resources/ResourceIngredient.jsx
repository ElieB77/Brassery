import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import StyleGuide from "../../components/utils/StyleGuide";
import Header from "../../components/headings/Header";
import Input from "../../components/utils/form-elements/Input";
import Dropdown from "../../components/utils/form-elements/Dropdown";
import List from "../../components/lists/list";
import ListItem from "../../components/lists/listItem";
import config from "../../config/globalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../../components/CustomButton";

const ingredientCategory = ["fermentables", "hops", "cultures"];

const ResourceIngredient = (props) => {
  const [category, setCategory] = useState(null);
  const [ingredientList, setIngredientList] = useState([]);
  const [searchInput, setSearchInput] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const customFilterContainerStyle = modalVisible
    ? styles.filterContainer
    : styles.hideFilterContainer;

  console.log(searchInput);

  useEffect(() => {
    AsyncStorage.getItem("user", function (error, data) {
      if (data != null) {
        async function loadData() {
          const rawResponse = await fetch(
            `${config.base_url}/api/hops?limit=10`,
            {
              headers: {
                Authorization: `Bearer ${data}`,
              },
            }
          );

          const response = await rawResponse.json();
          console.log(response.data.name);

          let ingredientListArr = [];

          response.data.map((item, index) => {
            return ingredientListArr.push(
              <ListItem
                key={index}
                title={item.name}
                btnType="next"
                content={".."}
              />
            );
          });

          setIngredientList(ingredientListArr);
        }
        loadData();
      }
    });
  }, []);

  const getCategory = (element) => {
    setCategory(element);
  };

  const search = () => {
    let request;
    if (category === "fermentables") {
      request = `${config.base_url}/api/fermentables`;
    }
    if (category === "cultures") {
      request = `${config.base_url}/api/cultures`;
    }
    if (category === "hops") {
      request = `${config.base_url}/api/hops`;
    }
    if (searchInput && !category) {
      request = `${config.base_url}/api/hops?name=${searchInput}`;
    }
    if (searchInput && category === "fermentables") {
      request = `${config.base_url}/api/fermentables?name=${searchInput}`;
    }
    if (searchInput && category === "hops") {
      request = `${config.base_url}/api/hops?name=${searchInput}`;
    }
    if (searchInput && category === "cultures") {
      request = `${config.base_url}/api/cultures?name=${searchInput}`;
    }

    AsyncStorage.getItem("user", async function (error, data) {
      if (data != null) {
        const rawResponse = await fetch(request, {
          headers: {
            Authorization: `Bearer ${data}`,
          },
        });

        const response = await rawResponse.json();
        if (response.data) {
          const searchTab = [];

          response.data.map((item, index) => {
            if (category === "fermentables" || category === "cultures") {
              return searchTab.push(
                <ListItem
                  key={index}
                  title={item.name}
                  content={item.type}
                  btnType="next"
                />
              );
            } else {
              return searchTab.push(
                <ListItem
                  key={index}
                  title={item.name}
                  content={"..."}
                  btnType="next"
                />
              );
            }
          });

          setIngredientList(searchTab);
          setModalVisible(false);
        }
      }
    });
  };

  return (
    <View style={[StyleGuide.container, { alignItems: "center" }]}>
      <Header title="Ressources" />
      {/* Navigation */}
      <View style={styles.btnGroup}>
        <Pressable onPress={() => props.changeResource("recipes")}>
          <Text style={[StyleGuide.typography.text3, styles.btnGroupText]}>
            Recettes
          </Text>
        </Pressable>
        <Pressable onPress={() => props.changeResource("ingredients")}>
          <Text
            style={[
              StyleGuide.typography.text3,
              styles.btnGroupText,
              { textDecorationLine: "underline" },
            ]}
          >
            Ingrédients
          </Text>
        </Pressable>
        <Pressable onPress={() => props.changeResource("equipments")}>
          <Text style={[StyleGuide.typography.text3, styles.btnGroupText]}>
            Matériels
          </Text>
        </Pressable>
      </View>
      {/* Filter Btn */}
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <CustomButton
<<<<<<< HEAD
          type={modalVisible ? "minus" : "add" }
=======
          title="Parcourir les filtres"
>>>>>>> mes-brassins
          onPress={() =>
            modalVisible ? setModalVisible(false) : setModalVisible(true)
          }
        />
      </View>
      {/* Filter */}
      <View style={customFilterContainerStyle}>
        <View style={{ marginBottom: 15 }}>
          <Text style={[StyleGuide.typography.text3, styles.filterLabel]}>
            Recherche par mots clés
          </Text>

          <Input
            type="text"
            placeholder={"Amarillo.."}
            onChangeText={(val) => setSearchInput(val)}
          />
        </View>
        <View style={{ position: "relative", zIndex: 10 }}>
          <Text style={[StyleGuide.typography.text3, styles.filterLabel]}>
            Catégories
          </Text>
          <Dropdown
            title={"Choisissez une catégorie"}
            item={ingredientCategory}
            getValue={getCategory}
          />
        </View>
        {/* Slider */}
        <View style={{ alignItems: "flex-end", marginTop: 20 }}>
          <CustomButton type="search" onPress={() => search()} />
        </View>
      </View>
      <View style={styles.divider}></View>
      {/* List */}

      <View
        style={{
          width: 300,
          marginTop: 25,
          position: "relative",
          zIndex: -1,
        }}
      >
        <List>{ingredientList}</List>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  btnGroup: {
    width: 300,
    height: 46,
    backgroundColor: StyleGuide.colors.primary,
    borderRadius: StyleGuide.borderRadius,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btnGroupText: {
    color: StyleGuide.colors.secondary,
    borderStyle: "dashed",
  },
  filterContainer: {
    marginTop: 30,
    borderWidth: 0.5,
    borderColor: StyleGuide.colors.gray,
    padding: 15,
    borderRadius: StyleGuide.borderRadius,
  },
  hideFilterContainer: {
    display: "none",
  },
  filterLabel: {
    marginBottom: 5,
    color: StyleGuide.colors.gray,
  },
  divider: {
    marginTop: 40,
    width: 300,
    height: 1,
    backgroundColor: StyleGuide.colors.black,
    position: "relative",
    zIndex: -1,
  },
});

export default ResourceIngredient;
