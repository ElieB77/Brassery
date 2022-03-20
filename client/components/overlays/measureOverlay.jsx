import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";

import StyleGuide from "../utils/StyleGuide";
import CustomButton from "../CustomButton";
import List from "../lists/list";
import ListItem from "../lists/listItem";
import Input from "../utils/form-elements/Input";
import config from "../../config/globalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";

function MeasureOverlay({ closeAction, batch, token }) {
    /* STATES */
    const [addMeasure, setAddMeasure] = useState(false);
    const [measuresData, setMeasuresData] = useState([]);
    const [measureValue, setMeasureValue] = useState("");
    const [measureContent, setMeasureContent] = useState("");

    /* OTHER HOOKS */
    useEffect(async () => {
        const rawResponse = await fetch(
            `${config.base_url}/api/batches/${batch}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        const result = await rawResponse.json();
        setMeasuresData(result.gravities);
    }, [addMeasure]);

    /* FETCH */
    const insertMeasure = async () => {
        await fetch(`${config.base_url}/api/batches/${batch}/addMeasure`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `description=${measureContent}&value=${measureValue}`,
        });
    };

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

    const allItems = measuresData?.map((measure, i) => {
        const displayText = `Date: ${new Date(
            measure.createdAt
        ).toLocaleDateString("en-GB")}\n${measure.description}`;
        return <ListItem content={displayText} title={measure.value} key={i} />;
    });

    return (
        <View style={styles.container}>
            <View style={[styles.overlay, StyleGuide.shadowProp]}>
                <View style={styles.titleContainer}>
                    <CustomButton type="close" onPress={() => closeAction()} />
                    <Text style={StyleGuide.typography.text5}>
                        Mesures de densité
                    </Text>
                </View>
                {addMeasure ? (
                    <View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Densité mesurée"
                                onChangeText={(e) => setMeasureValue(e)}
                            />
                            <View style={styles.inputContainer}>
                                <Input
                                    type="textArea"
                                    onChangeText={(e) => setMeasureContent(e)}
                                />
                            </View>
                        </View>
                    </View>
                ) : (
                    <List>{allItems}</List>
                )}
                <View style={styles.btnContainer}>
                    <CustomButton
                        type={addMeasure ? "" : "addMeasure"}
                        title="Valider"
                        onPress={() =>
                            addMeasure
                                ? [insertMeasure(), setAddMeasure(false)]
                                : setAddMeasure(true)
                        }
                    />
                </View>
            </View>
        </View>
    );
}

function mapStateToProps(state) {
    return { token: state.token };
}

export default connect(mapStateToProps, null)(MeasureOverlay);
