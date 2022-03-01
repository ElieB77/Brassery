import React from "react";
import { StyleSheet, View } from "react-native";
import StyleGuide from "../utils/StyleGuide";

export default function List(props) {
    /* STYLES */
    const styles = StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            borderRadius: StyleGuide.borderRadius,
            backgroundColor: StyleGuide.colors.white,
        },
    });

    const items = props.children.map((child, i) => {
        return React.cloneElement(child, {
            last: i === props.children.length - 1 ? true : false,
            first: i === 0 ? true : false,
        });
    });

    return <View style={[styles.container,StyleGuide.shadowProp]}>{items}</View>;
}
