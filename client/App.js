import { Text, View } from "react-native";
import LoadFonts from "./components/layouts/LoadFonts";
import StyleGuide from "./components/utils/StyleGuide";
import Recipe from "./components/recipes/recipe";
import RecipeItem from "./components/recipes/recipeItem";

const App = () => {
    return (
        <LoadFonts
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Recipe>
                <RecipeItem key={1} title="Hello" content="Lorem ipsum" />
                <RecipeItem key={2} title="Hello" content="Lorem ipsum" />
                <RecipeItem key={3} title="Hello" content="Lorem ipsum" />
            </Recipe>
        </LoadFonts>
    );
};

export default App;
