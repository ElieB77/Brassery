import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Recipe from "../../components/recipeElements/recipe";

const Batch = ({ route, navigation }) => {
    const { batchId } = route.params;

    return <Recipe readOnly={false} id={batchId} navigation={navigation} />;
};

export default Batch;
