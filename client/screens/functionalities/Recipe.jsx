import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Recipe from "../../components/recipeElements/recipe";

const Recette = ({ route }) => {
    const { recipeId } = route.params;

    return <Recipe readOnly={true} id={recipeId} />;
};

export default Recette;
