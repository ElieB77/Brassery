import StyleGuide from "../StyleGuide";
import { TextInput, StyleSheet, View } from "react-native";
import Search from "../icons/Search";

const InputText = ({ placeholder, type, onChangeText, value }) => {
    switch (type) {
        case "text":
            return (
                <TextInput
                    style={[styles.textInput, StyleGuide.shadowProp]}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                />
            );
        case "password":
            return (
                <TextInput
                    secureTextEntry={true}
                    style={[styles.textInput, StyleGuide.shadowProp]}
                    placeholder="Mot de passe.."
                    onChangeText={onChangeText}
                    value={value}
                />
            );
        case "textArea":
            return (
                <TextInput
                    style={[styles.textArea, StyleGuide.shadowProp]}
                    underlineColorAndroid="transparent"
                    placeholder="Type something"
                    placeholderTextColor={placeholder}
                    numberOfLines={10}
                    multiline={true}
                    onChangeText={onChangeText}
                    value={value}
                />
            );
        case "searchInput":
            return (
                <View style={styles.searchInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={placeholder}
                    />
                    <View style={styles.searchIcon}>
                        <Search />
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
