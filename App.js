import "react-native-gesture-handler";
import { View, Text } from "react-native";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { DocumentModifyingScreen } from "./screens/document-modifying-screen.js";
import { ColorStyles } from "./styles/colors.js";
import { FontFamily } from "./styles/typography.js";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter': require('./assets/fonts/Inter-Regular.ttf'),
    'GeistMono': require('./assets/fonts/GeistMono-Regular.otf'),
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
     <View onLayout={onLayoutRootView} style={{ backgroundColor: ColorStyles.backgroundColor,
      flex: 1,
     
      colors: ColorStyles.white}}>
      <DocumentModifyingScreen/>
    </View>
  );
}
