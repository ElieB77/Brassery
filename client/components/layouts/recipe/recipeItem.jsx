import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function RecipeItem(props) {
    /* STATES */
    const [isExtended, setIsExtended] = useState(false);
    const [isDone, setIsDone] = useState(false);

    /* STYLES */
    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            height: isExtended ? 300 : 110,
            marginVertical: 10,
        },
        h3: {
            color: isDone ? "#FFFDFB" : "#435E75",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 14,
        },
        p: {
            color: isDone ? "#FFFDFB" : "#435E75",
            fontStyle: "normal",
            fontSize: 12,
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
    });

    /* PROCESSING */
    let content = props.content;
    if (!isExtended) {
        let maxWords = 10;
        let contentLength = content.split(" ").length;
        if (contentLength > maxWords) {
            content = content.split(" ");
            content.splice(maxWords, contentLength - maxWords);
            content[content.length] = "...";
            content = content.join(" ");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.h3}>{props.title}</Text>
                <Text style={styles.p}>{content}</Text>
            </View>
            {!isExtended ? (
                <View style={styles.btnContainer}>
                    <Button title=" + " onPress={() => setIsExtended(true)} />
                    <Button title=" o " onPress={() => setIsDone(!isDone)} />
                </View>
            ) : (
                <View style={styles.btnContainer}>
                    <Button title=" - " onPress={() => setIsExtended(false)} />
                    <Button title=" c " />
                    <Button title=" o " onPress={() => setIsDone(!isDone)} />
                </View>
            )}
        </View>
    );
}
