import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import StyleGuide from "../utils/StyleGuide";
import CustomButton from "../CustomButton";
import List from "../lists/list";
import ListItem from "../lists/listItem";
import Input from "../utils/form-elements/Input";
import config from "../../config/globalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TimerOverlay({
    recipe,
    section,
    closeAction,
    position,
}) {
    /* STATES */
    const [addNote, setAddNote] = useState(false);
    const [noteTitle, setNoteTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");
    const [notesData, setNotesData] = useState([]);

    /* OTHER HOOKS */
    useEffect(() => {
        AsyncStorage.getItem("user", async function (error, data) {
            const rawResponse = await fetch(
                `${config.base_url}/api/recipes/${recipe}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${data}`,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            const result = await rawResponse.json();
            setNotesData(result[section][`${section}Steps`][position].notes);
        });
    }, []);

    /* FETCH */
    const insertNote = async () => {
        AsyncStorage.getItem("user", async function (error, data) {
            await fetch(
                `${config.base_url}/api/recipes/${recipe}/addNote/${section}/${position}`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${data}`,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: `name=${noteTitle}&content=${noteContent}`,
                }
            );
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

    const allItems = notesData?.map((note, i) => {
        return <ListItem content={note.content} title={note.name} key={i} />;
    });

    return (
        <View style={styles.container}>
            <View style={[styles.overlay, StyleGuide.shadowProp]}>
                <View style={styles.titleContainer}>
                    <CustomButton type="close" onPress={() => closeAction()} />
                    <Text style={StyleGuide.typography.text5}>Notes</Text>
                </View>
                {addNote ? (
                    <View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Titre"
                                onChangeText={(e) => setNoteTitle(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                type="textArea"
                                onChangeText={(e) => setNoteContent(e)}
                            />
                        </View>
                    </View>
                ) : (
                    <List>{allItems}</List>
                )}
                <View style={styles.btnContainer}>
                    <CustomButton
                        type={addNote ? "" : "addNote"}
                        title="Valider"
                        onPress={() =>
                            addNote ? insertNote() : setAddNote(true)
                        }
                    />
                </View>
            </View>
        </View>
    );
}
