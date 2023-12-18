import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/Color";
import Header from "../constants/Header";

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Stack")}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Ir a Stack Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "20%",
        fontFamily: "OpenSans-Medium",
    },
    button: {
        backgroundColor: COLORS.primary,
        padding: 10,
        marginTop: "20%",
        width: "50%",
        alignSelf: "center",
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 15,
        textAlign: "center",
        color: COLORS.white,
        fontFamily: "OpenSans-Regular",
    },
});

export default HomeScreen;