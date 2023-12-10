import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/Color";
import { useFonts } from "expo-font";

const HomeScreen = () => {

    const [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf")
    });
    
    if(!fontsLoaded) {
        return null;
    }

    const navigation = useNavigation();

    return (
        <View>
        <Text
            style={{
                fontSize: 30,
                textAlign: "center",
                marginTop: "20%",
                fontFamily: "Roboto-Light"
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
                    fontFamily: "Roboto-Light"
                }}
            >Ir a Stack Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;