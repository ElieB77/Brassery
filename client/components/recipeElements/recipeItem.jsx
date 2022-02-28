import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import CustomButton from "../CustomButton";
import StyleGuide from "../utils/StyleGuide";

export default function RecipeItem(props) {
    /* STATES */
    const [seeMoreBtnText, setSeeMoreBtnText] = useState("voir plus...");
    const [isDone, setIsDone] = useState(false);
    const [isExtended, setIsExtended] = useState(false);
    const [limitHeight, setLimitHeight] = useState(true);
    const [content, setContent] = useState(props.content);
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
            setSeeMoreBtnText("voir plus...");
            setIsExtended(!limitHeight)
        }
        if (!limitHeight) {
            setContent(props.content);
            setSeeMoreBtnText("voir moins...");
            setIsExtended(!limitHeight)
        }
    }, [limitHeight]);

    /* STYLES */
    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            minHeight: 100,
            marginVertical: 10,
        },
        btnContainer: {
            justifyContent: "space-around",
            alignItems: "center",
            width: "17%",
        },
        textContainer: {
            flexWrap: "nowrap",
            width: "83%",
            flexDirection: "column",
            borderWidth: 1,
            borderColor: "#435E75",
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 5,
            elevation: 10,
            backgroundColor: isDone ? "#435E75" : "#FFFDFB",
        },
        text: {
            color: props.done
                ? StyleGuide.colors.primary
                : StyleGuide.colors.secondary,
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={[StyleGuide.typography.text5, styles.text]}>
                    {props.title}
                </Text>
                {content.split(" ").length > maxWords ? (
                    <Pressable
                        onPress={() => setLimitHeight(!limitHeight)}
                    >
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
            {!isExtended ? (
                <View style={styles.btnContainer}>
                    <Button title=" o " onPress={() => setIsDone(!isDone)} />
                </View>
            ) : (
                <View style={styles.btnContainer}>
                    <CustomButton type="comment" />
                    <Button title=" o " onPress={() => setIsDone(!isDone)} />
                </View>
            )}
        </View>
    );
}
