import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import StyleGuide from "../utils/StyleGuide";
import Header from "../headings/Header";
import Input from "../utils/form-elements/Input";
import Dropdown from "../utils/form-elements/Dropdown";
import List from "../lists/list";
import ListItem from "../lists/listItem";

const ResourceEquipment = (props) => {
  return (
    <View style={[StyleGuide.container, { alignItems: 'center' }]}>
      <Header title='Ressources' />
      {/* Navigation */}
      <View style={styles.btnGroup}>
        <Pressable onPress={() => props.changeResource('recipes')}>
          <Text style={[StyleGuide.typography.text3, styles.btnGroupText]}>
            Recettes
          </Text>
        </Pressable>
        <Pressable onPress={() => props.changeResource('ingredients')}>
          <Text style={[StyleGuide.typography.text3, styles.btnGroupText]}>
            Ingrédients
          </Text>
        </Pressable>
        <Pressable onPress={() => props.changeResource('equipments')}>
          <Text
            style={[
              StyleGuide.typography.text3,
              styles.btnGroupText,
              { textDecorationLine: 'underline' },
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
          <Input type='text' placeholder={'Pale Ale..'} />
        </View>
        <View style={{ position: 'relative', zIndex: 10 }}>
          <Text style={[StyleGuide.typography.text3, styles.filterLabel]}>
            Catégories
          </Text>
          <Dropdown title={'Bière blonde'} />
        </View>
        <View style={{ position: 'relative', zIndex: 9 }}>
          <Text style={[StyleGuide.typography.text3, styles.filterLabel]}>
            Marques
          </Text>
          <Dropdown title={'Bière blonde'} />
        </View>
        {/* Slider */}
      </View>
      {/* List */}
      <View style={{ width: 300, marginTop: 50 }}>
        <List>
          <ListItem title='test' content='test' btnType='next' />
          <ListItem title='test' content='test' btnType='next' />
          <ListItem title='test' content='test' btnType='next' />
          <ListItem title='test' content='test' btnType='next' />
          <ListItem title='test' content='test' btnType='next' />
          <ListItem title='test' content='test' btnType='next' />
          <ListItem title='test' content='test' btnType='next' />
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
  },
  filterLabel: {
    marginBottom: 5,
    color: StyleGuide.colors.gray,
  },
});

export default ResourceEquipment;
