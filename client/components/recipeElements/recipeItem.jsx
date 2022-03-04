import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import CustomButton from "../CustomButton";
import StyleGuide from "../utils/StyleGuide";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../config/globalVariables";

import Checkbox from "../utils/form-elements/Checkbox";

export default function RecipeItem(props) {
    /* STATES */
    const [seeMoreBtnText, setSeeMoreBtnText] = useState("voir plus ↓");
    const [limitHeight, setLimitHeight] = useState(true);
    const [content, setContent] = useState(props.content);
    const [isDone, setIsDone] = useState(props.stepStatus);

    const isDoneAction = () => {
        setIsDone(!isDone)
        AsyncStorage.getItem("user", async function (error, data) {
            await fetch(
                `${config.base_url}/api/batches/update/${props.batchId}`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${data}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        section: props.cat,
                        position: props.position,
                        isDone: !isDone,
                    }),
                }
            );
        });
    };

    // Limit the number of words displayed
    let maxWords = 8;
    useEffect(() => {
        if (limitHeight) {
            let contentLength = content.split(" ").length;
            if (contentLength > maxWords) {
                let contentTemp = content.split(" ");
                contentTemp.splice(maxWords, contentLength - maxWords);
                contentTemp[contentTemp.length] = "...";
                setContent(contentTemp.join(" "));
            }
            setSeeMoreBtnText("voir plus ↓");
        }
        if (!limitHeight) {
            setContent(props.content);
            setSeeMoreBtnText("voir moins ↑");
        }
    }, [limitHeight]);

    /* STYLES */
    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            justifyContent: "space-between",
            minHeight: 100,
            marginVertical: 10,
            width: "100%",
        },
        btnContainer: {
            justifyContent: "space-around",
            alignItems: "center",
            width: "18%",
            height: 100,
        },
        textContainer: {
            flexWrap: "nowrap",
            width: "80%",
            flexDirection: "column",
            borderWidth: 1,
            borderColor: "#435E75",
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor: isDone ? "#435E75" : "#FFFDFB",
        },
        text: {
            color: isDone
                ? StyleGuide.colors.white
                : StyleGuide.colors.secondary,
        },
    });

    return (
        <View style={styles.container}>
            <View style={[styles.textContainer, StyleGuide.shadowProp]}>
                <Text style={[StyleGuide.typography.text5, styles.text]}>
                    {props.title}
                </Text>
                {content.split(" ").length > maxWords ? (
                    <Pressable onPress={() => setLimitHeight(!limitHeight)}>
                        <Text
                            style={[StyleGuide.typography.text3, styles.text]}
                        >
                            {content}
                        </Text>
                        <Text
                            style={[
                                StyleGuide.typography.text3,
                                StyleGuide.typography.linkText,
                                styles.text,
                            ]}
                        >
                            {seeMoreBtnText}
                        </Text>
                    </Pressable>
                ) : (
                    <Text style={[StyleGuide.typography.text3, styles.text]}>
                        {content}
                    </Text>
                )}
            </View>
            <View style={styles.btnContainer}>
                {!props.readOnly && (
                    <Checkbox isDone={isDone} onPress={() => isDoneAction()} />
                )}
                <CustomButton
                    type="comment"
                    onPress={() => props.openNotes(props.cat, props.position)}
                />
            </View>
        </View>
    );
}
