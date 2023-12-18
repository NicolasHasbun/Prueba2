import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { COLORS } from "./constants/Color";

// Screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";

import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeStackNavigator = createNativeStackNavigator();


const MyStack = () => {
    return (
      <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
        <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
        <HomeStackNavigator.Screen
          name="Stack"
          component={StackScreen}
          options={{
            // headerShown: true,
            // headerBackTitleVisible: false
          }}
        />
      </HomeStackNavigator.Navigator>
    );
  };


const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: COLORS.primary,
        }}
      >
        <Tab.Screen
          name="Home"
          component={MyStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => {
              return <MaterialCommunityIcons name="home" color={color} size={30} />;
            },
            tabBarBadge: 10,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => {
              return <MaterialCommunityIcons name="brightness-5" color={color} size={30} />;
            },
          }}
        />
      </Tab.Navigator>
    );
  };



export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}