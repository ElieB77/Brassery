import StyleGuide from "../StyleGuide";
import { TextInput, StyleSheet, View } from "react-native";
import Search from "../icons/Search";

const InputText = ({ placeholder, type }) => {
  switch (type) {
    case "text":
      return <TextInput style={styles.textInput} placeholder={placeholder} />;
    case "password":
      return (
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          placeholder="Mot de passe.."
        />
      );
    case "textArea":
      return (
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Type something"
          placeholderTextColor={placeholder}
          numberOfLines={10}
          multiline={true}
        />
      );
    case "searchInput":
      return (
        <View style={styles.searchInput}>
          <TextInput style={styles.textInput} placeholder={placeholder} />
          <View style={styles.searchIcon}>
            <Search />
          </View>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: StyleGuide.colors.white,
    width: 300,
    borderRadius: StyleGuide.borderRadius,
    padding: 10,
    paddingLeft: 15,
    shadowColor: StyleGuide.shadowProp.shadowColor,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: StyleGuide.shadowProp.shadowOpacity,
    shadowRadius: StyleGuide.shadowProp.shadowRadius,
  },
  textArea: {
    backgroundColor: StyleGuide.colors.white,
    width: 300,
    height: 180,
    borderRadius: StyleGuide.borderRadius,
    paddingTop: 10,
    paddingLeft: 15,
    shadowColor: StyleGuide.shadowProp.shadowColor,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: StyleGuide.shadowProp.shadowOpacity,
    shadowRadius: StyleGuide.shadowProp.shadowRadius,
  },
  searchInput: {
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    right: 0,
    paddingRight: 15,
    paddingBottom: 10,
    paddingTop: 10,
  },
});

export default InputText;
