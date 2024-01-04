import { View, Text, StyleSheet } from "react-native";
import { RadioButtonOption } from "./radio-button-option";
import { FontSize, FontWeight } from "../styles/typography";
import { ColorStyles } from "../styles/colors";
import { Spacing } from "../styles/spacings";
import { useState } from "react";



export function LanguageSelectionRadioButtonList(props) {
 
  return (
    <View>
      <View style={styles.tipTextContainer}>
        <Text style={styles.tipText}>Select text language</Text>
      </View>
      <View>
        {["Python", "Javascript", "Dart", "GoLang"].map((languageOption) => (
          <RadioButtonOption
            key={languageOption}
            option={languageOption}
            onPress={() => props.setSelectedLanguage(languageOption)}
            selectedLanguage={props.selectedLanguage} />
        ))}
      </View>
    </View>
  );
}



export const styles = StyleSheet.create({
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

