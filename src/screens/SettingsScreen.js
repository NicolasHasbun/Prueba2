import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../constants/Header";

const SettingsScreen = () => {
    return (
        <View>
        <Text
            style={{
                fontSize: 30,
                textAlign: "center",
                marginTop: "20%",
                fontFamily: "OpenSans-Medium"
            }}
            >Settings Screen</Text>
        </View>
    );
}

export default SettingsScreen;