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
import Header from "../components/headings/Header";

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
            paddingBottom: 165,
            paddingTop: 30,
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
                                Le houblon est une plante grimpante de la
                                famille des lianes. Ses c??nes dont le cousin est
                                le cannabis sont utilis??s par le brasseur afin
                                de donner de l'amertume et du parfum ?? la bi??re.
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
                                La levure est un champignon microscopique,
                                unicellulaire de forme ovo??de ou sph??rique. La
                                grande particularit?? de la levure est qu'il
                                s'agit d'un organisme vivant ! Tout comme celles
                                de l'homme, les cellules de levures sont
                                vivantes et naturelles.
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
                                Le malt est un ingr??dient plut??t abstrait pour
                                le commun des mortels. C'est pourtant
                                l'ingr??dient principal de la bi??re puisque c'est
                                lui qui apporte le sucre indispensable ?? tous
                                produits ferment??s. Le malt, ce n'est pas bien
                                compliqu??, c'est en fin de compte une c??r??ale
                                pr??par??e pour le brasseur. La plupart du temps
                                de l'orge malt?? mais cela peut ??galement ??tre du
                                bl?? malt??, du seigle malt?? ou tout autre
                                c??r??ales.
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
                                Dans cette phase, on m??lange le malt avec de
                                l'eau chaude pour transformer l'amidon des
                                grains de malt en sucres. On obtient une sorte
                                de gruau ??pais, la maische.
                            </Text>
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                        <View>
                            <Text style={StyleGuide.typography.text1}>
                                Filtration et rin??age
                            </Text>
                            <Text>
                                L'objectif ici est de s??parer les dr??ches (malt
                                cuit formant une mati??re solide) du mo??t obtenu
                                (liquide). On rince avec de l'eau pour extraire
                                un maximum de sucres.
                            </Text>
                        </View>
                        <View
                            style={[StyleGuide.divider, style.dividerColor]}
                        />
                        <View>
                            <Text style={StyleGuide.typography.text1}>
                                ??bullition / Houblonnage
                            </Text>
                            <Text>
                                L'??bullition est n??cessaire pour clarifier le
                                mo??t et extraire les substances am??res du
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
                                Cette phase permet d'atteindre une temp??rature
                                favorable ?? la fermentation. On passe d'un mo??t
                                bouillant ?? un mo??t ?? 20 ?? 25 ??C.
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
                                Apr??s le refroidissement, on peut ajouter les
                                levures de bi??re n??cessaires ?? la fermentation.
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
                                mo??t de bi??re en alcool. Il se forme une mousse
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
                                fermentation se termine tranquillement, la bi??re
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
                                Une petite dose de sucre est ajout??e pour qu'une
                                nouvelle fermentation ait lieu dans la bouteille
                                et produise le gaz n??cessaire ?? la formation de
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
                                Le mo??t est r??parti dans les bouteilles, qui
                                sont ensuite encapsul??es.
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
                                C'est la p??riode durant laquelle les bulles se
                                forment et la bi??re s'affine. On peut enfin
                                boire sa bi??re !
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
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: StyleGuide.colors.white,
                paddingTop: StyleGuide.container.paddingTop,
            }}
        >
            <Header title="D??couvrir la bi??re" />
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
                <CustomButton title="Cr??er ma Brassery" />
            </View>
        </View>
    );
};

export default Discovering;
