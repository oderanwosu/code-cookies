import "react-native-gesture-handler";
import { View } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { ColorStyles } from "../styles/colors.js";
import { HomeScreen } from "./home/index.js";
import { Slot } from "expo-router";

// const setAndroidWindowSoftInputMode = async () => {
//   try {
//     await Updates.setWindowSoftInputMode("adjustResize");
//   } catch (error) {
//     console.error("Error setting window soft input mode:", error);
//   }
// };

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: require("./../assets/fonts/Inter-Regular.ttf"),
    GeistMono: require("./../assets/fonts/GeistMono-Regular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={{ flex: 1, backgroundColor: ColorStyles.backgroundColor }}
    >
      <Slot initialRouteName="/home"/>
    </View>
  );
}
