import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SCREEN_HEIGHT, Size } from "../styles/sizes";
import { ColorStyles } from "../styles/colors";
import { Spacing } from "../styles/spacings";
import { FontSize, FontWeight } from "../styles/typography";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import Animated, {
  scrollTo,
  useAnimatedStyle,
  useSharedValue,
  useAnimatedValue,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;
export function BottomSheet(props) {
  const translateY = useSharedValue(0);
  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      translateY.value = event.translationY;
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT) {
        scrollTo(0);
      } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheet.container, rBottomSheetStyle]}>
        <View style={styles.bottomSheet.line} />
        {props.children}
      </Animated.View>
    </GestureDetector>
  );
}

export const styles = StyleSheet.create({
  bottomSheet: {
    container: {
      width: "100%",
      height: SCREEN_HEIGHT,
      position: "absolute",
      top: SCREEN_HEIGHT / 1.5,
      borderRadius: Size.s4,
      backgroundColor: "#20242B",
    },
    line: {
      height: Size.s1,
      width: 72,
      backgroundColor: ColorStyles.grey,
      alignSelf: "center",
      marginVertical: Spacing.base,
      borderRadius: Size.s1,
    },
  },
});
