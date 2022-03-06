import React, { useState } from "react";
import ResourceRecipe from "./ResourceRecipe";
import ResourceIngredient from "./ResourceIngredient";
import ResourceEquipment from "./ResourceEquipment";

const Ressources = () => {
  const [resourceType, setResourceType] = useState("recipes");

  if (resourceType === "recipes") {
    return (
      <ResourceRecipe
        changeResource={(resource) => setResourceType(resource)}
      />
    );
  } else if (resourceType === "ingredients") {
    return (
      <ResourceIngredient
        changeResource={(resource) => setResourceType(resource)}
      />
    );
  } else if (resourceType === "equipments") {
    return (
      <ResourceEquipment
        changeResource={(resource) => setResourceType(resource)}
      />
    );
  }
};

export default Ressources;
