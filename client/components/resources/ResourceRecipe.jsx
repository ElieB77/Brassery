import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import StyleGuide from "../../components/utils/StyleGuide";
import Header from "../../components/headings/Header";
import Input from "../../components/utils/form-elements/Input";
import Dropdown from "../../components/utils/form-elements/Dropdown";
import Slider from "@react-native-community/slider";
import List from "../../components/lists/list";
import ListItem from "../../components/lists/listItem";

const ResourceRecipe = (props) => {
    const [range, setRange] = useState("50%");
    const [bitternessRange, setBitternessRange] = useState("50%");

    return (
        <View style={[StyleGuide.container, { alignItems: "center" }]}>
            <Header title="Resources" />
            {/* Navigation */}
            <View style={styles.btnGroup}>
                <Pressable onPress={() => props.changeResource("recipes")}>
                    <Text
                        style={[
                            StyleGuide.typography.text3,
                            styles.btnGroupText,
                            { textDecorationLine: "underline" },
                        ]}
                    >
                        Recettes
                    </Text>
                </Pressable>
                <Pressable onPress={() => props.changeResource("ingredients")}>
                    <Text
                        style={[
                            StyleGuide.typography.text3,
                            styles.btnGroupText,
                        ]}
                    >
                        Ingrédients
                    </Text>
                </Pressable>
                <Pressable onPress={() => props.changeResource("equipments")}>
                    <Text
                        style={[
                            StyleGuide.typography.text3,
                            styles.btnGroupText,
                        ]}
                    >
                        Matériels
                    </Text>
                </Pressable>
            </View>
            {/* Filter */}
            <View style={styles.filterContainer}>
                <View style={{ marginBottom: 15 }}>
                    <Text
                        style={[
                            StyleGuide.typography.text3,
                            styles.filterLabel,
                        ]}
                    >
                        Recherche par mots clés
                    </Text>
                    <Input type="text" placeholder={"Pale Ale.."} />
                </View>
                <View style={{ position: "relative", zIndex: 10 }}>
                    <Text
                        style={[
                            StyleGuide.typography.text3,
                            styles.filterLabel,
                        ]}
                    >
                        Type de bière
                    </Text>
                    <Dropdown title={"Bière blonde"} />
                </View>
                <View style={{ position: "relative", zIndex: 9 }}>
                    <Text
                        style={[
                            StyleGuide.typography.text3,
                            styles.filterLabel,
                        ]}
                    >
                        Inclus les ingrédients suivants
                    </Text>
                    <Dropdown title={"Bière blonde"} />
                </View>
                {/* Slider */}
                <View style={{ marginTop: 20 }}>
                    <View>
                        <Text
                            style={[
                                StyleGuide.typography.text3,
                                styles.filterLabel,
                            ]}
                        >
                            Couleur de la bière
                        </Text>
                        <Slider
                            style={{ width: 300 }}
                            minimumValue={0}
                            maximumValue={1}
                            value={0.5}
                            minimumTrackTintColor={StyleGuide.colors.secondary}
                            maximumTrackTintColor="#000000"
                            thumbTintColor={StyleGuide.colors.primary}
                            onValueChange={(value) =>
                                setRange(Math.floor(value * 100) + "%")
                            }
                        />
                        <Text style={{ textAlign: "center" }}>{range}</Text>
                    </View>
                    <View>
                        <Text
                            style={[
                                StyleGuide.typography.text3,
                                styles.filterLabel,
                            ]}
                        >
                            Amertume de la bière
                        </Text>
                        <Slider
                            style={{ width: 300 }}
                            minimumValue={0}
                            maximumValue={1}
                            value={0.5}
                            minimumTrackTintColor={StyleGuide.colors.secondary}
                            maximumTrackTintColor="#000000"
                            thumbTintColor={StyleGuide.colors.primary}
                            onValueChange={(value) =>
                                setBitternessRange(
                                    Math.floor(value * 100) + "%"
                                )
                            }
                        />
                        <Text style={{ textAlign: "center" }}>
                            {bitternessRange}
                        </Text>
                    </View>
                </View>
            </View>
            {/* List */}
            <View>
                <List>
                    <ListItem
                        title="Citra IPA"
                        content="Très bonne bière !"
                        btnType="next"
                        onPress={() =>
                            props.navigation.navigate("Recipe", {
                                recipeId: "6221fc055223412400e58d53",
                            })
                        }
                    />
                    <ListItem title="test" content="test" btnType="next" />
                    <ListItem title="test" content="test" btnType="next" />
                    <ListItem title="test" content="test" btnType="next" />
                    <ListItem title="test" content="test" btnType="next" />
                    <ListItem title="test" content="test" btnType="next" />
                    <ListItem title="test" content="test" btnType="next" />
                    <ListItem title="test" content="test" btnType="next" />
                </List>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    btnGroup: {
        width: 300,
        height: 46,
        backgroundColor: StyleGuide.colors.primary,
        borderRadius: StyleGuide.borderRadius,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    btnGroupText: {
        color: StyleGuide.colors.secondary,
    },
    filterContainer: {
        marginTop: 30,
    },
    filterLabel: {
        marginBottom: 5,
        color: StyleGuide.colors.gray,
    },
});
export default ResourceRecipe;
