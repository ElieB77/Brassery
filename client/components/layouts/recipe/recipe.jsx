import React from "react";
import { StyleSheet, View } from "react-native";

export default function Recipe(props) {
    /* STYLES */
    const styles = StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            width: "85%",
        },
    });

    return <View style={styles.container}>{props.children}</View>;
}
