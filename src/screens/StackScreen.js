import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../constants/Header";

const StackScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Stack Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "20%",
        fontFamily: "OpenSans-Medium",
    },
});

export default StackScreen;