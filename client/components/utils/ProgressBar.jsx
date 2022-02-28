import { View, StyleSheet } from "react-native";
import StyleGuide from "../utils/StyleGuide";

const ProgressBar = ({ pourcent }) => {
  return (
    <View style={[styles.container, StyleGuide.shadowProp]}>
      <View
        style={{
          backgroundColor: StyleGuide.colors.secondary,
          height: "100%",
          width: `${pourcent}%`,
          borderRadius: 8,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 300,
    height: 8,
    borderRadius: StyleGuide.borderRadius,
    backgroundColor: StyleGuide.colors.primary,
  },
});

export default ProgressBar;
