import React from "react";
import { Navigation } from "../navigation/Navigation";
import { ThemeProvider } from "./ThemeProvider";
import {
  ActivityIndicator,
  Provider as PaperProvider,
} from "react-native-paper";
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

export const AppProvider = () => {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <ThemeProvider>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </ThemeProvider>
  );
};
