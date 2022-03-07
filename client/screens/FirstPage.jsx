import React, { useRef, useState } from "react";
import { View, ImageBackground, StyleSheet, Pressable } from "react-native";
import CustomButton from "../components/CustomButton";
import StyleGuide from "../components/utils/StyleGuide";

const FirstPage = ({ navigation }) => {
    /* STYLES */
    const style = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "space-around",
            height: "100%",
        },
        image: {
            width: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },
    });

    return (
        <View style={style.container}>
            <ImageBackground
                source={require("../assets/discovering.jpg")}
                resizeMode="cover"
                style={style.image}
            >
                <CustomButton
                    title="Découvrir le brassage amateur"
                    outline={true}
                    onPress={() => navigation.navigate("Discovering")}
                />
            </ImageBackground>
            <ImageBackground
                source={require("../assets/beer_library.jpg")}
                resizeMode="cover"
                style={style.image}
            >
                <CustomButton
                    title="Parcourir les recette de bières"
                    onPress={() => navigation.navigate("Resources")}
                />
            </ImageBackground>
            <ImageBackground
                source={require("../assets/my_brewery.jpg")}
                resizeMode="cover"
                style={style.image}
            >
                <CustomButton
                    title="Accéder à ma brassery"
                    onPress={() => navigation.navigate("SignIn")}
                />
            </ImageBackground>
        </View>
    );
};

export default FirstPage;
