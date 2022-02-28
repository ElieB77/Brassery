import React from "react";
import { View, Text } from "react-native";
import Recipe from "../components/recipeElements/recipe";
import RecipeDescription from "../components/recipeElements/recipeDescription";
import RecipeItem from "../components/recipeElements/recipeItem";

const Home = () => {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Recipe>
                <RecipeDescription title="Hello world" content="Lorem Ipsum"/>
                <RecipeItem
                    title="Hello"
                    content="lorem ipsum"
                />
                <RecipeItem
                    title="Hello"
                    content="Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. 
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur 
                    non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. 
                    Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat."
                />
            </Recipe>
        </View>
    );
};

export default Home;
