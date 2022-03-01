import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Recipe from "../../components/recipeElements/recipe";
import RecipeItem from "../../components/recipeElements/recipeItem";
import RecipeDescription from "../../components/recipeElements/recipeDescription";
import Header from "../../components/headings/Header";
import CustomButton from "../../components/CustomButton";

import StyleGuide from "../../components/utils/StyleGuide";

const LaRecette = ({ route, navigation }) => {
    const [recipe, setRecipe] = useState(null);
    const { recipeId } = route.params;

    // Transparent Overlay when pressing plus btn
    const [transparentOverlay, setTransparentOverlay] = useState(false);

    // Getting the recipe
    useEffect(async () => {
        const rawResponse = await fetch(
            `http://192.168.1.22:3000/api/recipes/${recipeId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        const result = await rawResponse.json();
        setRecipe(result);
    }, [recipeId]);

    // Specific description of the recipe
    const recipeDescription = `${recipe?.description}\nCouleur: ${recipe?.colorEstimate} EBC\nAmertume: ${recipe?.ibuEstimate} IBU\nAlcool: ${recipe?.alcoholByVolume} %\nDensité de départ: ${recipe?.originalGravity}\nDensité de fin: ${recipe?.finalGravity}`;
    if (!recipe) return <View></View>;
    return (
        <View style={StyleGuide.container}>
            <Header title={recipe.name} />
            <ScrollView>
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
                    {recipe.mash.mashSteps.map((step) => {
                        const textToDisplay = `${step.description}\n${step.stepTemperature}°C pendant ${step.stepTime} minutes.`;
                        return (
                            <RecipeItem
                                title={step.name}
                                content={textToDisplay}
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
                    {recipe.boil.boilSteps.map((step) => {
                        const textToDisplay = `${step.description}\n${step.endTemperature}°C pendant ${step.stepTime} minutes.\nDensité de départ: ${step.startGravity}\nDensité de fin: ${step.endGravity}`;
                        return (
                            <RecipeItem
                                title={step.name}
                                content={textToDisplay}
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
                    {recipe.fermentation.fermentationSteps.map((step) => {
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
                            />
                        );
                    })}
                </Recipe>
            </ScrollView>
            {transparentOverlay && (
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(255,255,255,0.8)",
                        position: "absolute",
                        top: 45,
                        left: 25,
                    }}
                >
                    <View
                        style={{
                            height: 200,
                            justifyContent: "space-between",
                            position: "absolute",
                            top:"60%",
                            left:"65%",
                        }}
                    >
                        <CustomButton type="other" />
                        <CustomButton type="densimetre" />
                        <CustomButton type="convert" />
                        <CustomButton type="timer" />
                    </View>
                </View>
            )}
            <View style={{ position: "absolute", top: "95%", left: "95%" }}>
                <CustomButton
                    type="plus"
                    onPress={() => setTransparentOverlay(!transparentOverlay)}
                />
            </View>
        </View>
    );
};

export default LaRecette;
