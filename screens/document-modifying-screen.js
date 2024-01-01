import React from "react";

import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { BottomSheetDropDown } from "../components/bottom-sheet";
import { ScreenView } from "../components/screen-view";
import { Spacing } from "../styles/spacings";
import { FontFamily, FontSize, FontWeight } from "../styles/typography";
import { ColorStyles } from "../styles/colors";

export function DocumentModifyingScreen() {
  return (
    <View>
      <View
        style={{
          paddingTop: 100,
        }}
      >
        <View style={styles.row}>
          <BottomSheetDropDown disabledGreyColor={ColorStyles.disabledGreyColor} />
          <TouchableOpacity>
            <Text style={styles.saveButton.text}>Save</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          placeholderTextColor={ColorStyles.disabledGreyColor}
          style={styles.inputs.title}
          placeholder="Title Document" // Add other TextInput props as needed
        />
        <TextInput
          style={styles.inputs.body}
          multiline
          placeholder="Begin typing here..."
          placeholderTextColor={ColorStyles.disabledGreyColor}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingHorizontal: Spacing.base,
    justifyContent: "space-between",
    marginVertical: Spacing.base
  },

  saveButton: {
    text: {
      fontSize: FontSize.base,
      fontWeight: FontWeight.semibold,
      color: ColorStyles.disabledGreyColor,
      
    },
  },

  inputs: {
    
    title: {
      paddingHorizontal: Spacing.base,
      fontSize: FontSize.xlarge,
      fontWeight: FontWeight.semibold,
      color: ColorStyles.white,
      marginVertical: Spacing.base,
      
    },
    body: {
      paddingHorizontal: Spacing.base,
      fontSize: FontSize.base,
      fontFamily: FontFamily.code,
     
    }
  }
});
