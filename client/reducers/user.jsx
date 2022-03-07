export default function (user = {}, action) {
  switch (action.type) {
    case 'updatebrewedYetUser':
      let updatebrewedYetUser = { ...user };
      updatebrewedYetUser.brewedYet = action.brewedYet;
      return updatebrewedYetUser;
    case 'updateFavoriteBeertUser':
      let updateFavoriteBeertUser = { ...user };
      updateFavoriteBeertUser.favoriteBeer = action.favoriteBeer;
      return updateFavoriteBeertUser;
    case 'updateLocalisationUser':
      let updateLocalisationUser = { ...user };
      updateLocalisationUser.localisation = action.localisation;
      return updateLocalisationUser;
    case 'updateAvatarUser':
      let updateAvatarUser = { ...user };
      updateAvatarUser.avatar = action.avatar;
      return updateAvatarUser;
    case 'updateBrewedDescription':
      let updateBrewedDescription = { ...user };
      updateBrewedDescription.description = action.description;
      return updateBrewedDescription;
    case 'updateInstallationDescription':
      let updateInstallationDescription = { ...user };
      updateInstallationDescription.updateInstallationDescription =
        action.installationDescription;
      return updateInstallationDescription;
    case 'updateInstallationPhoto':
      let updateInstallationPhoto = { ...user };
      updateInstallationPhoto.photo = action.photo;
      return updateInstallationPhoto;
    case 'updateAddEmptyTab':
      let updateAddEmptyTab = { ...user };
      updateAddEmptyTab.materials = [];
      return updateAddEmptyTab;
    case 'updateMaterials':
      let updateMaterials = { ...user };
      updateMaterials.materials = action.materials;
      return updateMaterials;
    default:
      return user;
  }
}
