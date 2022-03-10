import React, { Fragment, useEffect, useState } from "react";
import { View, Text, SegmentedControlIOSComponent } from "react-native";

import StyleGuide from "../../components/utils/StyleGuide";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../components/headings/Header";
import config from "../../config/globalVariables";
import List from "../../components/lists/list";
import ListItem from "../../components/lists/listItem";
import { connect } from "react-redux";
import recipe from "../../components/recipeElements/recipe";

const MyBatches = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [batches, setBatches] = useState([]);
  let temp = [];

  console.log("-------------------------------");

  useEffect(() => {
    AsyncStorage.getItem("userId", function (error, data) {
      if (data != null) {
        async function loadData() {
          // Find batches
          const rawResponse = await fetch(
            `${config.base_url}/api/batches/findbyuser`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${data}`,
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: `userId=${data}`,
            }
          );
          const response = await rawResponse.json();

          let batchArr = [];

          for (let i = 0; i < response.data.length; i++) {
            const rawResponse2 = await fetch(
              `${config.base_url}/api/recipes/${response.data[i].recipe}`,
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${data}`,
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              }
            );
            const response2 = await rawResponse2.json();
            const countDone = 0;
            response.data[i].stepsStatus.forEach((x, i) => {
              if (x.isDone) countDone++;
            });
            batchArr.push({
              date: response.data[i].createdAt,
              recipeName: response2.name,
              stepsStatus: response.data[i].stepsStatus,
              batchId: response.data[i]._id,
              percentageDone:
                (countDone / response.data[i].stepsStatus.length) * 100,
            });
          }

          setBatches(batchArr);
          console.log(batchArr);
        }
        loadData();
      }
    });
  }, []);

  return (
    <View style={StyleGuide.container}>
      <Header title={"MES BRASSINS"} />
      <List>
        {batches.map((el, i) => {
          let date;
          date = `${new Date(el.date).toLocaleDateString("fr-FR")}\nTerminé à ${
            el.percentageDone
          }%`;
          return (
            <ListItem
              key={i}
              title={el.recipeName}
              content={date}
              btnType={"next"}
              onPress={() =>
                props.navigation.navigate("Batch", {
                  batchId: el.batchId,
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
  return {
    token: state.token,
  };
}

export default connect(mapStateToProps, null)(MyBatches);
