import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import StyleGuide from "../utils/StyleGuide";
import Header from "../headings/Header";
import Input from "../utils/form-elements/Input";
import Dropdown from "../utils/form-elements/Dropdown";
import List from "../lists/list";
import ListItem from "../lists/listItem";

const ResourceEquipment = (props) => {
  const [categories, setCategories] = useState([]);
  const [brand, setBrand] = useState([]);
  const [materialList, setMaterialList] = useState([]);
  const [categoryValue, setCategoryValue] = useState(null);
  const [brandValue, setBrandValue] = useState(null);
  const [searchInput, setSearchInput] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const customFilterContainerStyle = modalVisible
    ? styles.filterContainer
    : styles.hideFilterContainer;

  useEffect(() => {
    AsyncStorage.getItem("user", function (error, data) {
      if (data != null) {
        async function loadData() {
          const rawResponse = await fetch(
            `${config.base_url}/api/materials?limit=60`,
            {
              headers: {
                Authorization: `Bearer ${data}`,
              },
            }
          );

          const response = await rawResponse.json();

          const newCategoriesTab = [];
          const newBrandsTab = [];
          const materialListArr = [];

          if (response.data) {
            response.data.map((item) => {
              newCategoriesTab.push(item.type);
              newBrandsTab.push(item.brand);
            });

            response.data.map((item, index) => {
              return materialListArr.push(
                <ListItem
                  key={index}
                  title={item.type}
                  content={item.description}
                  btnType="next"
                />
              );
            });
          }
          const uniqueCategoriesTab = [...new Set(newCategoriesTab)];
          const uniqueBrandsTab = [...new Set(newBrandsTab)];

          setCategories(uniqueCategoriesTab);
          setBrand(uniqueBrandsTab);
          setMaterialList(materialListArr);
        }
        loadData();
      }
    });
  }, []);

  const getCategory = (element) => {
    setCategoryValue(element);
    console.log(categoryValue);
  };

  const getBrand = (element) => {
    setBrandValue(element);
    console.log(brandValue);
  };

  const search = () => {
    let request;
    if (categoryValue && !brandValue) {
      request = `${config.base_url}/api/materials?type=${categoryValue}`;
    }
    if (brandValue && !categoryValue) {
      request = `${config.base_url}/api/materials?brand=${brandValue}`;
    }
    if (brandValue && categoryValue) {
      request = `${config.base_url}/api/materials?brand=${brandValue}&type=${categoryValue}`;
    }
    if (searchInput) {
      request = `${config.base_url}/api/materials?name=${searchInput}`;
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

          setMaterialList(searchTab);
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
          <Text style={[StyleGuide.typography.text3, styles.btnGroupText]}>
            Ingrédients
          </Text>
        </Pressable>
        <Pressable onPress={() => props.changeResource("equipments")}>
          <Text
            style={[
              StyleGuide.typography.text3,
              styles.btnGroupText,
              { textDecorationLine: "underline" },
            ]}
          >
            Matériels
          </Text>
        </Pressable>
      </View>
      {/* Filter Btn */}
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Text style={{ marginBottom: 15 }}>Parcourir les filtres</Text>
        <CustomButton
          type="add"
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
          <Input type="text" placeholder={"Pale Ale.."} />
        </View>
        <View style={{ position: "relative", zIndex: 10 }}>
          <Text style={[StyleGuide.typography.text3, styles.filterLabel]}>
            Catégories
          </Text>
          <Dropdown title={"Bière blonde"} />
        </View>
        <View style={{ position: "relative", zIndex: 9 }}>
          <Text style={[StyleGuide.typography.text3, styles.filterLabel]}>
            Marques
          </Text>
          <Dropdown title={"Bière blonde"} />
        </View>
      </View>
      {/* List */}
      <View style={{ width: 300, marginTop: 50 }}>
        <List>
          <ListItem title="test" content="test" btnType="next" />
          <ListItem title="test" content="test" btnType="next" />
          <ListItem title="test" content="test" btnType="next" />
          <ListItem title="test" content="test" btnType="next" />
          <ListItem title="test" content="test" btnType="next" />
          <ListItem title="test" content="test" btnType="next" />
          <ListItem title="test" content="test" btnType="next" />
        </List>
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

export default ResourceEquipment;
