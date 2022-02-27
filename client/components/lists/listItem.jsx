import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import StyleGuide from "../utils/StyleGuide";

export default function ListItem(props) {
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
            borderTopColor: props.topBar ? StyleGuide.colors.lowOpacity : "white",
            borderTopWidth: 1,
        },
        btnContainer: {
            justifyContent: "center",
        },
        textContainer: {
            color:StyleGuide.colors.secondary,
            flexWrap: "nowrap",
            width: "72%",
            flexDirection:"column"
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={StyleGuide.typography.text2}>{props.title}</Text>
                <Text style={StyleGuide.typography.text3}>{props.content}</Text>
            </View>
            <View style={styles.btnContainer}>
                <Button title="Btn" />
            </View>
        </View>
    );
}
