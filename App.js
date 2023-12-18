import React from "react";
import { useFonts } from '@expo-google-fonts/open-sans';
import { AppLoading } from 'expo';
import Navigation from "./src/navigation/Navigation";

export default function App () {
  let [fontsLoaded] = useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Medium': require('./assets/fonts/OpenSans-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return AppLoading; 
  } else {
    return (
      <Navigation />
    );
  }
}