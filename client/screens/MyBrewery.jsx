import React from "react";
import { View, Text } from "react-native";
import Recipe from "../components/recipeElements/recipe";
import RecipeDescription from "../components/recipeElements/recipeDescription";
import RecipeItem from "../components/recipeElements/recipeItem";

import CustumButton from '../components/CustomButton';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ma Brasserie</Text>
    </View>
  );
};

export default Home;
