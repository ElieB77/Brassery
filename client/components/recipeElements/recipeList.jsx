import React from "react";
import { StyleSheet, View } from "react-native";

export default function RecipeList(props) {
    
    /* STYLES */
    const styles = StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            marginBottom: 70,
            marginTop: 10,
        },
    });

    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}
