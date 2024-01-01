import { View, StyleSheet, Text } from "react-native";
import { RadioButtonOption } from "./radio-button-option";
import { SCREEN_HEIGHT, Size } from "../styles/sizes";
import { ColorStyles } from "../styles/colors";
import { Spacing } from "../styles/spacings";
import { FontSize, FontWeight } from "../styles/typography";
import { Entypo } from "@expo/vector-icons";

export function BottomSheet() {
  return (
    <View style={styles.bottomSheet.container}>
      <View style={styles.bottomSheet.line} />
      <View style={styles.tipTextContainer}>
        <Text style={styles.tipText}>Select text language</Text>
      </View>
      <ScrollView>
        <RadioButtonOption />
        <RadioButtonOption />
        <RadioButtonOption />
        <RadioButtonOption />
        <RadioButtonOption />
        <RadioButtonOption />
      </ScrollView>
    </View>
  );
}

export function BottomSheetDropDown() {
  return (
    <View style={styles.row}>
      <Entypo
        name="chevron-thin-down"
        size={14}
        color={ColorStyles.disabledGreyColor}
      />
      <Text style={styles.selectionText}>Python</Text>
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
    color: ColorStyles.secondaryColor,
  },
  bottomSheet: {
    container: {
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
    marginHorizontal: Spacing.xlarge,
    paddingVertical: Spacing.base,
  },
});
