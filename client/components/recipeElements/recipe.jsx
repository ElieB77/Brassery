import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import RecipeList from "./recipeList";
import RecipeItem from "./recipeItem";
import RecipeDescription from "./recipeDescription";
import RecipeIngredients from "./recipeIngredients";
import Header from "../headings/Header";
import CustomButton from "../CustomButton";
import ActionOverlay from "../overlays/actionOverlay";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RecipeTimer from "./recipeTimer";
import NoteOverlay from "../overlays/noteOverlay";
import IngredientsOverlay from "../overlays/ingredientsOverlay";

import config from "../../config/globalVariables";

import StyleGuide from "../utils/StyleGuide";

const Recipe = ({ id, readOnly, navigation }) => {
    // Controllers
    const getStepStatus = (section, position) => {
        return batch?.stepsStatus.filter(
            (x) => x.section === section && x.position === position
        )[0].isDone;
    };
    const [recipe, setRecipe] = useState(null);
    const [batch, setBatch] = useState(null);

    // Transparent Overlay when pressing plus btn
    const [transparentOverlay, setTransparentOverlay] = useState(false);

    // Notes overlay when clicking notes btn
    const [noteOverlay, setNoteOverlay] = useState(null);
    const [notesCat, setNotesCat] = useState("");
    const [notesPosition, setNotesPosition] = useState(0);
    const displayNoteOverlay = (cat, position) => {
        setTransparentOverlay(false);
        setNoteOverlay(true);
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

    // Ingredients overlay
    const [ingredientOverlay, setIngredientOverlay] = useState(null);
    const openIngredientsOverlay = (e) => {
        setIngredientOverlay(e);
    };
    const closeIngredientOverlay = () => {
        setIngredientOverlay(null);
    };
    let ingredientOverlayRender = (
        <IngredientsOverlay
            type={ingredientOverlay}
            closeAction={closeIngredientOverlay}
            recipe={recipe?._id}
            ingredient={ingredientOverlay}
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
                `${config.base_url}/api/${
                    readOnly ? "recipes" : "batches"
                }/${id}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${data}`,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            const result = await rawResponse.json();
            if (readOnly) setRecipe(result);
            if (!readOnly) {
                setRecipe(result.recipe);
                setBatch(result);
            }
        });
    }, [id]);

    // Specific description of the recipe
    const recipeDescription = `${recipe?.description}\n\nCouleur: ${recipe?.colorEstimate} EBC\nAmertume: ${recipe?.ibuEstimate} IBU\nAlcool: ${recipe?.alcoholByVolume} %\nDensité de départ: ${recipe?.originalGravity}\nDensité de fin: ${recipe?.finalGravity}`;
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
                <RecipeList>
                    <RecipeDescription
                        title={recipe.name}
                        content={recipeDescription}
                    />
                    <RecipeIngredients open={openIngredientsOverlay} />
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
                        if (!batch && !readOnly) return;
                        const textToDisplay = `${step.description}${
                            step.type === "Concassage"
                                ? ""
                                : `\n\n${step.stepTemperature}°C pendant ${step.stepTime} minutes.`
                        }`;
                        return (
                            <RecipeItem
                                title={step.name}
                                content={textToDisplay}
                                key={i}
                                cat="mash"
                                position={i}
                                openNotes={displayNoteOverlay}
                                batchId={id}
                                readOnly={readOnly}
                                stepStatus={getStepStatus("mash", i)}
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
                        if (!batch && !readOnly) return;
                        const textToDisplay = `${step.description}\n\n${step.endTemperature}°C pendant ${step.stepTime} minutes.\nDensité de départ: ${step.startGravity}\nDensité de fin: ${step.endGravity}`;
                        return (
                            <RecipeItem
                                title={step.name}
                                content={textToDisplay}
                                key={i}
                                cat="boil"
                                position={i}
                                openNotes={displayNoteOverlay}
                                batchId={id}
                                readOnly={readOnly}
                                stepStatus={getStepStatus("boil", i)}
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
                        if (!batch && !readOnly) return;
                        const textToDisplay = `${
                            step.description ? `${step.description}\n\n` : ""
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
                                batchId={id}
                                readOnly={readOnly}
                                stepStatus={getStepStatus("fermentation", i)}
                            />
                        );
                    })}
                </RecipeList>
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
                        <CustomButton
                            type="other"
                            onPress={() => displayActionOverlay("options")}
                        />
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
            {!readOnly && (
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
                        onPress={() =>
                            setTransparentOverlay(!transparentOverlay)
                        }
                    />
                </View>
            )}
            {timer && <RecipeTimer onPress={() => setTimer(false)} />}
            {actionOverlay && actionOverlayRender}
            {noteOverlay && noteOverlayRender}
            {ingredientOverlay && ingredientOverlayRender}
        </View>
    );
};

export default Recipe;
