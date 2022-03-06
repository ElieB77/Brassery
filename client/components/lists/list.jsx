import React from "react";
import { StyleSheet, View, ScrollView, Platform } from "react-native";
import StyleGuide from "../utils/StyleGuide";
import { Shadow } from 'react-native-shadow-2';

export default function List(props) {
    /* STYLES */
    const styles = StyleSheet.create({
        container: {
            backgroundColor: StyleGuide.colors.white,
            borderRadius: StyleGuide.borderRadius,
            flexGrow: 0,
            minHeight: 120,
            maxHeight: 400,
        },
    });

    const items = props.children?.map((child, i) => {
        return React.cloneElement(child, {
            last: i === props.children.length - 1 ? true : false,
            first: i === 0 ? true : false,
        });
    });

    return (
        <Shadow>
            <ScrollView
                style={[styles.container]}
                contentContainerStyle={{
                    flexGrow: 0,
                }}
            >
                {items}
            </ScrollView>
        </Shadow>
    );
}