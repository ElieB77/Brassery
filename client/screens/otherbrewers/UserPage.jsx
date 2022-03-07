import React from "react";
import { View } from "react-native";

import CustomButton from "../../components/CustomButton";

const UserPage = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
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

export default UserPage;