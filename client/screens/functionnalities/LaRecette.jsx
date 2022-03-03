import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Recipe from "../../components/recipeElements/recipe";
import RecipeItem from "../../components/recipeElements/recipeItem";
import RecipeDescription from "../../components/recipeElements/recipeDescription";
import Header from "../../components/headings/Header";
import CustomButton from "../../components/CustomButton";
import ActionOverlay from "../../components/overlays/actionOverlay";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RecipeTimer from "../../components/recipeElements/RecipeTimer";
import NoteOverlay from "../../components/overlays/noteOverlay";

import config from "../../config/globalVariables";

import StyleGuide from "../../components/utils/StyleGuide";

const LaRecette = ({ route }) => {
    const [recipe, setRecipe] = useState(null);
    const { recipeId } = route.params;

    // Transparent Overlay when pressing plus btn
    const [transparentOverlay, setTransparentOverlay] = useState(false);

    // Notes overlay when clicking notes btn
    const [noteOverlay, setNoteOverlay] = useState(null);
    const [notesData, setNotesData] = useState([]);
    const [notesCat, setNotesCat] = useState("");
    const [notesPosition, setNotesPosition] = useState(0);
    const displayNoteOverlay = (cat, position) => {
        setTransparentOverlay(false);
        setNoteOverlay(true);
        setNotesData(recipe[cat][`${cat}Steps`][position].notes);
        setNotesCat(cat);
        setNotesPosition(position);
    };
    const closeNoteOverlay = () => {
        setNoteOverlay(null);
    };
    let noteOverlayRender = (
        <NoteOverlay
            type={noteOverlay}
            closeAction={closeNoteOverlay}
            recipe={recipe?._id}
            section={notesCat}
            position={notesPosition}
        />
    );

    // Set action overlay to display: "timer", "other", "densimetre", "convert", null
    const [actionOverlay, setActionOverlay] = useState(null);
    const displayActionOverlay = (type) => {
        setTransparentOverlay(false);
        setActionOverlay(type);
    };
    const closeActionOverlay = () => {
        setActionOverlay(null);
    };
    let actionOverlayRender = (
        <ActionOverlay type={actionOverlay} closeAction={closeActionOverlay} />
    );

    // Getting any potential timer
    const [timer, setTimer] = useState(false);
    AsyncStorage.getItem("timer", function (error, data) {
        if (data) setTimer(true);
    });

    // Getting the recipe
    useEffect(async () => {
        AsyncStorage.getItem("user", async function (error, data) {
            const rawResponse = await fetch(
                `${config.base_url}/api/recipes/${recipeId}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${data}`,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            const result = await rawResponse.json();
            setRecipe(result);
        });
    }, [recipeId]);

    // Specific description of the recipe
    const recipeDescription = `${recipe?.description}\nCouleur: ${recipe?.colorEstimate} EBC\nAmertume: ${recipe?.ibuEstimate} IBU\nAlcool: ${recipe?.alcoholByVolume} %\nDensité de départ: ${recipe?.originalGravity}\nDensité de fin: ${recipe?.finalGravity}`;
    if (!recipe) return <View></View>;
    return (
        <View
            style={{ paddingTop: 60, backgroundColor: StyleGuide.colors.white }}
        >
            <View style={{ left: 25 }}>
                <Header title={recipe.name} />
            </View>
            <ScrollView
                contentContainerStyle={{
                    alignItems: "center",
                    paddingBottom: 80,
                }}
            >
                <Recipe>
                    <RecipeDescription
                        title={recipe.name}
                        content={recipeDescription}
                    />
                    <View
                        style={[
                            StyleGuide.divider,
                            { backgroundColor: StyleGuide.colors.primary },
                        ]}
                    />
                    <Text
                        style={[
                            StyleGuide.typography.text1,
                            { textAlign: "left", width: "100%" },
                        ]}
                    >
                        Empatage
                    </Text>
                    <RecipeDescription
                        title={recipe.mash.name}
                        content={recipe.mash.description}
                    />
                    {recipe.mash.mashSteps.map((step, i) => {
                        const textToDisplay = `${step.description}\n${step.stepTemperature}°C pendant ${step.stepTime} minutes.`;
                        return (
                            <RecipeItem
                                title={step.name}
                                content={textToDisplay}
                                key={i}
                                cat="mash"
                                position={i}
                                openNotes={displayNoteOverlay}
                            />
                        );
                    })}
                    <View
                        style={[
                            StyleGuide.divider,
                            { backgroundColor: StyleGuide.colors.primary },
                        ]}
                    />
                    <Text
                        style={[
                            StyleGuide.typography.text1,
                            { textAlign: "left", width: "100%" },
                        ]}
                    >
                        Ébullition
                    </Text>
                    <RecipeDescription
                        title={recipe.boil.name}
                        content={recipe.boil.description}
                    />
                    {recipe.boil.boilSteps.map((step, i) => {
                        const textToDisplay = `${step.description}\n${step.endTemperature}°C pendant ${step.stepTime} minutes.\nDensité de départ: ${step.startGravity}\nDensité de fin: ${step.endGravity}`;
                        return (
                            <RecipeItem
                                title={step.name}
                                content={textToDisplay}
                                key={i}
                                cat="boil"
                                position={i}
                                openNotes={displayNoteOverlay}
                            />
                        );
                    })}
                    <View
                        style={[
                            StyleGuide.divider,
                            { backgroundColor: StyleGuide.colors.primary },
                        ]}
                    />
                    <Text
                        style={[
                            StyleGuide.typography.text1,
                            { textAlign: "left", width: "100%" },
                        ]}
                    >
                        Fermentation
                    </Text>
                    <RecipeDescription
                        title={recipe.fermentation.name}
                        content={recipe.fermentation.description}
                    />
                    {recipe.fermentation.fermentationSteps.map((step, i) => {
                        const textToDisplay = `${
                            step.description ? `${step.description}\n` : ""
                        }Durée: ${
                            step.stepTime
                        } jours.\nTempérature de départ: ${
                            step.startTemperature
                        }°C\nTempérature de fin: ${
                            step.endTemperature
                        }°C\nDensité de départ: ${
                            step.startGravity
                        }\nDensité de fin: ${step.endGravity}`;
                        return (
                            <RecipeItem
                                title={step.name}
                                content={textToDisplay}
                                key={i}
                                cat="fermentation"
                                position={i}
                                openNotes={displayNoteOverlay}
                            />
                        );
                    })}
                </Recipe>
            </ScrollView>
            {transparentOverlay && (
                <View
                    style={{
                        backgroundColor: "rgba(255,255,255,0.8)",
                        ...StyleSheet.absoluteFill,
                    }}
                >
                    <View
                        style={{
                            height: 200,
                            justifyContent: "space-between",
                            position: "absolute",
                            top: "60%",
                            left: "60%",
                        }}
                    >
                        <CustomButton type="other" />
                        <CustomButton
                            type="densimetre"
                            onPress={() => displayActionOverlay("densimetre")}
                        />
                        <CustomButton
                            type="convert"
                            onPress={() => displayActionOverlay("convert")}
                        />
                        <CustomButton
                            type="timer"
                            onPress={() => displayActionOverlay("timer")}
                        />
                    </View>
                </View>
            )}
            <View
                style={{
                    position: "absolute",
                    top: "90%",
                    left: "80%",
                    transform: [
                        { rotate: transparentOverlay ? "45deg" : "0deg" },
                    ],
                }}
            >
                <CustomButton
                    type="plus"
                    onPress={() => setTransparentOverlay(!transparentOverlay)}
                />
            </View>
            {timer && <RecipeTimer onPress={() => setTimer(false)} />}
            {actionOverlay && actionOverlayRender}
            {noteOverlay && noteOverlayRender}
        </View>
    );
};

export default LaRecette;
