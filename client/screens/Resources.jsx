import React, { useState } from "react";
import ResourceRecipe from "../components/resources/ResourceRecipe";
import ResourceIngredient from "../components/resources/ResourceIngredient";
import ResourceEquipment from "../components/resources/ResourceEquipment";

const Resources = (props) => {
    const [resourceType, setResourceType] = useState("recipes");

    if (resourceType === "recipes") {
        return (
            <ResourceRecipe
                changeResource={(resource) => setResourceType(resource)}
                navigation={props.navigation}
            />
        );
    } else if (resourceType === "ingredients") {
        return (
            <ResourceIngredient
                changeResource={(resource) => setResourceType(resource)}
                navigation={props.navigation}
            />
        );
    } else if (resourceType === "equipments") {
        return (
            <ResourceEquipment
                changeResource={(resource) => setResourceType(resource)}
                navigation={props.navigation}
            />
        );
    }
};

export default Resources;
