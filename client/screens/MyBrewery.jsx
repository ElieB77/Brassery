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
                        batchId: "6220deee5223412400e58be6",
                    })
                }
            />
            <CustomButton
                title="Punk IPA - Recipe 🧪"
                onPress={() =>
                    navigation.navigate("Recipe", {
                        recipeId: "621dd788d5669c587bb066b3",
                    })
                }
            />
        </View>
    );
};

export default Home;
