import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import StyleGuide from "../../components/utils/StyleGuide";
import config from '../../config/globalVariables';

import CustomButton from "../../components/CustomButton";
import Header from '../../components/headings/Header';

const UserPage = ({ route, navigation }) => {
    const { userId } = route.params;
    const [user, setUser] = useState()
    console.log(userId)
    useEffect(() => {
        async function findUser() {
          const reqFind = await fetch(`${config.base_url}/api/users?_id=${userId}`);
          const resultFind = await reqFind.json();
          setUser(resultFind.data);
        }
        findUser();
      }, []);
      console.log(user)
    return (
        <View style={styles.formContainer}>
            <View style={{ paddingLeft: 25 }}>
                <Header title={`${user[0].username} Brassery`}/>
            </View>
            <View>
            <Image
                    style={{
                        width: Dimensions.get("window").width / 2,
                        height: Dimensions.get("window").width / 2,
                        marginBottom: Dimensions.get("window").width / 9,
                        borderRadius: 8
                    }}
                    source={{uri: user[0].avatar}}
                />
            </View>
            <View style={styles.container}>
                <Text style={[StyleGuide.typography.text1, styles.headline]}>
                    Bio
                </Text>
                <Text style={[StyleGuide.typography.text3, styles.text]}>
                {user[0].brewDescription} 
                </Text>
            </View>
            <View
                style={{
                    marginBottom: Dimensions.get("window").width / 15,
                }}
            >
            <CustomButton
                title="Mon installation"
            />
            </View>
            <View
                style={{
                    marginBottom: Dimensions.get("window").width / 15,
                }}
            >
            <CustomButton
                title="Mes dernières recettes"
            />
            </View>
            <View style={styles.button}>
                <CustomButton
                type='Convert'
                title='Envoyer un message'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
      flex: 1,  
      alignItems: 'center',
      paddingTop: 45, 
      backgroundColor: '#FFFDFB'
    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlign: "left",
        borderColor: StyleGuide.colors.secondary,
        borderRadius: StyleGuide.borderRadius,
        backgroundColor: StyleGuide.colors.secondary,
        elevation: 10,
        marginBottom: 20,
        width: "90%",
    },
    text: {
        color: StyleGuide.colors.white,
    },
    headline: {
        color: StyleGuide.colors.primary,
    },
    button: {
      position: 'absolute', 
      bottom: 50, 
      zIndex: 10, 
      left: '65%', 
      marginLeft: -100 
    },
  });

export default UserPage;