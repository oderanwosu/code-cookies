import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  Touchable,
} from "react-native";
import { RadioButtonOption } from "./radio-button-option";
import { SCREEN_HEIGHT, Size } from "../styles/sizes";
import { ColorStyles } from "../styles/colors";
import { Spacing } from "../styles/spacings";
import { FontSize, FontWeight } from "../styles/typography";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
  Gesture,
  GestureDetector,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
export function BottomSheetDropDownButton(props) {
  const animatedValue = new Animated.Value(0);
  var currentValue = 0;
  

  animatedValue.addListener(({ value }) => {
    currentValue = value;
  });

  const toggleSheet = () => {
    props.toggleBottomSheetOpen;
    props.isBottomSheetOpen ? props.onOpen() : props.onClose();
  };

  const setInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const startAnimation = () => {
    if (!props.isBottomSheetOpen) {
      Animated.spring(animatedValue, {
        toValue: 0,
        tension: 10,
        friction: 8,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        tension: 10,
        friction: 8,
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    startAnimation();
    // action on update of movies
  }, [props.isBottomSheetOpen, animatedValue]);

  const rotateYAnimatedStyle = {
    transform: [{ rotateX: setInterpolate }],
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleSheet}>
        <View style={styles.row}>
          <Animated.View style={rotateYAnimatedStyle}>
            <Entypo
              name="chevron-thin-down"
              size={14}
              color={ColorStyles.disabledGreyColor}
            />
          </Animated.View>
          <Text
            style={[
              styles.selectionText,
              {
                color: props.isBottomSheetOpen
                  ? ColorStyles.disabledGreyColor
                  : ColorStyles.secondaryColorBlue,
              },
            ]}
          >
            {props.selectedLanguage}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: Spacing.small,
    alignItems: "baseline",
  },

  selectionText: {
    fontSize: FontSize.large,
    fontWeight: FontWeight.semibold,
    color: ColorStyles.secondaryColorBlue,
  },
  bottomSheet: {
    container: {
      width: "100%",
      height: SCREEN_HEIGHT,
      position: "absolute",
      top: SCREEN_HEIGHT / 1.5,
      borderRadius: Size.s4,
      backgroundColor: ColorStyles.foreGroundColor,
    },
    line: {
      height: Size.s1,
      width: 72,
      backgroundColor: ColorStyles.disabledGreyColor,
      alignSelf: "center",
      marginVertical: Spacing.base,
      borderRadius: Size.s1,
    },
  },
  tipText: {
    fontSize: FontSize.base,
    fontWeight: FontWeight.bold,
    color: ColorStyles.disabledGreyColor,
  },
  tipTextContainer: {
    marginHorizontal: Spacing.large,
    paddingVertical: Spacing.base,
  },
});
