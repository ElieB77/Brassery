import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Recipe from "../../components/recipeElements/recipe";
import CustomButton from "../../components/CustomButton";

const Recette = ({ route, navigation }) => {
    const { recipeId } = route.params;

    return (
        <View>
            <Recipe readOnly={true} id={recipeId} />
            <View
                style={{
                    position: "absolute",
                    top: "80%",
                    left: "60%",
                }}
            >
                <CustomButton
                    type="brasser"
                    onPress={() =>
                        navigation.navigate("Batch", {
                            batchId: "6221fc885223412400e58d54",
                        })
                    }
                />
            </View>
        </View>
    );
};

export default Recette;
