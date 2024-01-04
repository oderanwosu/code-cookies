import { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  //   InputAccessoryView,
  //   KeyboardAvoidingView,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CodeHighlighter from "react-native-code-highlighter";
import { TextInput } from "react-native-gesture-handler";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { FontFamily, FontSize } from "../styles/typography";
import { Spacing } from "../styles/spacings";
import { ColorStyles } from "../styles/colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../styles/sizes";
import {
  KeyboardAccessoryNavigation,
  KeyboardAccessoryView,
} from "react-native-keyboard-accessory";
import { backgroundColor } from "../constants";
import {
  getSnippetText,
  jsCodeSnippets,
  searchCodeSnippets,
} from "../utils/code-snippets";

export function CustomTextEditorInput(props) {
  const [codeSnippets, setSnippets] = useState([]);

  const handleCodeChange = (text) => {
    var lastInput = text.split(" ");
    console.log(lastInput);

    setSnippets(
      searchCodeSnippets(lastInput[lastInput.length - 1], jsCodeSnippets)
    );
    props.setCode(text);
  };

  const buttonWidthPercentage = 100 / codeSnippets.length;
  return (
    <View>
      <View style={styles.intelliSenseContainer}>
        {codeSnippets.map((buttonText, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.intelliSenseTouchable,
              { flex: 1, width: `${buttonWidthPercentage}%` },
            ]}
            onPress={() => {
              var lastInput = props.code.split(" ");
              props.setCode(
                props.code +
                  getSnippetText(
                    lastInput[lastInput.length - 1],
                    codeSnippets[index]
                  )
              );
            }}
          >
            <Text style={styles.intelliSenseText}>{codeSnippets[index]}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        autoCompleteType={false}
        autoCapitalize={false}
        autoCorrect={false}
        value={props.code}
        onChangeText={handleCodeChange}
        style={styles.code}
        multiline
        placeholder="Begin typing here..."
        placeholderTextColor={ColorStyles.disabledGreyColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontSize: FontSize.xsmall,
  },

  intelliSenseTouchable: {
    padding: Spacing.base,
    width: "100%",
    alignItems: "center",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});
