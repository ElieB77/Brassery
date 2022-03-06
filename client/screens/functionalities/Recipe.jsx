import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Recipe from "../../components/recipeElements/recipe";
import CustomButton from "../../components/CustomButton";

const Recette = ({ route, navigation }) => {
    const { recipeId } = route.params;

    return <Recipe readOnly={true} id={recipeId} navigation={navigation} />;
};

export default Recette;
