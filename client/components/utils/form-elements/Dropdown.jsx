import StyleGuide from "../StyleGuide";
import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native';
import RightChevron from '../icons/RightChevron';
import React, { useState } from 'react';

const Dropdown = ({ item, onPress, getValue, title }) => {
  const [val, setVal] = useState(title ? title : 'Dropdown');
  const [isGray, setIsGray] = useState(true);
  const [iconRotation, setIconRotation] = useState(false);
  let iconCustomStyle = iconRotation ? styles.iconRotate : styles.icon;
  let listItemStyle = iconRotation
    ? styles.listContainer
    : styles.hideListContainer;

  item = item || [];

  const handleClick = (element) => {
    setVal(element);
    setIsGray(false);
    setIconRotation(false);

    if (getValue) getValue(element);
  };

  const itemTab = item.map((element, index) => {
    if (index !== item.length - 1) {
      return (
        <View key={element}>
          <View style={styles.listItemContainer}>
            <Text
              style={[styles.listItem, StyleGuide.typography.text3]}
              value={element}
              onPress={() => handleClick(element)}
            >
              {element}
            </Text>
          </View>
          <View style={styles.hr} />
        </View>
      );
    }

    return (
      <View key={element} style={styles.listItemContainer}>
        <Text
          style={[styles.listItem, StyleGuide.typography.text3]}
          value={element}
          onPress={() => handleClick(element)}
        >
          {element}
        </Text>
      </View>
    );
  });

  return (
    <View style={[styles.container, { position: 'relative' }]}>
      <Pressable
        onPress={() =>
          iconRotation ? setIconRotation(false) : setIconRotation(true)
        }
      >
        <View style={styles.dropdown}>
          <Text
            style={[
              StyleGuide.typography.text3,
              isGray && {
                color: StyleGuide.typography.text3,
              },
            ]}
          >
            {val}
          </Text>
        </View>
        <View style={iconCustomStyle}>
          <RightChevron />
        </View>
      </Pressable>

      {iconRotation && (
        <View
          style={[
            listItemStyle,
            {
              minHeight: 50,
              maxHeight: 300,
              position: 'absolute',
              backgroundColor: StyleGuide.colors.white,
              width: '100%',
              top: 60,
            },
          ]}
        >
          <ScrollView>{itemTab}</ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dropdown: {
    backgroundColor: StyleGuide.colors.white,
    width: 300,
    height: 45,
    justifyContent: 'center',
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
    position: 'absolute',
    right: 0,
    paddingRight: 15,
    paddingBottom: 7,
    paddingTop: 12,
  },
  iconRotate: {
    position: 'absolute',
    right: 0,
    paddingRight: 15,
    paddingBottom: 12,
    paddingTop: 12,
    transform: [
      { translateX: -5 },
      { translateY: 3 },
      { rotate: '90deg' },
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
    backgroundColor: StyleGuide.colors.white,
    borderWidth: 0.2,
  },
  listItemContainer: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  listItem: {
    textAlign: 'center',
  },
  hr: {
    borderWidth: 0.5,
    borderColor: StyleGuide.colors.primary,
    width: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Dropdown;
