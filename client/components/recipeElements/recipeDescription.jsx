import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import StyleGuide from "../utils/StyleGuide";

export default function RecipeDescription(props) {
    /* STYLES */
    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 20,
            paddingVertical: 10,
            textAlign: "left",
            borderColor: StyleGuide.colors.secondary,
            borderRadius: StyleGuide.borderRadius,
            backgroundColor: StyleGuide.colors.secondary,
            elevation: 10,
            marginBottom: 30,
            width:"100%"
        },
        text: {
            color:StyleGuide.colors.white
        },
        headline: {
            color:StyleGuide.colors.primary
        }
    });

    return (
        <View style={styles.container}>
            <Text style={[StyleGuide.typography.text1,styles.headline]}>{props.title}</Text>
            <Text style={[StyleGuide.typography.text3,styles.text]}>{props.content}</Text>
        </View>
    );
}
