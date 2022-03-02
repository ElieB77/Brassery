import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import StyleGuide from "../utils/StyleGuide";
import Input from "../utils/form-elements/Input";
import CustomButton from "../CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Dropdown from "../utils/form-elements/Dropdown";

export default function TimerOverlay({ type, closeAction }) {
    /* STATES */
    const [overlayType, setOverlayType] = useState(type);

    // Conversion densité
    const [grUnit, setgrUnit] = useState("Densité");
    const [grValue, setGrValue] = useState(0);

    // Correction gravity
    const [gravity, setGravity] = useState("");
    const [startTemp, setStartTemp] = useState("");
    const [calcTemp, setCalcTemp] = useState("");

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
        input: {
            margin: 5,
        },
        btnContainer: {
            margin: 15,
        },
    });

    let title,
        results,
        buttons = null;

    switch (overlayType) {
        case "timer":
            const [timerDuration, setTimerDuration] = useState(null);
            const launchTimer = () => {
                const endTimerDate =
                    new Date().getTime() + timerDuration * 60000;
                AsyncStorage.setItem("timer", endTimerDate.toString());
                closeAction();
            };
            title = "Ajouter un timer";
            buttons = (
                <View style={styles.inputContainer}>
                    <View style={styles.input}>
                        <Input
                            type="text"
                            placeholder="Temps en minutes"
                            onChangeText={(e) => setTimerDuration(e)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <CustomButton
                            title="Valider"
                            onPress={() => launchTimer()}
                        />
                    </View>
                </View>
            );
            break;
        case "convert":
            title = "Convertisseurs";
            buttons = (
                <View style={styles.inputContainer}>
                    <View style={styles.inputContainer}>
                        <CustomButton
                            title={"Couleur"}
                            onPress={() => setOverlayType("colorConvert")}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <CustomButton
                            title={"Densité"}
                            onPress={() => setOverlayType("gravityConvert")}
                        />
                    </View>
                </View>
            );
            break;
        case "gravityConvert":
            title = "Conversion - Densité";
            let grDen = grValue;
            let grPlato = grValue;
            if (grUnit === "Densité") {
                grPlato = (
                    (258.6 * (grDen / 1000 - 1)) /
                        (0.12 + (0.88 * grDen) / 1000)
                ).toFixed(2);
            }
            if (grUnit === "Plato")
                grDen = Math.floor(
                    (1 + grPlato / (258.6 - 0.88 * grPlato)) * 1000
                );
            if (grUnit && grValue)
                results = (
                    <Text
                        style={[
                            StyleGuide.typography.text2,
                            { marginVertical: 10 },
                        ]}
                    >
                        {`Densité: ${grDen}\nDegré plato: ${grPlato}`}
                    </Text>
                );
            buttons = (
                <View style={styles.inputContainer}>
                    <View style={styles.input}>
                        <Input
                            type="text"
                            placeholder="Unité de mesure"
                            onChangeText={(e) => setgrUnit(e)}
                        />
                    </View>
                    <View style={styles.input}>
                        <Input
                            type="text"
                            placeholder="Valeur mesurée"
                            onChangeText={(e) => setGrValue(e)}
                        />
                    </View>
                </View>
            );
            break;
        case "densimetre":
            title = "Correcteur du densimètre";
            const calc = Math.floor(
                Number(gravity) +
                    0.00352871 *
                        Math.sqrt(Number(startTemp) - Number(calcTemp)) +
                    0.225225 * (Number(startTemp) - Number(calcTemp))
            );
            if (gravity && startTemp && calcTemp)
                results = (
                    <Text
                        style={[
                            StyleGuide.typography.text2,
                            { marginVertical: 10 },
                        ]}
                    >
                        Densité actuelle: {calc}
                    </Text>
                );
            buttons = (
                <View style={styles.inputContainer}>
                    <View style={styles.input}>
                        <Input
                            type="text"
                            placeholder="Densité mesurée"
                            onChangeText={(e) => setGravity(e)}
                        />
                    </View>
                    <View style={styles.input}>
                        <Input
                            type="text"
                            placeholder="Température de l'échantillon"
                            onChangeText={(e) => setStartTemp(e)}
                        />
                    </View>
                    <View style={styles.input}>
                        <Input
                            type="text"
                            placeholder="Température de calibrage"
                            onChangeText={(e) => setCalcTemp(e)}
                        />
                    </View>
                </View>
            );
            break;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.overlay, StyleGuide.shadowProp]}>
                <View style={styles.titleContainer}>
                    <CustomButton type="close" onPress={() => closeAction()} />
                    <Text style={StyleGuide.typography.text5}>{title}</Text>
                </View>
                {buttons}
                {results}
            </View>
        </View>
    );
}
