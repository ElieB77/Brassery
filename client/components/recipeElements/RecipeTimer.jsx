import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import CustomButton from "../CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RecipeTimer = ({ onPress }) => {
    const isFocused = useIsFocused();

    // Getting the timer
    const [timer, setTimer] = useState(null);
    useEffect(() => {
        AsyncStorage.getItem("timer", function (error, data) {
            if (data) setTimer(data - new Date().getTime());
        });
    }, []);

    useEffect(() => {
        if (isFocused) {
            var interval = setInterval(() => {
                setTimer((lastTimerCount) => {
                    lastTimerCount < 2000 &&
                        (clearInterval(interval),
                        AsyncStorage.removeItem("timer"));
                    return lastTimerCount - 1000;
                });
            }, 1000); //each count lasts for a second
        }
        //cleanup the interval on complete
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <View
            style={{
                position: "absolute",
                top: "90%",
                left: "5%",
            }}
        >
            <CustomButton
                type="time"
                time={`${
                    new Date(timer).getMinutes() +
                    60 * (new Date(timer).getHours() - 1)
                } : ${new Date(timer).getSeconds() < 10 ? "0" : ""}${new Date(
                    timer
                ).getSeconds()}`}
                onPress={() => [onPress(), AsyncStorage.removeItem("timer")]}
            />
        </View>
    );
};

export default RecipeTimer;
