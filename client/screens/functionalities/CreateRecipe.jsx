import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import StyleGuide from "../../components/utils/StyleGuide";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/utils/form-elements/Input";
import Header from "../../components/headings/Header";
import CreateRecipeElementOverlay from "../../components/overlays/CreateRecipeElementOverlay";
import List from "../../components/lists/list";
import ListItem from "../../components/lists/listItem";

const CreateRecipe = ({ route, navigation }) => {
    /* STATES */
    const [stepOverlay, setStepOverlay] = useState(null);
    const [mainInfoToggle, setMainInfoToggle] = useState(false);
    const [mashInfoToggle, setMashInfoToggle] = useState(false);
    const [boilInfoToggle, setBoilInfoToggle] = useState(false);
    const [fermentationInfoToggle, setFermentationInfoToggle] = useState(false);
    const [mashSteps, setMashSteps] = useState([]);
    const [boilSteps, setBoilSteps] = useState([]);
    const [fermentationSteps, setFermentationSteps] = useState([]);

    const closeAction = () => setStepOverlay(null);
    const addStep = (data, section) => {
        if (section === "mash") setMashSteps([...mashSteps, data]);
        if (section === "boil") setBoilSteps([...boilSteps, data]);
        if (section === "fermentation")
            setFermentationSteps([...fermentationSteps, data]);
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
    };

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

    return (
        <View style={style.mainContainer}>
            <View style={style.header}>
                <Header title="Créer une recette" />
            </View>
            <ScrollView contentContainerStyle={style.formContainer}>
                <View style={style.inputContainer}>
                    <Input type="text" placeholder="Nom de la bière" />
                </View>
                {mainInfoToggle && (
                    <View>
                        <View style={style.inputContainer}>
                            <Input type="text" placeholder="Type de bière" />
                        </View>
                        <View style={style.inputContainer}>
                            <Input type="text" placeholder="Description" />
                        </View>
                        <View style={style.inputContainer}>
                            <Input type="text" placeholder="Volume final" />
                        </View>
                        <View style={style.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Densité de départ"
                            />
                        </View>
                        <View style={style.inputContainer}>
                            <Input type="text" placeholder="Densité finale" />
                        </View>
                        <View style={style.inputContainer}>
                            <Input type="text" placeholder="% d'alcool" />
                        </View>
                        <View style={style.inputContainer}>
                            <Input
                                type="text"
                                placeholder="Estimation de l'IBU"
                            />
                        </View>
                        <View style={style.inputContainer}>
                            <Input type="text" placeholder="Couleur en EBC" />
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
                        Empatage
                    </Text>
                    {mashInfoToggle && (
                        <View>
                            <View style={style.inputContainer}>
                                <Input
                                    type="text"
                                    placeholder="Nom de l'empatage"
                                />
                            </View>
                            <View style={style.inputContainer}>
                                <Input type="text" placeholder="Description" />
                            </View>
                            <View style={style.inputContainer}>
                                <Input
                                    type="text"
                                    placeholder="Température des ingrédients"
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
                                />
                            </View>
                            <View style={style.inputContainer}>
                                <Input type="text" placeholder="Description" />
                            </View>
                            <View style={style.inputContainer}>
                                <Input
                                    type="text"
                                    placeholder="Volume avant ébullition"
                                />
                            </View>
                            <View style={style.inputContainer}>
                                <Input
                                    type="text"
                                    placeholder="Temps total d'ébullition"
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
                                />
                            </View>
                            <View style={style.inputContainer}>
                                <Input type="text" placeholder="Description" />
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
            </ScrollView>
            {stepOverlay && (
                <CreateRecipeElementOverlay
                    section={stepOverlay}
                    closeAction={closeAction}
                    validateAction={addStep}
                />
            )}
            <CustomButton style={style.validateBtn} title="Valider" />
        </View>
    );
};

export default CreateRecipe;

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
        paddingBottom: 30,
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
        alignSelf: "center",
        backgroundColor: "transparent",
    },
});
