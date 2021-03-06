import StyleGuide from "../StyleGuide";
import { TextInput, StyleSheet, View, Pressable } from "react-native";
import Search from "../icons/Search";


const InputText = ({
  placeholder,
  type,
  onChangeText,
  value,
  onPress,
  style,
}) => {
  switch (type) {
    case 'text':
      return (
        <TextInput
          style={[styles.textInput, StyleGuide.shadowProp, style]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
        />
      );
    case 'password':
      return (
        <TextInput
          secureTextEntry={true}
          style={[styles.textInput, StyleGuide.shadowProp, style]}
          placeholder={placeholder ? placeholder : 'Mot de passe...'}
          onChangeText={onChangeText}
          value={value}
        />
      );
    case 'textArea':
      return (
        <TextInput
          style={[styles.textArea, StyleGuide.shadowProp, style]}
          underlineColorAndroid='transparent'
          placeholder='Écrivez quelque chose'
          placeholderTextColor={placeholder}
          numberOfLines={10}
          multiline={true}
          onChangeText={onChangeText}
          value={value}
        />
      );
    case 'searchInput':
      return (
        <View style={[styles.searchInput, style]}>
          <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            onChangeText={onChangeText}
          />
          <View style={styles.searchIcon}>
            <Pressable onPress={onPress}>
              <Search />
            </Pressable>
          </View>
        </View>
      );
  }
};

const styles = StyleSheet.create({
    textInput: {
        fontFamily: "Manrope_500Medium",
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
