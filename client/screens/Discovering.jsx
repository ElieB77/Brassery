import React, { useRef, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ScrollView,
    Image,
} from "react-native";
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
            justifyContent: "flex-start",
            alignItems: "flex-start",
            backgroundColor: StyleGuide.colors.white,
        },
        swipeContainer: {
            width: "100%",
            height: "100%",
            paddingBottom: 130,
            paddingTop: 50,
            paddingHorizontal: 20,
            justifyContent: "flex-start",
            alignItems: "flex-start",
        },
        dividerColor: {
            backgroundColor: StyleGuide.colors.primary,
            alignSelf: "center",
        },
        mainContainer: { paddingHorizontal: 10 },
        imageContainer: {
            //flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
    });

    const content = (text) => {
        switch (text) {
            case "MORE":
                return <Text>{text}</Text>;
            case "BASIS":
                return (
                    <ScrollView style={style.mainContainer}>
                        <View style={style.imageContainer}>
                            <Image
                                source={require("../assets/hops.jpg")}
                                style={[
                                    {
                                        resizeMode: "cover",
                                        width: "100%",
                                        height: 400,
                                        borderRadius: StyleGuide.borderRadius,
                                    },
                                ]}
                            />
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                        <View>
                            <Text style={StyleGuide.typography.text1}>
                                Houblon
                            </Text>
                            <Text>
                                Dans cette phase, on mélange le malt avec de
                                l'eau chaude pour transformer l'amidon des
                                grains de malt en sucres. On obtient une sorte
                                de gruau épais, la maische.
                            </Text>
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                        <View style={style.imageContainer}>
                            <Image
                                source={require("../assets/yeasts.jpg")}
                                style={[
                                    {
                                        resizeMode: "cover",
                                        width: "100%",
                                        height: 400,
                                        borderRadius: StyleGuide.borderRadius,
                                    },
                                ]}
                            />
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                        <View>
                            <Text style={StyleGuide.typography.text1}>
                                Levure
                            </Text>
                            <Text>
                                Dans cette phase, on mélange le malt avec de
                                l'eau chaude pour transformer l'amidon des
                                grains de malt en sucres. On obtient une sorte
                                de gruau épais, la maische.
                            </Text>
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                        <View style={style.imageContainer}>
                            <Image
                                source={require("../assets/barleys.jpg")}
                                style={[
                                    {
                                        resizeMode: "cover",
                                        width: "100%",
                                        height: 400,
                                        borderRadius: StyleGuide.borderRadius,
                                    },
                                ]}
                            />
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                        <View>
                            <Text style={StyleGuide.typography.text1}>
                                Malt
                            </Text>
                            <Text>
                                Dans cette phase, on mélange le malt avec de
                                l'eau chaude pour transformer l'amidon des
                                grains de malt en sucres. On obtient une sorte
                                de gruau épais, la maische.
                            </Text>
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                    </ScrollView>
                );
            case "RECIPE":
                return (
                    <ScrollView style={style.mainContainer}>
                        <View style={style.imageContainer}>
                            <Image
                                source={require("../assets/beer_process_explanation.jpg")}
                                style={[
                                    {
                                        resizeMode: "contain",
                                        width: "100%",
                                        height: 400,
                                        borderRadius: StyleGuide.borderRadius,
                                    },
                                ]}
                            />
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                        <View>
                            <Text style={StyleGuide.typography.text1}>
                                Empatage / Saccharification
                            </Text>
                            <Text>
                                Dans cette phase, on mélange le malt avec de
                                l'eau chaude pour transformer l'amidon des
                                grains de malt en sucres. On obtient une sorte
                                de gruau épais, la maische.
                            </Text>
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                        <View>
                            <Text style={StyleGuide.typography.text1}>
                                Filtration et rinçage
                            </Text>
                            <Text>
                                L'objectif ici est de séparer les dréches (malt
                                cuit formant une matière solide) du moût obtenu
                                (liquide). On rince avec de l'eau pour extraire
                                un maximum de sucres.
                            </Text>
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                        <View>
                            <Text style={StyleGuide.typography.text1}>
                                Ébullition / Houblonnage
                            </Text>
                            <Text>
                                L'ébullition est nécessaire pour clarifier le
                                moût et extraire les substances amères du
                                houblon.
                            </Text>
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                        <View>
                            <Text style={StyleGuide.typography.text1}>
                                Refroidissement
                            </Text>
                            <Text>
                                Cette phase permet d'atteindre une température
                                favorable à la fermentation. On passe d'un moût
                                bouillant à un moût à 20 à 25 °C.
                            </Text>
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                        <View>
                            <Text style={StyleGuide.typography.text1}>
                                Ajout de levures
                            </Text>
                            <Text>
                                Après le refroidissement, on peut ajouter les
                                levures de bière nécessaires à la fermentation.
                            </Text>
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                        <View>
                            <Text style={StyleGuide.typography.text1}>
                                Fermentaion primaire
                            </Text>
                            <Text>
                                Cette phase permet de transformer les sucres du
                                moût de bière en alcool. Il se forme une mousse
                                effervescente en surface, signe que les levures
                                travaillent.
                            </Text>
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                        <View>
                            <Text style={StyleGuide.typography.text1}>
                                Fermentaion secondaire ou garde
                            </Text>
                            <Text>
                                Au cours de cette phase de garde, la
                                fermentation se termine tranquillement, la bière
                                se clarifie et entre dans cycle de maturation.
                            </Text>
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                        <View>
                            <Text style={StyleGuide.typography.text1}>
                                Resucrage et conditionnement
                            </Text>
                            <Text>
                                Une petite dose de sucre est ajoutée pour qu'une
                                nouvelle fermentation ait lieu dans la bouteille
                                et produise le gaz nécessaire à la formation de
                                bulles.
                            </Text>
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                        <View>
                            <Text style={StyleGuide.typography.text1}>
                                Mise en bouteille et encapsulage
                            </Text>
                            <Text>
                                Le moût est réparti dans les bouteilles, qui
                                sont ensuite encapsulées.
                            </Text>
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                        <View>
                            <Text style={StyleGuide.typography.text1}>
                                Maturation
                            </Text>
                            <Text>
                                C'est la période durant laquelle les bulles se
                                forment et la bière s'affine. On peut enfin
                                boire sa bière !
                            </Text>
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                    </ScrollView>
                );
        }
    };

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
