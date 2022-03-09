import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { connect } from "react-redux";

import StyleGuide from "../../components/utils/StyleGuide";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/utils/form-elements/Input";
import Header from "../../components/headings/Header";
import CreateRecipeElementOverlay from "../../components/overlays/CreateRecipeElementOverlay";
import List from "../../components/lists/list";
import ListItem from "../../components/lists/listItem";
import config from "../../config/globalVariables";

const CreateRecipe = (props) => {
    /* STATES */
    const [stepOverlay, setStepOverlay] = useState(null);
    const [mainInfoToggle, setMainInfoToggle] = useState(false);
    const [mashInfoToggle, setMashInfoToggle] = useState(false);
    const [boilInfoToggle, setBoilInfoToggle] = useState(false);
    const [fermentationInfoToggle, setFermentationInfoToggle] = useState(false);
    const [mashSteps, setMashSteps] = useState([]);
    const [boilSteps, setBoilSteps] = useState([]);
    const [fermentationSteps, setFermentationSteps] = useState([]);
    const [beerName, setBeerName] = useState("");
    const [author, setAuthor] = useState("");
    const [beerType, setBeerType] = useState("");
    const [beerDescription, setBeerDescription] = useState("");
    const [totalVolume, setTotalVolume] = useState(0);
    const [beerStyle, setBeerStyle] = useState("");
    const [startGravity, setStartGravity] = useState(0);
    const [endGravity, setEndGravity] = useState(0);
    const [alcohol, setAlcohol] = useState(0);
    const [ibu, setIbu] = useState(0);
    const [beerColor, setBeerColor] = useState(0);
    const [mashName, setMashName] = useState("");
    const [mashDescription, setMashDescription] = useState("");
    const [mashStartTemp, setMashStartTemp] = useState(0);
    const [boilName, setBoilName] = useState("");
    const [boilDescription, setBoilDescription] = useState("");
    const [volumeBeforeBoil, setVolumeBeforeBoil] = useState(0);
    const [boilingTime, setBoilingTime] = useState(0);
    const [fermentationName, setFermentationName] = useState("");
    const [fermentationDescription, setFermentationDescription] = useState("");
    const [cultures, setCultures] = useState([]);
    const [fermentables, setFermentables] = useState([]);
    const [hops, setHops] = useState([]);
    const [miscs, setMiscs] = useState([]);

    /* ACTIONS */
    const closeAction = () => setStepOverlay(null);
    const addStep = (data, section) => {
        if (section === "mash") setMashSteps([...mashSteps, data]);
        if (section === "boil") setBoilSteps([...boilSteps, data]);
        if (section === "fermentation")
            setFermentationSteps([...fermentationSteps, data]);
        if (section === "cultures") setCultures([...cultures, data]);
        if (section === "fermentables")
            setFermentables([...fermentables, data]);
        if (section === "hops") setHops([...hops, data]);
        if (section === "miscs") setMiscs([...miscs, data]);
        setStepOverlay(null);
    };
    const removeItem = (section, position) => {
        if (section === "mash")
            setMashSteps(mashSteps.filter((x, j) => j !== position));
        if (section === "boil")
            setBoilSteps(boilSteps.filter((x, j) => j !== position));
        if (section === "fermentation")
            setFermentationSteps(
                fermentationSteps.filter((x, j) => j !== position)
            );
        if (section === 0)
            setCultures(cultures.filter((x, j) => j !== position));
        if (section === 1)
            setFermentables(fermentables.filter((x, j) => j !== position));
        if (section === 2) setHops(hops.filter((x, j) => j !== position));
        if (section === 3) setMiscs(miscs.filter((x, j) => j !== position));
    };

    const sendRecipeToMongo = async () => {
        const data = {
            name: beerName,
            description: beerDescription,
            type: beerType,
            author: author,
            batch_size: totalVolume,
            style: beerStyle,
            ingredients: {
                hops: hops,
                cultures: cultures,
                fermentables: fermentables,
                miscs: miscs,
            },
            mash: {
                name: mashName,
                description: mashDescription,
                grainTemperature: mashStartTemp,
                mashSteps: mashSteps,
            },
            originalGravity: startGravity,
            finalGravity: endGravity,
            alcoholByVolume: alcohol,
            ibuEstimate: ibu,
            colorEstimate: beerColor,
            fermentation: {
                name: fermentationName,
                description: fermentationDescription,
                fermentationSteps: fermentationSteps,
            },
            boil: {
                name: boilName,
                description: boilDescription,
                preBoilSize: volumeBeforeBoil,
                boilTime: boilingTime,
                boilSteps: boilSteps,
            },
        };
        console.log("DATA 🔥",data);
        await fetch(`${config.base_url}/api/recipes`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${props.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    };

    /* DISPLAYS */
    const mashStepsDisplay = mashSteps.map((el, i) => (
        <ListItem
            title={el.name}
            btnType="minus"
            key={i}
            onPress={() => removeItem("mash", i)}
        />
    ));

    const boilStepsDisplay = boilSteps.map((el, i) => (
        <ListItem
            title={el.name}
            btnType="minus"
            key={i}
            onPress={() => removeItem("boil", i)}
        />
    ));

    const fermentationStepsDisplay = fermentationSteps.map((el, i) => (
        <ListItem
            title={el.name}
            btnType="minus"
            key={i}
            onPress={() => removeItem("fermentation", i)}
        />
    ));

    const allIngredientsDisplay = [];
    [cultures, fermentables, hops, miscs].forEach((ingredientType, j) => {
        ingredientType.forEach((el, i) => {
            allIngredientsDisplay.push(
                <ListItem
                    title={el.name}
                    btnType="minus"
                    key={j + i}
                    onPress={() => removeItem(j, i)}
                />
            );
        });
    });

    return (
        <View style={style.mainContainer}>
            <View style={style.header}>
                <Header title="Créer une recette" />
            </View>
            <ScrollView contentContainerStyle={style.formContainer}>
                <View style={style.inputContainer}>
                    <Input
                        type="text"
                        placeholder="Nom de la bière"
                        onChangeText={(e) => setBeerName(e)}
                    />
                </View>
                {mainInfoToggle && (
                    <View>
                        <View style={style.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Type de bière"
                                onChangeText={(e) => setBeerType(e)}
                            />
                        </View>
                        <View style={style.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Style de bière"
                                onChangeText={(e) => setBeerStyle(e)}
                            />
                        </View>
                        <View style={style.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Description"
                                onChangeText={(e) => setBeerDescription(e)}
                            />
                        </View>
                        <View style={style.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Auteur"
                                onChangeText={(e) => setAuthor(e)}
                            />
                        </View>
                        <View style={style.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Volume final"
                                onChangeText={(e) => setTotalVolume(e)}
                            />
                        </View>
                        <View style={style.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Densité initiale"
                                onChangeText={(e) => setStartGravity(e)}
                            />
                        </View>
                        <View style={style.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Densité finale"
                                onChangeText={(e) => setEndGravity(e)}
                            />
                        </View>
                        <View style={style.inputContainer}>
                            <Input
                                type="text"
                                placeholder="% d'alcool"
                                onChangeText={(e) => setAlcohol(e)}
                            />
                        </View>
                        <View style={style.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Estimation de l'IBU"
                                onChangeText={(e) => setIbu(e)}
                            />
                        </View>
                        <View style={style.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Couleur en EBC"
                                onChangeText={(e) => setBeerColor(e)}
                            />
                        </View>
                    </View>
                )}
                <View style={style.inputContainer}>
                    <CustomButton
                        type="mainInfo"
                        reverse={mainInfoToggle}
                        onPress={() => setMainInfoToggle(!mainInfoToggle)}
                    />
                </View>
                <View style={[StyleGuide.divider, style.dividerColor]} />
                <View style={style.sectionContainer}>
                    <Text
                        style={[
                            StyleGuide.typography.text1,
                            style.titleContainer,
                        ]}
                    >
                        Ingrédients
                    </Text>
                    {allIngredientsDisplay.length > 0 ? (
                        <List>{allIngredientsDisplay}</List>
                    ) : (
                        <Text style={StyleGuide.typography.text3}>
                            Pas encore d'ingrédients ajoutés
                        </Text>
                    )}
                    <View style={style.ingredientsContainer}>
                        <View style={style.inputContainer}>
                            <CustomButton
                                type="addItem"
                                customText="Malts"
                                onPress={() => setStepOverlay("fermentables")}
                            />
                        </View>
                        <View style={style.inputContainer}>
                            <CustomButton
                                type="addItem"
                                customText="Levures"
                                onPress={() => setStepOverlay("cultures")}
                            />
                        </View>
                        <View style={style.inputContainer}>
                            <CustomButton
                                type="addItem"
                                customText="Houblons"
                                onPress={() => setStepOverlay("hops")}
                            />
                        </View>
                        <View style={style.inputContainer}>
                            <CustomButton
                                type="addItem"
                                customText="Autres"
                                onPress={() => setStepOverlay("miscs")}
                            />
                        </View>
                    </View>
                </View>
                <View style={[StyleGuide.divider, style.dividerColor]} />
                <View style={style.sectionContainer}>
                    <Text
                        style={[
                            StyleGuide.typography.text1,
                            style.titleContainer,
                        ]}
                    >
                        Empatage
                    </Text>
                    {mashInfoToggle && (
                        <View>
                            <View style={style.inputContainer}>
                                <Input
                                    type="text"
                                    placeholder="Nom de l'empatage"
                                    onChangeText={(e) => setMashName(e)}
                                />
                            </View>
                            <View style={style.inputContainer}>
                                <Input
                                    type="text"
                                    placeholder="Description"
                                    onChangeText={(e) => setMashDescription(e)}
                                />
                            </View>
                            <View style={style.inputContainer}>
                                <Input
                                    type="text"
                                    placeholder="Température des ingrédients"
                                    onChangeText={(e) => setMashStartTemp(e)}
                                />
                            </View>
                        </View>
                    )}
                    <View style={style.inputContainer}>
                        <CustomButton
                            type="mainInfo"
                            reverse={mashInfoToggle}
                            onPress={() => setMashInfoToggle(!mashInfoToggle)}
                        />
                    </View>
                    {mashStepsDisplay.length > 0 ? (
                        <List>{mashStepsDisplay}</List>
                    ) : (
                        <Text style={StyleGuide.typography.text3}>
                            Pas encore d'étapes d'empatage ajoutées
                        </Text>
                    )}
                    <View style={style.addContainer}>
                        <CustomButton
                            type="add"
                            onPress={() => setStepOverlay("mash")}
                        />
                    </View>
                </View>
                <View style={[StyleGuide.divider, style.dividerColor]} />
                <View style={style.sectionContainer}>
                    <Text
                        style={[
                            StyleGuide.typography.text1,
                            style.titleContainer,
                        ]}
                    >
                        Ébullition
                    </Text>
                    {boilInfoToggle && (
                        <View>
                            <View style={style.inputContainer}>
                                <Input
                                    type="text"
                                    placeholder="Nom de l'ébullition"
                                    onChangeText={(e) => setBoilName(e)}
                                />
                            </View>
                            <View style={style.inputContainer}>
                                <Input
                                    type="text"
                                    placeholder="Description"
                                    onChangeText={(e) => setBoilDescription(e)}
                                />
                            </View>
                            <View style={style.inputContainer}>
                                <Input
                                    type="text"
                                    placeholder="Volume avant ébullition"
                                    onChangeText={(e) => setVolumeBeforeBoil(e)}
                                />
                            </View>
                            <View style={style.inputContainer}>
                                <Input
                                    type="text"
                                    placeholder="Temps total d'ébullition"
                                    onChangeText={(e) => setBoilingTime(e)}
                                />
                            </View>
                        </View>
                    )}
                    <View style={style.inputContainer}>
                        <CustomButton
                            type="mainInfo"
                            reverse={boilInfoToggle}
                            onPress={() => setBoilInfoToggle(!boilInfoToggle)}
                        />
                    </View>
                    {boilStepsDisplay.length > 0 ? (
                        <List>{boilStepsDisplay}</List>
                    ) : (
                        <Text style={StyleGuide.typography.text3}>
                            Pas encore d'étapes d'ébullition ajoutées
                        </Text>
                    )}
                    <View style={style.addContainer}>
                        <CustomButton
                            type="add"
                            onPress={() => setStepOverlay("boil")}
                        />
                    </View>
                </View>
                <View style={[StyleGuide.divider, style.dividerColor]} />
                <View style={style.sectionContainer}>
                    <Text
                        style={[
                            StyleGuide.typography.text1,
                            style.titleContainer,
                        ]}
                    >
                        Fermentation
                    </Text>
                    {fermentationInfoToggle && (
                        <View>
                            <View style={style.inputContainer}>
                                <Input
                                    type="text"
                                    placeholder="Nom de la fermentation"
                                    onChangeText={(e) => setFermentationName(e)}
                                />
                            </View>
                            <View style={style.inputContainer}>
                                <Input
                                    type="text"
                                    placeholder="Description"
                                    onChangeText={(e) =>
                                        setFermentationDescription(e)
                                    }
                                />
                            </View>
                        </View>
                    )}
                    <View style={style.inputContainer}>
                        <CustomButton
                            type="mainInfo"
                            reverse={fermentationInfoToggle}
                            onPress={() =>
                                setFermentationInfoToggle(
                                    !fermentationInfoToggle
                                )
                            }
                        />
                    </View>
                    {fermentationStepsDisplay.length > 0 ? (
                        <List>{fermentationStepsDisplay}</List>
                    ) : (
                        <Text style={StyleGuide.typography.text3}>
                            Pas encore d'étapes de fermentation ajoutées
                        </Text>
                    )}
                    <View style={style.addContainer}>
                        <CustomButton
                            type="add"
                            onPress={() => setStepOverlay("fermentation")}
                        />
                    </View>
                </View>
                <View style={[StyleGuide.divider, style.dividerColor]} />
                <CustomButton
                    style={style.validateBtn}
                    title="Créer cette recette"
                    onPress={() => sendRecipeToMongo()}
                />
            </ScrollView>
            {stepOverlay && (
                <CreateRecipeElementOverlay
                    section={stepOverlay}
                    closeAction={closeAction}
                    validateAction={addStep}
                />
            )}
        </View>
    );
};

function mapStateToProps(state) {
    return { token: state.token };
}

export default connect(mapStateToProps, null)(CreateRecipe);

/* STYLES */
const style = StyleSheet.create({
    mainContainer: {
        paddingTop: 60,
        backgroundColor: StyleGuide.colors.white,
        justifyContent: "flex-start",
        height: "100%",
    },
    formContainer: {
        alignItems: "center",
        width: "100%",
        paddingBottom: 70,
    },
    header: { left: 25 },
    inputContainer: {
        margin: 10,
    },
    dividerColor: { backgroundColor: StyleGuide.colors.primary },
    titleContainer: { textAlign: "left", width: "100%" },
    sectionContainer: { width: "90%", alignItems: "center" },
    addContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },
    validateBtn: {
        position: "absolute",
        bottom: 15,
        alignSelf: "center",
        zIndex: 1,
    },
    ingredientsContainer: {
        flexDirection: "row",
        maxWidth: "100%",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
});
