import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import StyleGuide from "../utils/StyleGuide";
import CustomButton from "../CustomButton";
import List from "../lists/list";
import ListItem from "../lists/listItem";
import config from "../../config/globalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function IngredientsOverlay({
    ingredient,
    recipe,
    closeAction,
}) {
    /* CONTROLLERS */
    const processContent = (ingredientData) => {
        switch (ingredient) {
            case "hops":
                return `\nForme: ${ingredientData.form}\nAlpha Acide: ${ingredientData.alphaAcid}\nAnnée: ${ingredientData.year}\nOrigine: ${ingredientData.origin}`;
            case "cultures":
                return `\nForme: ${ingredientData.form}\nType: ${ingredientData.type}`;
            case "fermentables":
                return `\nType: ${ingredientData.type}\nCouleur: ${ingredientData.color}\nOrigine: ${ingredientData.origin}`;
            case "miscs":
                return `\nType: ${ingredientData.type}`;
        }
    };
    const processTitle = () => {
        switch (ingredient) {
            case "hops":
                return `Houblons`;
            case "cultures":
                return `Levures`;
            case "fermentables":
                return `Malts`;
            case "miscs":
                return `Autres ingrédients`;
        }
    };

    /* STATES */
    const [ingredientsList, setIngredientsList] = useState([]);

    /* OTHER HOOKS */
    useEffect(() => {
        AsyncStorage.getItem("user", async function (error, data) {
            const rawResponse = await fetch(
                `${config.base_url}/api/recipes/${recipe}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${data}`,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            const result = await rawResponse.json();
            setIngredientsList(result.ingredients[ingredient]);
        });
    }, []);

    /* STYLES */
    const styles = StyleSheet.create({
        container: {
            ...StyleSheet.absoluteFill,
            backgroundColor: "rgba(255,255,255,0.8)",
            justifyContent: "center",
            alignItems: "center",
        },
        overlay: {
            borderRadius: StyleGuide.borderRadius,
            backgroundColor: StyleGuide.colors.white,
            justifyContent: "center",
            alignItems: "center",
            maxHeight: 600,
        },
        titleContainer: {
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginVertical: 20,
            width: "80%",
        },
        subContainer: {
            marginVertical: 15,
        },
    });

    const allItems = ingredientsList?.map((element, i) => {
        return (
            <ListItem
                content={processContent(element)}
                title={element.name}
                key={i}
            />
        );
    });

    return (
        <View style={styles.container}>
            <View style={[styles.overlay, StyleGuide.shadowProp]}>
                <View style={styles.titleContainer}>
                    <CustomButton type="close" onPress={() => closeAction()} />
                    <Text style={StyleGuide.typography.text5}>
                        {processTitle()}
                    </Text>
                </View>
                <View style={styles.subContainer}>
                    <List>{allItems}</List>
                </View>
            </View>
        </View>
    );
}
