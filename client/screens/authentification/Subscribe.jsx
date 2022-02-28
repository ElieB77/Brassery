import { StyleSheet, View, Text } from "react-native";
import Header from "../../components/headings/Header";
import StyleGuide from "../../components/utils/StyleGuide";
import Recipe from "../../components/recipeElements/recipe";
import RecipeItem from "../../components/recipeElements/recipeItem";
import RecipeDescription from "../../components/recipeElements/recipeDescription";

const subscribe = () => {
    return (
        <View style={StyleGuide.container}>
            <Recipe>
                <RecipeItem
                    title="Hello"
                    content="Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget 
                    consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus.
                    Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris 
                    blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam 
                    id dui posuere blandit."
                />
                <RecipeItem
                    title="Hello"
                    content="Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget 
                    consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus.
                    Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris 
                    blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam 
                    id dui posuere blandit."
                />
            </Recipe>
        </View>
    );
};

export default subscribe;
