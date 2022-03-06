import StyleGuide from "../StyleGuide";
import { View, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import Tick from "../icons/Tick";

const Checkbox = (props) => {
    /* STYLES */
    const styles = StyleSheet.create({
        container: {
            width: 45,
            height: 30,
            borderRadius: StyleGuide.borderRadius,
            borderWidth: 1,
            borderColor: StyleGuide.colors.secondary,
            backgroundColor: !props.isDone
                ? StyleGuide.colors.white
                : StyleGuide.colors.secondary,
            justifyContent: "center",
            alignItems: "center",
        },
    });

    return (
        <Pressable
            onPress={props.onPress}
            style={[styles.container, StyleGuide.shadowProp]}
        >
            <View>{props.isDone && <Tick />}</View>
        </Pressable>
    );
};

export default Checkbox;
