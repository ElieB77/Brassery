import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import StyleGuide from "../utils/StyleGuide";
import CustomButton from "../CustomButton";

export default function ListItem(props) {
    /* STATE */
    const [seeMoreBtnText, setSeeMoreBtnText] = useState("voir plus...");
    const [limitHeight, setLimitHeight] = useState(true);
    const [selected, setSelected] = useState(false);
    const [content, setContent] = useState(props.content);
    let maxWords = 8;
    useEffect(() => {
        if (limitHeight && content) {
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
        setSeeMoreBtnText("voir plus ↓");
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
            width: "100%",
            minHeight: 100,
            paddingHorizontal: 20,
            paddingVertical: 10,
            textAlign: "left",
            borderTopColor: StyleGuide.colors.lowOpacity,
            borderTopWidth: !props.first ? 1 : 0,
            borderBottomRightRadius: props.last ? StyleGuide.borderRadius : 0,
            borderBottomLeftRadius: props.last ? StyleGuide.borderRadius : 0,
            borderTopRightRadius: props.first ? StyleGuide.borderRadius : 0,
            borderTopLeftRadius: props.first ? StyleGuide.borderRadius : 0,
            backgroundColor:
                props.reverseColor || selected
                    ? StyleGuide.colors.secondary
                    : StyleGuide.colors.white,
        },
        btnContainer: {
            justifyContent: "center",
        },
        textContainer: {
            flexWrap: "nowrap",
            width: "72%",
            flexDirection: "column",
        },
        text: {
            color:
                props.reverseColor || selected
                    ? StyleGuide.colors.primary
                    : StyleGuide.colors.secondary,
        },
    });

    const handleClick = () => {
        if (!selected) {
            setSelected(true);
        } else {
            setSelected(false);
        }

        const element = {
            title: props.title,
            content: props.content,
        };

        props.getValue(element);
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={[StyleGuide.typography.text5, styles.text]}>
                    {props.title}
                </Text>
                {content?.split(" ").length > maxWords ? (
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
            {props.btnType && (
                <View style={styles.btnContainer}>
                    <CustomButton
                        type={selected ? "minus" : props.btnType}
                        onPress={props.getValue ? () => handleClick() : props.onPress}
                    />
                </View>
            )}
        </View>
    );
}
