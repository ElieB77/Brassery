import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Recipe(props) {
    /* STYLES */
    const styles = StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            width:"90%",
        },
    });

    return <View style={[styles.container,{marginBottom:70}]}>{props.children}</View>;
}
