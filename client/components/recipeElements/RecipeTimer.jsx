import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import CustomButton from "../CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RecipeTimer = ({ onPress }) => {
    // Getting the timer
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem("timer", function (error, data) {
            if (data) setTimer(data - new Date().getTime());
        });
    }, [timer]);

    useEffect(() => {
        let interval = setInterval(() => {
            setTimer((lastTimerCount) => {
                lastTimerCount <= 1 && clearInterval(interval);
                return lastTimerCount - 1;
            });
        }, 1000); //each count lasts for a second
        //cleanup the interval on complete
        return () => clearInterval(interval);
    }, []);

    return (
        <View
            style={{
                position: "absolute",
                top: "96%",
                left: "5%",
            }}
        >
            <CustomButton
                type="time"
                time={`${new Date(timer).getMinutes()} : ${new Date(timer).getSeconds() < 10 ? "0" : ""}${new Date(timer).getSeconds()}`}
                onPress={() => [onPress(), AsyncStorage.removeItem("timer")]}
            />
        </View>
    );
};

export default RecipeTimer;
