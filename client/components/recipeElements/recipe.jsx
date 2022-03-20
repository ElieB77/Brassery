import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { useIsFocused } from "@react-navigation/native";

import RecipeList from "./recipeList";
import RecipeItem from "./recipeItem";
import RecipeDescription from "./recipeDescription";
import RecipeIngredients from "./recipeIngredients";

import Header from "../headings/Header";
import CustomButton from "../CustomButton";
import ActionOverlay from "../overlays/actionOverlay";
import RecipeTimer from "./recipeTimer";
import NoteOverlay from "../overlays/noteOverlay";
import MeasureOverlay from "../overlays/measureOverlay";
import IngredientsOverlay from "../overlays/ingredientsOverlay";

import config from "../../config/globalVariables";
import StyleGuide from "../utils/StyleGuide";

const Recipe = ({ id, readOnly, navigation, token }) => {
    const isFocused = useIsFocused();

    // GET user ID
    const [userId, setUserId] = useState(null);
    useEffect(() => {
        if (!userId)
            AsyncStorage.getItem("userId", function (error, data) {
                if (data != null) {
                    setUserId(data);
                }
            });
    }, [userId,isFocused]);

    // This function gets the status of the step according to the batch information
    const getStepStatus = (section, position) => {
        return batch?.stepsStatus.filter(
            (x) => x.section === section && x.position === position
        )[0].isDone;
    };

    /* STATES */
    const [recipe, setRecipe] = useState(null); // Recipe information
    const [batch, setBatch] = useState(null); // Batch information if readOnly is false

    // Transparent overlay when pressing plus btn
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
            closeAction={closeNoteOverlay}
            recipe={recipe?._id}
            section={notesCat}
            position={notesPosition}
        />
    );

    // Measures overlay when clicking measure btn
    const [measureOverlay, setMeasureOverlay] = useState(null);
    const displayMeasureOverlay = () => {
        setTransparentOverlay(false);
        setMeasureOverlay(true);
    };
    const closeMeasureOverlay = () => {
        setMeasureOverlay(null);
    };
    let measureOverlayRender = (
        <MeasureOverlay closeAction={closeMeasureOverlay} batch={batch?._id} />
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

    // Getting a potential timer ⏰
    const [timer, setTimer] = useState(false);
    AsyncStorage.getItem("timer", function (error, data) {
        if (data) setTimer(true);
    });

    /* MAIN DATA */
    // Getting the recipe
    useEffect(async () => {
        // Getting the data
        const getData = async () => {
            const rawResponse = await fetch(
                `${config.base_url}/api/${
                    readOnly ? "recipes" : "batches"
                }/${id}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
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
            return result;
        };
        const result = await getData();

        // Getting like status
        const getLike = async () => {
            if (userId) {
                const userRawResponse = await fetch(
                    `${config.base_url}/api/users/${userId}`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const user = await userRawResponse.json();
                if (
                    user.data.likedRecipes.findIndex(
                        (x) => x === result._id
                    ) !== -1
                ) {
                    setLikeOutline(false);
                } else {
                    setLikeOutline(true);
                }
            }
        };
        await getLike();
    }, [userId]);

    // Set up like status
    const [likeOutline, setLikeOutline] = useState(true);
    const toggleLikeRecipe = async () => {
        await fetch(
            `${config.base_url}/api/users/recipe/${userId}/${recipe._id}`,
            {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        setLikeOutline(!likeOutline);
    };

    /* BATCH */
    // Create
    const createNewBatch = async () => {
        if (!userId) navigation.navigate("SignUp");
        if (userId) {
            const rawResponse = await fetch(
                `${config.base_url}/api/batches/create`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: `recipeId=${recipe._id}&userId=${userId}`,
                }
            );
            const result = await rawResponse.json();
            navigation.navigate("Batch", {
                batchId: result._id,
            });
        }
    };

    // Delete
    const deleteBatch = async () => {
        await fetch(`${config.base_url}/api/batches/delete/${batch._id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        navigation.navigate("Navbar");
    };

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
        <ActionOverlay
            type={actionOverlay}
            closeAction={closeActionOverlay}
            deleteBatch={deleteBatch}
        />
    );

    /* STYLES */
    const style = StyleSheet.create({
        mainContainer: {
            paddingTop: 60,
            backgroundColor: StyleGuide.colors.white,
        },
        header: { left: 25 },
        scrollContainer: {
            alignItems: "center",
            paddingBottom: 100,
        },
        dividerColor: { backgroundColor: StyleGuide.colors.primary },
        titleContainer: { textAlign: "left", width: "100%" },
        overlay: {
            backgroundColor: "rgba(255,255,255,0.8)",
            ...StyleSheet.absoluteFill,
        },
        actionBtnOpen: {
            height: 250,
            justifyContent: "space-between",
            position: "absolute",
            top: "55%",
            left: "60%",
        },
        actionBtn: {
            position: "absolute",
            top: "90%",
            left: "80%",
            transform: [{ rotate: transparentOverlay ? "45deg" : "0deg" }],
        },
        brasserBtn: {
            position: "absolute",
            top: "87%",
            alignSelf: "center",
            transform: [{ scale: 0.9 }],
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },
        likeBtn: {
            position: "absolute",
            top: "91%",
            left: "5%",
            transform: [{ scale: 0.9 }],
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },
    });

    // Specific description of the recipe
    const recipeDescription = `${recipe?.description}\n\nCouleur: ${recipe?.colorEstimate} EBC\nAmertume: ${recipe?.ibuEstimate} IBU\nAlcool: ${recipe?.alcoholByVolume} %\nDensité de départ: ${recipe?.originalGravity}\nDensité de fin: ${recipe?.finalGravity}`;
    if (!recipe)
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            ></View>
        );
    return (
        <View style={style.mainContainer}>
            <View style={style.header}>
                <Header title={recipe.name} />
            </View>
            <ScrollView contentContainerStyle={style.scrollContainer}>
                <RecipeList>
                    <RecipeDescription
                        title={recipe.name}
                        content={recipeDescription}
                    />
                    <RecipeIngredients open={openIngredientsOverlay} />
                    <View style={[StyleGuide.divider, style.dividerColor]} />
                    <Text
                        style={[
                            StyleGuide.typography.text1,
                            style.titleContainer,
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
                    <View style={[StyleGuide.divider, style.dividerColor]} />
                    <Text
                        style={[
                            StyleGuide.typography.text1,
                            style.titleContainer,
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
                    <View style={[StyleGuide.divider, style.dividerColor]} />
                    <Text
                        style={[
                            StyleGuide.typography.text1,
                            style.titleContainer,
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
                <View style={style.overlay}>
                    <View style={style.actionBtnOpen}>
                        <CustomButton
                            type="other"
                            onPress={() => displayActionOverlay("options")}
                        />
                        <CustomButton
                            type="measure"
                            onPress={() => displayMeasureOverlay()}
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
            {!readOnly ? (
                <View style={style.actionBtn}>
                    <CustomButton
                        type="plus"
                        onPress={() =>
                            setTransparentOverlay(!transparentOverlay)
                        }
                    />
                </View>
            ) : (
                <View style={style.brasserBtn}>
                    <CustomButton
                        type="brasser"
                        onPress={() => createNewBatch()}
                    />
                </View>
            )}

            {readOnly && (
                <View style={style.likeBtn}>
                    <CustomButton
                        outline={likeOutline}
                        type="liker"
                        onPress={() => toggleLikeRecipe()}
                    />
                </View>
            )}
            {timer && <RecipeTimer onPress={() => setTimer(false)} />}
            {actionOverlay && actionOverlayRender}
            {noteOverlay && noteOverlayRender}
            {ingredientOverlay && ingredientOverlayRender}
            {measureOverlay && measureOverlayRender}
        </View>
    );
};

function mapStateToProps(state) {
    return { token: state.token };
}

export default connect(mapStateToProps, null)(Recipe);
