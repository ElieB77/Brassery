import React from "react";
import { View } from "react-native";

import CustomButton from "../components/CustomButton";

const Home = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}
        >
            <CustomButton
                title="Punk IPA - Batch 🧪"
                onPress={() =>
                    navigation.navigate("Batch", {
                        batchId: "6221fc885223412400e58d54",
                    })
                }
            />
            <CustomButton
                title="Punk IPA - Recipe 🧪"
                onPress={() =>
                    navigation.navigate("Recipe", {
                        recipeId: "6221fc055223412400e58d53",
                    })
                }
            />
        </View>
    );
};

export default Home;
