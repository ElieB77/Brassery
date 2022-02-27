import React from "react";
import { StyleSheet, View } from "react-native";
import StyleGuide from "../utils/StyleGuide";

export default function List(props) {
    /* STYLES */
    const styles = StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            width: "67%",
            borderRadius: StyleGuide.borderRadius,
            backgroundColor: StyleGuide.colors.white,
            elevation: StyleGuide.elevation,
        },
    });

    const items = props.children.map((child, i) => {
        return React.cloneElement(child, { topBar: i === 0 ? false : true });
    });

    return <View style={styles.container}>{items}</View>;
}
