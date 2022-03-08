import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../components/headings/Header';
import StyleGuide from '../../components/utils/StyleGuide';

import config from '../../config/globalVariables';

import List from '../../components/lists/list';
import ListItem from '../../components/lists/listItem';

const BeerLiked = ({ token, navigation }) => {
  const [recipes, setRecipes] = useState([]);
  const [recipesId, setRecipesId] = useState([]);

  useEffect(() => {
    async function getUser() {
      const rawResponse = await fetch(`${config.base_url}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await rawResponse.json();

      if (response.data) {
        for (const id of response.data.likedRecipes) {
          setRecipesId((prevState) => [...prevState, id]);
        }
      }
    }
    getUser();
  }, []);

  useEffect(() => {
    async function getRecipes() {
      const newRawResponse = await fetch(`${config.base_url}/api/recipes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newResponse = await newRawResponse.json();

      for (const recipe of newResponse.data) {
        if (recipesId.includes(recipe._id))
          setRecipes((prevState) => [...prevState, recipe]);
      }
    }
    getRecipes();
  }, [recipesId]);

  return (
    <View style={StyleGuide.container}>
      <Header title='mes recettes likées' />
      <List>
        {recipes.map((item, index) => {
          return (
            <ListItem
              key={index}
              title={item.name}
              content={item.description}
              btnType='next'
              onPress={() =>
                navigation.navigate('Recipe', {
                  recipeId: item._id,
                })
              }
            />
          );
        })}
      </List>
    </View>
  );
};

function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps, null)(BeerLiked);
