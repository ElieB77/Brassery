import React from "react";
import { View, Text } from "react-native";

import CustomButton from "../components/CustomButton";

const Home = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Ma Brasserie</Text>
            <CustomButton
                title="Aller sur La Recette"
                onPress={() =>
                    navigation.navigate("LaRecette", {
                        recipeId: "621dd788d5669c587bb066b3",
                    })
                }
            />
        </View>
    );
};

export default Home;
