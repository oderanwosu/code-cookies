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
import { SCREEN_HEIGHT, SCREEN_WIDTH, Size } from "../styles/sizes";
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
import ReactSyntaxHighlighter from "react-syntax-highlighter";

export function CustomTextEditorInput(props) {
  const handleCodeChange = (text) => {
    props.setCode(text);
  };

  return (
    <View>
      <TextInput
        autoCompleteType={false}
        autoCapitalize={"none"}
        autoCorrect={false}
        cursorColor={ColorStyles.primaryColor}
        value={props.code}
        onChangeText={handleCodeChange}
        style={styles.code}
        multiline
        placeholder="Begin typing here..."
        placeholderTextColor={ColorStyles.disabledColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  code: {
    paddingHorizontal: Spacing.large,
    fontSize: FontSize.base,
    fontFamily: FontFamily.code,
    color: ColorStyles.textColor,
    lineHeight: Size.s4
  },
});
