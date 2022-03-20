import React from "react";
import { StyleSheet, View } from "react-native";
import StyleGuide from "../utils/StyleGuide";
import CustomButton from "../CustomButton";

export default function RecipeIngredients(props) {

    /* STYLES */
    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginBottom: 10,
            width: "100%",
            justifyContent: "space-around",
        },
        text: {
            color: StyleGuide.colors.white,
        },
        headline: {
            color: StyleGuide.colors.primary,
        },
        row: {
            marginVertical: 5,
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
        },
    });

    /* Inverse data flow functions */
    const openYeast = () => props.open("cultures");
    const openHop = () => props.open("hops");
    const openFermentable = () => props.open("fermentables");
    const openOtherIngredients = () => props.open("miscs");

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <CustomButton type="hops" onPress={openHop} />
                <CustomButton type="cultures" onPress={openYeast} />
            </View>
            <View style={styles.row}>
                <CustomButton type="fermentables" onPress={openFermentable} />
                <CustomButton type="miscs" onPress={openOtherIngredients} />
            </View>
        </View>
    );
}
