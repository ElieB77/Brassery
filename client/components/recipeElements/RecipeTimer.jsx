import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import CustomButton from "../CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RecipeTimer = ({ onPress }) => {
    
    /* STATES */
    const isFocused = useIsFocused();

    // TIMER ⏰
    const [timer, setTimer] = useState(null);
    useEffect(() => {
        AsyncStorage.getItem("timer", function (error, data) {
            if (data) setTimer(data - new Date().getTime());
        });
    }, []);

    // Timer logic
    useEffect(() => {
        if (isFocused) {
            var interval = setInterval(() => {
                setTimer((lastTimerCount) => {
                    lastTimerCount < 2000 &&
                        (clearInterval(interval),
                        AsyncStorage.removeItem("timer"));
                    return lastTimerCount - 1000;
                });
            }, 1000);
        }
        // Cleanup the interval on complete
        return () => {
            clearInterval(interval);
        };
    }, []);

    /* STYLES */
    const style = StyleSheet.create({
        timer: {
            position: "absolute",
            top: "90%",
            left: "5%",
        },
    });
    return (
        <View style={style.timer}>
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
