import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import StyleGuide from "../components/utils/StyleGuide";
import Header from "../components/headings/Header";
import Input from "../components/utils/form-elements/Input";
import Dropdown from "../components/utils/form-elements/Dropdown";
import Slider from "@react-native-community/slider";
import List from "../components/lists/list";
import ListItem from "../components/lists/listItem";

let beerType = [
  "Bière blonde",
  "Bière blanche",
  "Bière ambrée ou rousse",
  "Bière brune",
];

const Ressources = () => {
  const [range, setRange] = useState("50%");
  const [bitternessRange, setBitternessRange] = useState("50%");
  const [resourceType, setResourceType] = useState("recipes");

  useEffect(() => {
    console.log(resourceType);
  }, [resourceType]);

  if (resourceType === "recipes") {
    return (
      <View style={[StyleGuide.container, { alignItems: "center" }]}>
        <Header title="Ressources" />
        {/* Navigation */}
        <View style={styles.btnGroup}>
          <Pressable onPress={() => setResourceType("recipes")}>
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
          <Pressable onPress={() => setResourceType("ingredients")}>
            <Text style={[StyleGuide.typography.text3, styles.btnGroupText]}>
              Ingrédients
            </Text>
          </Pressable>
          <Pressable onPress={() => setResourceType("equipments")}>
            <Text style={[StyleGuide.typography.text3, styles.btnGroupText]}>
              Matériels
            </Text>
          </Pressable>
        </View>
        {/* Filter */}
        <View style={styles.filterContainer}>
          <View style={{ marginBottom: 15 }}>
            <Text style={[StyleGuide.typography.text3, styles.filterLabel]}>
              Recherche par mots clés
            </Text>
            <Input type="text" placeholder={"Pale Ale.."} />
          </View>
          <View>
            <Text style={[StyleGuide.typography.text3, styles.filterLabel]}>
              Type de bière
            </Text>
            <Dropdown placeholder={"Bière blonde"} item={beerType} />
          </View>
          <View style={{ marginTop: -180 }}>
            <Text style={[StyleGuide.typography.text3, styles.filterLabel]}>
              Inclus les ingrédients suivants
            </Text>
            <Dropdown placeholder={"Bière blonde"} item={beerType} />
          </View>
          {/* Slider */}
          <View style={{ marginTop: -150 }}>
            <View>
              <Text style={[StyleGuide.typography.text3, styles.filterLabel]}>
                Couleur de la bière
              </Text>
              <Slider
                style={{ width: 300 }}
                minimumValue={0}
                maximumValue={1}
                value={0.5}
                minimumTrackTintColor={StyleGuide.colors.secondary}
                maximumTrackTintColor="#000000"
                thumbTintColor={StyleGuide.colors.primary}
                onValueChange={(value) =>
                  setRange(Math.floor(value * 100) + "%")
                }
              />
              <Text style={{ textAlign: "center" }}>{range}</Text>
            </View>
            <View>
              <Text style={[StyleGuide.typography.text3, styles.filterLabel]}>
                Amertume de la bière
              </Text>
              <Slider
                style={{ width: 300 }}
                minimumValue={0}
                maximumValue={1}
                value={0.5}
                minimumTrackTintColor={StyleGuide.colors.secondary}
                maximumTrackTintColor="#000000"
                thumbTintColor={StyleGuide.colors.primary}
                onValueChange={(value) =>
                  setBitternessRange(Math.floor(value * 100) + "%")
                }
              />
              <Text style={{ textAlign: "center" }}>{bitternessRange}</Text>
            </View>
          </View>
        </View>
        {/* List */}
        <View style={{ width: 300, marginTop: 50 }}>
          <List>
            <ListItem title="test" content="test" btnType="next" />
            <ListItem title="test" content="test" btnType="next" />
          </List>
        </View>
      </View>
    );
  } else if (resourceType === "ingredients") {
    return (
      <View style={[StyleGuide.container, { alignItems: "center" }]}>
        <Header title="Ressources" />
        {/* Navigation */}
        <View style={styles.btnGroup}>
          <Pressable onPress={() => setResourceType("recipes")}>
            <Text style={[StyleGuide.typography.text3, styles.btnGroupText]}>
              Recettes
            </Text>
          </Pressable>
          <Pressable onPress={() => setResourceType("ingredients")}>
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
          <Pressable onPress={() => setResourceType("equipments")}>
            <Text style={[StyleGuide.typography.text3, styles.btnGroupText]}>
              Matériels
            </Text>
          </Pressable>
        </View>
        {/* Filter */}
        <View style={styles.filterContainer}>
          <View style={{ marginBottom: 15 }}>
            <Text style={[StyleGuide.typography.text3, styles.filterLabel]}>
              Recherche par mots clés
            </Text>
            <Input type="text" placeholder={"Pale Ale.."} />
          </View>
          <View>
            <Text style={[StyleGuide.typography.text3, styles.filterLabel]}>
              Catégories
            </Text>
            <Dropdown placeholder={"Bière blonde"} item={beerType} />
          </View>
          {/* Slider */}
        </View>
        {/* List */}
        <View style={{ width: 300, marginTop: -150 }}>
          <List>
            <ListItem title="test" content="test" btnType="next" />
            <ListItem title="test" content="test" btnType="next" />
          </List>
        </View>
      </View>
    );
  } else if (resourceType === "equipments") {
    return (
      <View style={[StyleGuide.container, { alignItems: "center" }]}>
        <Header title="Ressources" />
        {/* Navigation */}
        <View style={styles.btnGroup}>
          <Pressable onPress={() => setResourceType("recipes")}>
            <Text style={[StyleGuide.typography.text3, styles.btnGroupText]}>
              Recettes
            </Text>
          </Pressable>
          <Pressable onPress={() => setResourceType("ingredients")}>
            <Text style={[StyleGuide.typography.text3, styles.btnGroupText]}>
              Ingrédients
            </Text>
          </Pressable>
          <Pressable onPress={() => setResourceType("equipments")}>
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
        {/* Filter */}
        <View style={styles.filterContainer}>
          <View style={{ marginBottom: 15 }}>
            <Text style={[StyleGuide.typography.text3, styles.filterLabel]}>
              Recherche par mots clés
            </Text>
            <Input type="text" placeholder={"Pale Ale.."} />
          </View>
          <View>
            <Text style={[StyleGuide.typography.text3, styles.filterLabel]}>
              Catégories
            </Text>
            <Dropdown placeholder={"Bière blonde"} item={beerType} />
          </View>
          <View style={{ marginTop: -180 }}>
            <Text style={[StyleGuide.typography.text3, styles.filterLabel]}>
              Marques
            </Text>
            <Dropdown placeholder={"Bière blonde"} item={beerType} />
          </View>
          {/* Slider */}
        </View>
        {/* List */}
        <View style={{ width: 300, marginTop: -150 }}>
          <List>
            <ListItem title="test" content="test" btnType="next" />
            <ListItem title="test" content="test" btnType="next" />
          </List>
        </View>
      </View>
    );
  }
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
    borderColor: "rgba(255,0,0,1)",
    borderWidth: 0,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderStyle: "dashed",
  },
  filterContainer: {
    marginTop: 30,
  },
  filterLabel: {
    marginBottom: 5,
    color: StyleGuide.colors.gray,
  },
});

export default Ressources;
