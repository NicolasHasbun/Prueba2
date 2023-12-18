import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/Color";
import Header from "../constants/Header";

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
        <Text
            style={{
                fontSize: 30,
                textAlign: "center",
                marginTop: "20%",
                fontFamily: "OpenSans-Medium"
            }}
            >Home Screen</Text>
            <TouchableOpacity
            onPress={() => navigation.navigate("Stack")}
                style={{
                    backgroundColor: COLORS.primary,
                    padding: 10,
                    marginTop: "20%",
                    width: "50%",
                    alignSelf : "center",
                    borderRadius: 10,
                }}
            >
            <Text
                style={{
                    fontSize: 15,
                    textAlign: "center",
                    color: COLORS.white,
                    fontFamily: "OpenSans-Regular"
                }}
            >Ir a Stack Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;