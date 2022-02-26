import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function List(props) {
    /* STYLES */
    const styles = StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            width: "67%",
            borderRadius: 8,
            backgroundColor: "#FFFDFB",
            elevation: 10,
        },
    });

    const items = props.children.map((child, i) => {
        return React.cloneElement(child, { topBar: i === 0 ? false : true });
    });

    return <View style={styles.container}>{items}</View>;
}
