import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import CustomButton from "../components/CustomButton";
import StyleGuide from "../components/utils/StyleGuide";
import Swipeable from "react-native-gesture-handler/Swipeable";

const Discovering = ({ navigation, saveToken }) => {
    /* ACTIVE PAGE */
    const [activePage, setActivePage] = useState("recipe");

    /* REF */
    const swipe = useRef(null);

    /* STYLES */
    const style = StyleSheet.create({
        absoluteContainer: {
            position: "absolute",
            bottom: 20,
            width: "100%",
            alignItems: "center",
        },
        tabSlider: {
            flexDirection: "row",
            width: "100%",
            height: 50,
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 30,
            marginBottom: 10,
        },
        textTabSlider: {
            height: "100%",
            width: "30%",
            alignItems: "center",
            justifyContent: "center",
        },
        bottomBorder: {
            borderBottomWidth: 2,
            borderBottomColor: StyleGuide.colors.secondary,
        },
        activeColorSlider: {
            color: StyleGuide.colors.secondary,
        },
        swipeChildren: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: StyleGuide.colors.white,
        },
        swipeContainer: {
            width: "100%",
            height: "100%",
            paddingBottom: 130,
            paddingTop: 50,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
        },
    });

    const content = (text) => <Text>{text}</Text>;

    const LeftSwipeActions = () => {
        return <View style={style.swipeContainer}>{content("BASIS")}</View>;
    };

    const RightSwipeActions = () => {
        return <View style={style.swipeContainer}>{content("MORE")}</View>;
    };

    const actionLeft = () => {
        setActivePage("basis");
    };

    const actionRight = () => {
        setActivePage("more");
    };

    const tabNavigation = (targetPosition) => {
        setActivePage(targetPosition);
        switch (targetPosition) {
            case "basis":
                swipe.current.openLeft();
                break;
            case "more":
                swipe.current.openRight();
                break;
            default:
                swipe.current.close();
                break;
        }
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "space-evenly",
                alignItems: "center",
                backgroundColor: StyleGuide.colors.white,
            }}
        >
            <Swipeable
                containerStyle={style.swipeContainer}
                childrenContainerStyle={style.swipeChildren}
                renderLeftActions={() => LeftSwipeActions()}
                renderRightActions={() => RightSwipeActions()}
                onSwipeableLeftWillOpen={() => actionLeft()}
                onSwipeableRightWillOpen={() => actionRight()}
                onSwipeableWillClose={() => setActivePage("recipe")}
                ref={swipe}
            >
                {content("RECIPE")}
            </Swipeable>
            <View style={style.absoluteContainer}>
                <View style={style.tabSlider}>
                    <Pressable
                        style={[
                            style.textTabSlider,
                            activePage === "basis" && style.bottomBorder,
                        ]}
                        onPress={() => tabNavigation("basis")}
                    >
                        <Text
                            style={[
                                StyleGuide.typography.text3,
                                activePage === "basis" &&
                                    style.activeColorSlider,
                                { color: StyleGuide.colors.secondary },
                            ]}
                        >
                            Les bases
                        </Text>
                    </Pressable>
                    <Pressable
                        style={[
                            style.textTabSlider,
                            activePage === "recipe" && style.bottomBorder,
                        ]}
                        onPress={() => tabNavigation("recipe")}
                    >
                        <Text
                            style={[
                                StyleGuide.typography.text3,
                                activePage === "recipe" &&
                                    style.activeColorSlider,
                                { color: StyleGuide.colors.secondary },
                            ]}
                        >
                            La recette
                        </Text>
                    </Pressable>
                    <Pressable
                        style={[
                            style.textTabSlider,
                            activePage === "more" && style.bottomBorder,
                        ]}
                        onPress={() => tabNavigation("more")}
                    >
                        <Text
                            style={[
                                StyleGuide.typography.text3,
                                activePage === "more" &&
                                    style.activeColorSlider,
                                { color: StyleGuide.colors.secondary },
                            ]}
                        >
                            Approfondir
                        </Text>
                    </Pressable>
                </View>
                <CustomButton title="Créer ma Brassery" />
            </View>
        </View>
    );
};

export default Discovering;
