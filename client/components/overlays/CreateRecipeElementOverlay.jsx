import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";

import StyleGuide from "../utils/StyleGuide";
import CustomButton from "../CustomButton";
import List from "../lists/list";
import ListItem from "../lists/listItem";
import Input from "../utils/form-elements/Input";
import config from "../../config/globalVariables";

function CreateRecipeElementOverlay({
    closeAction,
    section,
    validateAction,
    style,
}) {
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
    const [form, setForm] = useState("");
    const [year, setYear] = useState(0);
    const [alphaAcid, setAlphaAcid] = useState("");
    const [group, setGroup] = useState("");
    const [origin, setOrigin] = useState("");
    const [color, setColor] = useState("");

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
            case "hops":
                data = {
                    name: name,
                    year: year,
                    origin: origin,
                    form: form,
                    alphaAcid: alphaAcid,
                };
                break;
            case "fermentables":
                data = {
                    name: name,
                    type: type,
                    origin: origin,
                    grainGroup: group,
                    color: color,
                };
                break;
            case "cultures":
                data = {
                    name: name,
                    type: type,
                    form: form,
                };
                break;
            case "miscs":
                data = {
                    name: name,
                    type: type,
                };
                break;
        }
        validateAction(data, section);
    };

    const formToDisplay = () => {
        switch (section) {
            case "mash":
                return (
                    <View style={style}>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Titre"
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
                                placeholder="Titre"
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
                                placeholder="Titre"
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
            case "hops":
                return (
                    <View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Nom"
                                onChangeText={(e) => setName(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Année"
                                onChangeText={(e) => setYear(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Alpha Acid"
                                onChangeText={(e) => setAlphaAcid(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Forme"
                                onChangeText={(e) => setForm(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Origine"
                                onChangeText={(e) => setOrigin(e)}
                            />
                        </View>
                    </View>
                );
            case "fermentables":
                return (
                    <View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Nom"
                                onChangeText={(e) => setName(e)}
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
                                placeholder="Origine"
                                onChangeText={(e) => setOrigin(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Groupe"
                                onChangeText={(e) => setGroup(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Couleur en EBC"
                                onChangeText={(e) => setColor(e)}
                            />
                        </View>
                    </View>
                );
            case "cultures":
                return (
                    <View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Nom"
                                onChangeText={(e) => setName(e)}
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
                                placeholder="Forme"
                                onChangeText={(e) => setForm(e)}
                            />
                        </View>
                    </View>
                );
            case "miscs":
                return (
                    <View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Nom"
                                onChangeText={(e) => setName(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Type"
                                onChangeText={(e) => setType(e)}
                            />
                        </View>
                    </View>
                );
        }
    };

    const sectionTranslate = () => {
        switch (section) {
            case "mash":
                return "Nouvelle étape - Empatage";
            case "boil":
                return "Nouvelle étape - Ébullition";
            case "fermentation":
                return "Nouvelle étape - Fermentation";
            case "hops":
                return "Nouvel ingrédient - Houblon";
            case "fermentables":
                return "Nouvel ingrédient - Malt";
            case "cultures":
                return "Nouvel ingrédient - Levure";
            case "miscs":
                return "Nouvel ingrédient - Autre";
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
                        {sectionTranslate()}
                    </Text>
                </View>
                <ScrollView style={{ maxHeight: 300 }}>
                    {formToDisplay()}
                </ScrollView>
                <View style={styles.btnContainer}>
                    <CustomButton
                        title="Ajouter"
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
