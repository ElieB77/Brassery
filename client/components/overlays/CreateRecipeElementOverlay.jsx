import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";

import StyleGuide from "../utils/StyleGuide";
import CustomButton from "../CustomButton";
import List from "../lists/list";
import ListItem from "../lists/listItem";
import Input from "../utils/form-elements/Input";
import config from "../../config/globalVariables";

function CreateRecipeElementOverlay({ closeAction, section, validateAction }) {
    /* STATES */
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [startGravity, setStartGravity] = useState(0);
    const [endGravity, setEndGravity] = useState(0);
    const [startTemp, setStartTemp] = useState(0);
    const [endTemp, setEndTemp] = useState(0);
    const [time, setTime] = useState(0);
    const [amount, setAmount] = useState(0);

    const validation = () => {
        let data = {};
        switch (section) {
            case "mash":
                data = {
                    name: name,
                    description: description,
                    type: type,
                    amount: amount,
                    stepTemperature: startTemp,
                    stepTime: time,
                };
                break;
            case "boil":
                data = {
                    name: name,
                    description: description,
                    startTemperature: startTemp,
                    endTemperature: endTemp,
                    stepTime: time,
                    startGravity: startGravity,
                    endGravity: endGravity,
                };
                break;
            case "fermentation":
                data = {
                    name: name,
                    description: description,
                    startTemperature: startTemp,
                    endTemperature: endTemp,
                    stepTime: time,
                    startGravity: startGravity,
                    endGravity: endGravity,
                };
                break;
        }
        validateAction(data, section);
    };

    const formToDisplay = () => {
        switch (section) {
            case "mash":
                return (
                    <View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Name"
                                onChangeText={(e) => setName(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Description"
                                onChangeText={(e) => setDescription(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Type"
                                onChangeText={(e) => setType(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Quantité en kg"
                                onChangeText={(e) => setAmount(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Température"
                                onChangeText={(e) => setStartTemp(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Durée en minutes"
                                onChangeText={(e) => setTime(e)}
                            />
                        </View>
                    </View>
                );
            case "boil":
                return (
                    <View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Name"
                                onChangeText={(e) => setName(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Description"
                                onChangeText={(e) => setDescription(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Température de départ"
                                onChangeText={(e) => setStartTemp(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Température de fin"
                                onChangeText={(e) => setEndTemp(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Temps d'ébullition en minutes"
                                onChangeText={(e) => setTime(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Densité de départ"
                                onChangeText={(e) => setStartGravity(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Densité de fin"
                                onChangeText={(e) => setEndGravity(e)}
                            />
                        </View>
                    </View>
                );
            case "fermentation":
                return (
                    <View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Name"
                                onChangeText={(e) => setName(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Description"
                                onChangeText={(e) => setDescription(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Température de départ"
                                onChangeText={(e) => setStartTemp(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Température de fin"
                                onChangeText={(e) => setEndTemp(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Temps de fermentation en jours"
                                onChangeText={(e) => setTime(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Densité de départ"
                                onChangeText={(e) => setStartGravity(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Densité de fin"
                                onChangeText={(e) => setEndGravity(e)}
                            />
                        </View>
                    </View>
                );
        }
    };

    const sectionTranslate = () => {
        switch (section) {
            case "mash":
                return "Empatage";
            case "boil":
                return "Ébullition";
            case "fermentation":
                return "Fermentation";
        }
    };

    return (
        <View style={styles.container}>
            <View style={[styles.overlay, StyleGuide.shadowProp]}>
                <View style={styles.titleContainer}>
                    <CustomButton
                        type="close"
                        onPress={() => closeAction(null)}
                    />
                    <Text style={StyleGuide.typography.text5}>
                        Nouvelle étape - {sectionTranslate()}
                    </Text>
                </View>
                <ScrollView>{formToDisplay()}</ScrollView>
                <View style={styles.btnContainer}>
                    <CustomButton
                        title="Valider"
                        onPress={() => validation()}
                    />
                </View>
            </View>
        </View>
    );
}

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
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    btnContainer: {
        margin: 15,
    },
});

export default CreateRecipeElementOverlay;
