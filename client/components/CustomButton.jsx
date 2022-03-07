import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Comment from "./utils/icons/Comment";
import Search from "./utils/icons/Search";
import Next from "./utils/icons/Next";
import Close from "./utils/icons/Close";
import Add from "./utils/icons/Add";
import Settings from "./utils/icons/Settings";
import Minus from "./utils/icons/Minus";
import Gravity from "./utils/icons/Gravity";
import More from "./utils/icons/More";
import Convert from "./utils/icons/Convert";
import Timer from "./utils/icons/Timer";
import Brasser from "./utils/icons/Brasser";
import Fermentable from "./utils/icons/Fermentable";
import Yeast from "./utils/icons/Yeast";
import Other from "./utils/icons/Other";
import Heart from "./utils/icons/Heart";
import StyleGuide from "./utils/StyleGuide";

const CustomButton = ({
  onPress,
  title,
  time,
  type,
  border,
  outline,
  style,
}) => {
  switch (type) {
    case 'comment':
      return (
        <TouchableOpacity
          style={[styles.containerIcon, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Comment />
        </TouchableOpacity>
      );
    case 'search':
      return (
        <TouchableOpacity
          style={[styles.containerIcon, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Search />
        </TouchableOpacity>
      );
    case 'next':
      return (
        <TouchableOpacity
          style={[styles.containerIcon, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Next />
        </TouchableOpacity>
      );
    case 'close':
      return (
        <TouchableOpacity
          style={[styles.containerIcon, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Close width='13' height='13' />
        </TouchableOpacity>
      );
    case 'add':
      return (
        <TouchableOpacity
          style={[styles.containerIcon, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Add />
        </TouchableOpacity>
      );
    case 'settings':
      return (
        <TouchableOpacity
          style={[styles.containerIcon, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Settings />
        </TouchableOpacity>
      );
    case 'minus':
      return (
        <TouchableOpacity
          style={[styles.containerIcon, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Minus />
        </TouchableOpacity>
      );
    case 'densimetre':
      return (
        <TouchableOpacity
          style={[styles.containerWithText, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Gravity />
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={styles.text}>Densimètre</Text>
          </View>
        </TouchableOpacity>
      );
    case 'addNote':
      return (
        <TouchableOpacity
          style={[styles.containerWithText, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Add />
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={styles.text}>Ajouter une note</Text>
          </View>
        </TouchableOpacity>
      );
    case 'other':
      return (
        <TouchableOpacity
          style={[styles.containerWithText, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <More />
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={styles.text}>Autre</Text>
          </View>
        </TouchableOpacity>
      );
    case 'convert':
      return (
        <TouchableOpacity
          style={[styles.containerWithText, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Convert />
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={styles.text}>Convertisseurs</Text>
          </View>
        </TouchableOpacity>
      );
    case 'timer':
      return (
        <TouchableOpacity
          style={[styles.containerWithText, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Timer />
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={styles.text}>Timer</Text>
          </View>
        </TouchableOpacity>
      );
    case 'brasser':
      return (
        <TouchableOpacity
          style={[styles.containerBrasser, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Brasser width='43' height='43' />
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={styles.text}>Brasser !</Text>
          </View>
        </TouchableOpacity>
      );
    case 'liker':
      return (
        <TouchableOpacity
          style={[styles.containerLiker, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Heart width='30' height='30' outline={outline} />
        </TouchableOpacity>
      );
    case 'hops':
      return (
        <TouchableOpacity
          style={[styles.containerBrasser, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Brasser width='43' height='43' />
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={styles.text}>Houblon</Text>
          </View>
        </TouchableOpacity>
      );
    case 'fermentables':
      return (
        <TouchableOpacity
          style={[styles.containerBrasser, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Fermentable width='43' height='43' />
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={styles.text}>Malt</Text>
          </View>
        </TouchableOpacity>
      );
    case 'miscs':
      return (
        <TouchableOpacity
          style={[styles.containerBrasser, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Other width='43' height='43' />
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={styles.text}>Autre</Text>
          </View>
        </TouchableOpacity>
      );
    case 'cultures':
      return (
        <TouchableOpacity
          style={[styles.containerBrasser, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Yeast width='43' height='43' />
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={styles.text}>Levure</Text>
          </View>
        </TouchableOpacity>
      );
    case 'plus':
      return (
        <TouchableOpacity
          style={[styles.containerPlus, StyleGuide.shadowProp, style]}
          onPress={onPress}
        >
          <Add color={StyleGuide.colors.primary} />
        </TouchableOpacity>
      );
    case 'time':
      return (
        <TouchableOpacity
          style={[styles.containerTime, StyleGuide.shadowProp, style]}
        >
          <Close
            onPress={onPress}
            width='12'
            height='12'
            color={StyleGuide.colors.primary}
          />
          <Text style={styles.textTime}>{time}</Text>
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity
          style={[
            style,
            styles.container,
            StyleGuide.shadowProp,
            border && {
              borderColor: StyleGuide.colors.secondary,
              borderStyle: 'solid',
              borderWidth: 1,
            },
          ]}
          onPress={onPress}
        >
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      );
  }
};

const styles = StyleSheet.create({
    containerIcon: {
        backgroundColor: StyleGuide.colors.primary,
        borderRadius: StyleGuide.borderRadius,
        justifyContent: "center",
        alignItems: "center",
        width: 45,
        height: 30,
    },
    containerWithText: {
        backgroundColor: StyleGuide.colors.primary,
        borderRadius: StyleGuide.borderRadius,
        paddingTop: 5,
        paddingBottom: 6,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: "row",
        alignItems: "center",
        width: 145,
        height: 30,
    },
    containerBrasser: {
        backgroundColor: StyleGuide.colors.primary,
        borderRadius: StyleGuide.borderRadius,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 45,
        paddingRight: 45,
        justifyContent: "space-evenly",
        alignItems: "center",
        width: 145,
        height: 90,
    },
    containerLiker: {
        backgroundColor: StyleGuide.colors.secondary,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        width: 55,
        height: 55,
    },
    containerPlus: {
        backgroundColor: StyleGuide.colors.secondary,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        width: 45,
        height: 45,
    },
    containerTime: {
        backgroundColor: StyleGuide.colors.secondary,
        borderRadius: StyleGuide.borderRadius,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: 9,
        paddingBottom: 9,
        paddingLeft: 6,
        paddingRight: 6,
        width: 115,
        height: 42,
    },
    container: {
        backgroundColor: StyleGuide.colors.primary,
        borderRadius: StyleGuide.borderRadius,
        justifyContent: "center",
        alignItems: "center",
        width: 207,
        height: 45,
    },
    textTime: {
        color: StyleGuide.colors.primary,
        fontSize: 18,
        lineHeight: 25,
        fontFamily: StyleGuide.typography.textButton.fontFamily,
    },
    text: {
        color: StyleGuide.colors.secondary,
        fontSize: StyleGuide.typography.textButton.fontSize,
        lineHeight: StyleGuide.typography.textButton.lineHeight,
        fontFamily: StyleGuide.typography.textButton.fontFamily,
    },
});

export default CustomButton;
