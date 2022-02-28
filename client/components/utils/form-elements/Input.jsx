import StyleGuide from "../StyleGuide";
import { TextInput, StyleSheet } from "react-native";

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
    case "textarea":
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
});

export default InputText;
