import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import { FontFamily, FontSize } from "../styles/typography";
import { ColorStyles } from "../styles/colors";
import {
  getSnippetText,
  jsCodeSnippets,
  searchCodeSnippets,
} from "../utils/code-snippets";
import { Spacing } from "../styles/spacings";

export function IntellisenseToolBar(props) {
  const [codeSnippets, setSnippets] = useState([]);

  useEffect(() => {
   
    setSnippets(searchCodeSnippets(props.code, jsCodeSnippets));
  }, [props.code]);

  const buttonWidthPercentage = 100 / codeSnippets.length;
  return (
    <View style={styles.intelliSenseContainer}>
      {codeSnippets.map((buttonText, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.intelliSenseTouchable,
            { flex: 1, width: `${buttonWidthPercentage}%` },
          ]}
          onPress={() => {
            props.setCode(
              props.code + getSnippetText(props.code, codeSnippets[index])
            );
          }}
        >
          <Text style={styles.intelliSenseText}>{codeSnippets[index]}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  code: {
    paddingHorizontal: Spacing.base,
    fontSize: FontSize.base,
    fontFamily: FontFamily.code,
    color: ColorStyles.white,
  },
  intelliSenseContainer: {
    flexDirection: "row",
  },

  intelliSenseText: {
    color: ColorStyles.primaryColor,
    fontFamily: FontFamily.code,
    fontSize: FontSize.base,
  },

  intelliSenseTouchable: {
    padding: Spacing.base,
    width: "100%",
    alignItems: "center",
     backgroundColor: ColorStyles.elevatedColor
  },
});
