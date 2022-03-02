import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import StyleGuide from "../utils/StyleGuide";
import CustomButton from "../CustomButton";
import List from "../lists/list";
import ListItem from "../lists/listItem";

export default function TimerOverlay({ notesData, closeAction }) {
    /* STYLES */
    const styles = StyleSheet.create({
        container: {
            ...StyleSheet.absoluteFill,
            backgroundColor: "rgba(255,255,255,0.8)",
            justifyContent: "center",
            alignItems: "center",
        },
        overlay: {
            borderRadius: StyleGuide.borderRadius,
            backgroundColor: StyleGuide.colors.white,
            justifyContent: "center",
            alignItems: "center",
            maxHeight: 600,
        },
        titleContainer: {
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginVertical: 20,
            width: "80%",
        },
        inputContainer: {
            margin: 15,
            justifyContent: "center",
            alignItems: "center",
        },
        btnContainer: {
            margin: 15,
        },
    });

    const allItems = notesData.map((note) => {
        return <ListItem content={note.content} title={note.name} />;
    });

    return (
        <View style={styles.container}>
            <View style={[styles.overlay, StyleGuide.shadowProp]}>
                <View style={styles.titleContainer}>
                    <CustomButton type="close" onPress={() => closeAction()} />
                    <Text style={StyleGuide.typography.text5}>Notes</Text>
                </View>
                <List>{allItems}</List>
                <View style={styles.btnContainer}>
                    <CustomButton
                        type="addNote"
                        onPress={() => closeAction()}
                    />
                </View>
            </View>
        </View>
    );
}
