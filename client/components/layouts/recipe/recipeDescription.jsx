import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function RecipeDescription(props) {
    /* STYLES */
    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            height: 100,
            paddingHorizontal: 20,
            paddingVertical: 10,
            textAlign: "left",
            borderTopColor: props.topBar ? "rgba(235,187,110,0.3)" : "white",
            borderTopWidth: 1,
        },
        h3: {
            color: "#435E75",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 14,
        },
        p: {
            color: "#435E75",
            fontStyle: "normal",
            fontSize: 10,
        },
        btnContainer: {
            justifyContent: "center",
        },
        textContainer: {
            flexWrap: "nowrap",
            width: "72%",
            flexDirection: "column",
            elevation: 10,
            borderWidth: 1,
            borderColor: "#435E75",
            marginVertical: 2,
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.h3}>{props.title}</Text>
                <Text style={styles.p}>{props.content}</Text>
            </View>
            <View style={styles.btnContainer}>
                <Button title="Btn" />
            </View>
        </View>
    );
}
