import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ListItem(props) {
    /* STYLES */
    const styles = StyleSheet.create({
        container: {
            width: "100%",
            height: 100,
            paddingHorizontal: 20,
            paddingVertical: 10,
            textAlign: "left",
            borderTopColor: props.topBar ? "rgba(235,187,110,0.3)" : "white",
            borderTopWidth: 1,
        },
        text: {
            width: "72%",
            color: "#435E75",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 14,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={styles.text}>{props.content}</Text>
        </View>
    );
}
