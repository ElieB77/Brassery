import StyleGuide from "../StyleGuide";
import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import RightChevron from "../icons/RightChevron";
import React, { useState } from "react";

const Dropdown = ({ item }) => {
  const [iconRotation, setIconRotation] = useState(false);
  let iconCustomStyle = iconRotation ? styles.iconRotate : styles.icon;
  let listItemStyle = iconRotation
    ? styles.listContainer
    : styles.hideListContainer;

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          iconRotation ? setIconRotation(false) : setIconRotation(true)
        }
      >
        <View style={styles.dropdown}>
          <Text style={StyleGuide.typography.text3}>Dropdown</Text>
        </View>
        <View style={iconCustomStyle}>
          <RightChevron />
        </View>
      </Pressable>

      <View style={listItemStyle}>
        <View style={styles.listItemContainer}>
          <Text style={[styles.listItem, StyleGuide.typography.text3]}>
            First Item
          </Text>
        </View>
        <View style={styles.hr} />
        <View style={styles.listItemContainer}>
          <Text style={[styles.listItem, StyleGuide.typography.text3]}>
            Second Item
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  dropdown: {
    backgroundColor: StyleGuide.colors.white,
    width: 300,
    borderRadius: StyleGuide.borderRadius,
    padding: 10,
    paddingLeft: 15,
    shadowColor: StyleGuide.shadowProp.shadowColor,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: StyleGuide.shadowProp.shadowOpacity,
    shadowRadius: StyleGuide.shadowProp.shadowRadius,
    marginBottom: 10,
  },
  icon: {
    position: "absolute",
    right: 0,
    paddingRight: 15,
    paddingBottom: 7,
    paddingTop: 7,
  },
  iconRotate: {
    position: "absolute",
    right: 0,
    paddingRight: 15,
    paddingBottom: 7,
    paddingTop: 7,
    transform: [
      { translateX: -5 },
      { translateY: 3 },
      { rotate: "90deg" },
      { translateX: 5 },
      { translateY: 5 },
    ],
  },
  listContainer: {
    borderRadius: StyleGuide.borderRadius,
    shadowColor: StyleGuide.shadowProp.shadowColor,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: StyleGuide.shadowProp.shadowOpacity,
    shadowRadius: StyleGuide.shadowProp.shadowRadius,
    borderWidth: 0.2,
  },
  hideListContainer: {
    opacity: 0,
  },
  listItemContainer: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  listItem: {
    textAlign: "center",
  },
  hr: {
    borderWidth: 0.5,
    borderColor: StyleGuide.colors.primary,
    width: 250,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default Dropdown;
