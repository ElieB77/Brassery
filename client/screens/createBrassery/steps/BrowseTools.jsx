<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
=======
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
>>>>>>> 21a6288396dfe1704d5a3de0dad8a0e4cc789fa7

import CustomButton from "../../../components/CustomButton";
import Input from "../../../components/utils/form-elements/Input";
import Dropdown from "../../../components/utils/form-elements/Dropdown";
import List from "../../../components/lists/list";
import ListItem from "../../../components/lists/listItem";

import config from "../../../config/globalVariables";

<<<<<<< HEAD
import AsyncStorage from "@react-native-async-storage/async-storage";

import StyleGuide from "../../../components/utils/StyleGuide";
=======
import StyleGuide from '../../../components/utils/StyleGuide';
>>>>>>> 21a6288396dfe1704d5a3de0dad8a0e4cc789fa7

const BrowseTools = ({ closeBrowseTool, token, updateMaterials }) => {
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [word, setWord] = useState(null);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [searchItems, setSearchItems] = useState([]);
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    AsyncStorage.getItem("user", function (error, data) {
      if (data != null) {
        async function loadData() {
          const rawResponse = await fetch(`${config.base_url}/api/materials`, {
            headers: {
              Authorization: `Bearer ${data}`,
            },
          });

          const response = await rawResponse.json();

          const newCategoriesTab = [];
          const newBrandsTab = [];

          if (response.data) {
            response.data.map((item) => {
              newCategoriesTab.push(item.type);
              newBrandsTab.push(item.brand);
            });
          }

          const uniqueCategoriesTab = [...new Set(newCategoriesTab)];
          const uniqueBrandsTab = [...new Set(newBrandsTab)];

          setCategories(uniqueCategoriesTab);
          setBrands(uniqueBrandsTab);
        }
        loadData();
=======
    async function loadData() {
      const rawResponse = await fetch(`${config.base_url}/api/materials`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const response = await rawResponse.json();

      const newCategoriesTab = [];
      const newBrandsTab = [];

      if (response.data) {
        response.data.map((item) => {
          newCategoriesTab.push(item.type);
          newBrandsTab.push(item.brand);
        });
>>>>>>> 21a6288396dfe1704d5a3de0dad8a0e4cc789fa7
      }
      const uniqueCategoriesTab = [...new Set(newCategoriesTab)];
      const uniqueBrandsTab = [...new Set(newBrandsTab)];

      setCategories(uniqueCategoriesTab);
      setBrands(uniqueBrandsTab);
    }
    loadData();
  }, []);

  const getCategory = (element) => {
    setCategory(element);
  };

  const getBrand = (element) => {
    setBrand(element);
  };

  const getMaterial = (element) => {
    if (materials.find((el) => el.title === element.title)) {
      let newMaterials = [...materials];
      newMaterials.filter((el) => el.title !== element.title);
      setMaterials(newMaterials);
    } else {
      setMaterials((prevState) => [...prevState, element]);
    }
  };

  // Add Arguments
  const search = async () => {
    setError('');
    let request;

    if (!word && !category && !brand) {
      request = `${config.base_url}/api/materials`;
    } else if (!word && brand && category) {
      request = `${config.base_url}/api/materials?brand=${brand}&type=${category}`;
    } else if (!word && !brand && category) {
      request = `${config.base_url}/api/materials?type=${category}`;
    } else if (!word && brand && !category) {
      request = `${config.base_url}/api/materials?brand=${brand}`;
    } else if (!brand && word && !category) {
      request = `${config.base_url}/api/materials?name=${word}`;
    } else if (!brand && word && category) {
      request = `${config.base_url}/api/materials?type=${category}&name=${word}`;
    } else {
      request = `${config.base_url}/api/materials?brand=${brand}&name=${word}`;
    }

<<<<<<< HEAD
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
                btnType="add"
              />
            );
          });

          setSearchItems(searchTab);
        }
=======
    const rawResponse = await fetch(request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await rawResponse.json();
    if (response.data) {
      const searchTab = [];
      if (response.data.length < 1) {
        setError("Aucun matériel n'a été trouvé");
>>>>>>> 21a6288396dfe1704d5a3de0dad8a0e4cc789fa7
      }
      response.data.map((item, index) => {
        return searchTab.push(
          <ListItem
            key={index}
            title={item.name}
            content={item.description}
            btnType='add'
            getValue={getMaterial}
          />
        );
      });

      setSearchItems(searchTab);
    }
  };

  const closeOverlay = () => {
    updateMaterials(materials);
    closeBrowseTool();
  };

  return (
    <View
      style={[
        styles.container,
        { width: 400, height: 1200, position: 'absolute', zIndex: 1000 },
      ]}
    >
      <View
        style={{ alignItems: "center", flexDirection: "row", paddingLeft: 45 }}
      >
<<<<<<< HEAD
        <CustomButton type="close" onPress={() => closeBrowseTool()} />
=======
        <CustomButton type='close' onPress={() => closeOverlay()} />
>>>>>>> 21a6288396dfe1704d5a3de0dad8a0e4cc789fa7
        <Text
          style={[
            StyleGuide.typography.text3,
            { width: 290, textAlign: "center" },
          ]}
        >
          Chercher mon matériel de brasseur
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ marginTop: 25 }}>
          <Text style={StyleGuide.typography.text4}>Mots clés</Text>
          <Input type="text" />
        </View>
        <View
          style={{
            marginTop: 10,
            width: 300,
            position: "relative",
            zIndex: 1000,
          }}
        >
          <Text style={StyleGuide.typography.text4}>Catégorie</Text>
          <Dropdown
            title="Choisir ma catégorie"
            item={categories}
            getValue={getCategory}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            width: 300,
            position: "relative",
            zIndex: 100,
          }}
        >
          <Text style={StyleGuide.typography.text4}>Marque</Text>
          <Dropdown
            title="Choisir ma marque"
            item={brands}
            getValue={getBrand}
          />
        </View>
        <View
          style={{
            marginTop: 25,
            width: 300,
            alignSelf: "center",
          }}
        >
          <View style={{ alignItems: "flex-end" }}>
            <CustomButton type="search" onPress={() => search()} />
          </View>
        </View>
        <View style={styles.divider}></View>

        {searchItems.length > 0 && (
          <View style={{ width: 300, alignItems: "center", marginTop: 25 }}>
            <List>{searchItems}</List>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    paddingTop: 10,
    position: "absolute",
    width: "100%",
    height: "105%",
    zIndex: 10,
    backgroundColor: StyleGuide.colors.white,
  },
  divider: {
    marginTop: 20,
    width: 300,
    height: 1,
    backgroundColor: StyleGuide.colors.black,
    position: "relative",
    zIndex: 10,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    updateMaterials: (materials) => {
      dispatch({ type: 'updateMaterials', materials });
    },
  };
}

function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseTools);