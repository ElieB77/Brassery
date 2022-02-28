import { View } from "react-native";

import Recipe from "../components/recipeElements/recipe";
import RecipeItem from "../components/recipeElements/recipeItem";
import RecipeDescription from "../components/recipeElements/recipeDescription";

import StyleGuide from "../components/utils/StyleGuide";


const Home = () => {
    return (
        <View style={[StyleGuide.container,{alignItems:"center"}]}>
            <Recipe>
                <RecipeDescription title="Lore Ipsum" content="Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget 
                    consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus.
                    Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris 
                    blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam 
                    id dui posuere blandit."/>
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

export default Home;
