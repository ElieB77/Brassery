import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import StyleGuide from "../../components/utils/StyleGuide";
import Header from "../../components/headings/Header";
import Input from "../../components/utils/form-elements/Input";
import Dropdown from "../../components/utils/form-elements/Dropdown";
import Slider from "@react-native-community/slider";
import List from "../../components/lists/list";
import ListItem from "../../components/lists/listItem";
import config from "../../config/globalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../../components/CustomButton";

const ResourceRecipe = (props) => {
  const [range, setRange] = useState("50%");
  const [bitternessRange, setBitternessRange] = useState("50%");
  const [recipesType, setRecipesType] = useState([]);
  const [recipeList, setRecipeList] = useState([]);
  const [getRecipeType, setGetRecipeType] = useState(null);
  const [searchInput, setSearchInput] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const customFilterContainerStyle = modalVisible
    ? styles.filterContainer
    : styles.hideFilterContainer;

  useEffect(() => {
    AsyncStorage.getItem("user", function (error, data) {
      if (data != null) {
        async function loadData() {
          const rawResponse = await fetch(`${config.base_url}/api/recipes`, {
            headers: {
              Authorization: `Bearer ${data}`,
            },
          });

          const response = await rawResponse.json();

          let newRecipesTab = [];
          let recipeListArr = [];

          if (response.data) {
            response.data.map((item) => {
              newRecipesTab.push(item.style);
            });

            response.data.map((item, index) => {
              return recipeListArr.push(
                <ListItem
                  key={index}
                  title={item.name}
                  content={item.description}
                  btnType="next"
                  onPress={() =>
                    props.navigation.navigate("Recipe", {
                      recipeId: item._id,
                    })
                  }
                />
              );
            });
          }

          setRecipeList(recipeListArr);

          const uniqueRecipesTab = [...new Set(newRecipesTab)];
          setRecipesType(uniqueRecipesTab);
        }
        loadData();
      }
    });
  }, []);

  const getRecipe = (element) => {
    setGetRecipeType(element);
    console.log(getRecipeType);
  };

  const search = () => {
    let request;
    if (getRecipeType) {
      request = `${config.base_url}/api/recipes?style=${getRecipeType}`;
    }
    if (searchInput) {
      request = `${config.base_url}/api/recipes?name=${searchInput}`;
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
            return searchTab.push(
              <ListItem
                key={index}
                title={item.name}
                content={item.description}
                btnType="next"
              />
            );
          });

          setRecipeList(searchTab);
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
          <Text
            style={[
              StyleGuide.typography.text3,
              styles.btnGroupText,
              { textDecorationLine: "underline" },
            ]}
          >
            Recettes
          </Text>
        </Pressable>
        <Pressable onPress={() => props.changeResource("ingredients")}>
          <Text style={[StyleGuide.typography.text3, styles.btnGroupText]}>
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
          title="Parcourir les filtres"
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
            placeholder={"Pale Ale.."}
            onChangeText={(val) => setSearchInput(val)}
          />
        </View>
        <View style={{ position: "relative", zIndex: 10 }}>
          <Text style={[StyleGuide.typography.text3, styles.filterLabel]}>
            Style de bière
          </Text>
          <Dropdown
            title={"Choisissez un style de bière "}
            item={recipesType}
            getValue={getRecipe}
          />
        </View>

        <View style={{ alignItems: "flex-end", marginTop: 10 }}>
          <CustomButton type="search" onPress={() => search()} />
        </View>
      </View>

      {/* List */}
      <View style={styles.divider}></View>

      <View
        style={{
          width: 300,
          alignItems: "center",
          marginTop: 25,
          zIndex: -1,
        }}
      >
        <List>{recipeList}</List>
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
export default ResourceRecipe;
