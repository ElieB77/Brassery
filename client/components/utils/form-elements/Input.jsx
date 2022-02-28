import StyleGuide from "../StyleGuide";
import { TextInput, StyleSheet } from "react-native";

const InputText = ({ placeholder, type }) => {
  switch (type) {
    case 'text':
      return (
        <TextInput
          style={[styles.textInput, StyleGuide.shadowProp]}
          placeholder={placeholder}
        />
      );
    case 'password':
      return (
        <TextInput
          secureTextEntry={true}
          style={[styles.textInput, StyleGuide.shadowProp]}
          placeholder='Mot de passe..'
        />
      );
    case 'textarea':
      return (
        <TextInput
          style={[styles.textArea, StyleGuide.shadowProp]}
          underlineColorAndroid='transparent'
          placeholder='Type something'
          placeholderTextColor={placeholder}
          numberOfLines={10}
          multiline={true}
        />
      );
  }
};

const styles = StyleSheet.create({
  textInput: {
    fontFamily: 'Manrope_500Medium',
    backgroundColor: StyleGuide.colors.white,
    width: 300,
    borderRadius: StyleGuide.borderRadius,
    padding: 10,
    paddingLeft: 15,
  },
  textArea: {
    backgroundColor: StyleGuide.colors.white,
    width: 300,
    height: 180,
    borderRadius: StyleGuide.borderRadius,
    paddingTop: 10,
    paddingLeft: 15,
  },
});

export default InputText;
