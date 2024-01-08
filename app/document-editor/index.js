import React, { useRef, useState } from "react";

import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";

import { BottomSheet } from "../../components/bottom-sheet";
import { Spacing } from "../../styles/spacings";
import { FontFamily, FontSize, FontWeight } from "../../styles/typography";
import { ColorStyles } from "../../styles/colors";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { BottomSheetDropDownButton } from "../../components/bottom-sheet-dropdown-button";
import { LanguageSelectionRadioButtonList } from "../../components/language-selection-radio-button-list";
import { CustomTextEditorInput } from "../../components/text-editor";
import { AntDesign } from "@expo/vector-icons";
import { IntellisenseToolBar } from "../../components/intellisense-toolbar";
import { CompiledCodeModal } from "../../components/compiled-code-popup";
import { getCodeOutputfromAPI } from "../../api/code-compiler";

const ErrorAlert = () =>
  Alert.alert(
    "Oops there was an error (not with your code)",
    "There was a request error when trying to compile.",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]
  );

export default function DocumentModifyingScreen() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isCompileModalOpen, setIsCompileModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLangauge] = useState("Python3");
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [isCompileStateLoading, setIsCompileStateLoading] = useState(false);
  var output = useRef("");
  const toggleBottomSheet = () => {
    setIsBottomSheetOpen((currentValue) => !currentValue);
  };

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleCompilePress = async () => {
    try {
      setIsCompileStateLoading(true);
      let data = await getCodeOutputfromAPI(code, selectedLanguage);

      output.current = data;
      setIsCompileModalOpen(true);
    } catch (error) {
      setIsCompileStateLoading(false);
      ErrorAlert();
    } finally {
      setIsCompileStateLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <GestureHandlerRootView>
        <ScrollView>
          <View
            style={{
              paddingTop: Spacing.screenTop,
            }}
          >
            <View style={styles.row}>
              <BottomSheetDropDownButton
                isBottomSheetOpen={isBottomSheetOpen}
                toggleBottomSheetOpen={toggleBottomSheet}
                onOpen={toggleBottomSheet}
                onClose={toggleBottomSheet}
                selectedLanguage={selectedLanguage}
              />
              {isCompileStateLoading ? (
                <ActivityIndicator
                  size="small"
                  color={ColorStyles.primaryColor}
                />
              ) : (
                <TouchableOpacity
                  style={styles.runButton}
                  onPress={handleCompilePress}
                >
                  <AntDesign
                    name="codesquareo"
                    size={FontSize.large}
                    color={ColorStyles.codeColor}
                  />
                </TouchableOpacity>
              )}
            </View>
            {/* <View style={{ paddingHorizontal: Spacing.base }}>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.saveButton.text,
                    {
                      color: ColorStyles.disabledGreyColor,
                      fontWeight: FontWeight.light,
                    },
                  ]}
                >
                  View Syntax
                </Text>
              </TouchableOpacity>
            </View> */}

            <TextInput
              value={title}
              onChangeText={handleTitleChange}
              placeholderTextColor={ColorStyles.disabledColor}
              style={styles.inputs.title}
              placeholder="Title Document" // Add other TextInput props as needed
            />

            <CustomTextEditorInput
              language={selectedLanguage}
              code={code}
              setCode={setCode}
            />
          </View>
        </ScrollView>
        {isBottomSheetOpen ? (
          <BottomSheet>
            <LanguageSelectionRadioButtonList
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLangauge}
            />
          </BottomSheet>
        ) : null}
      </GestureHandlerRootView>
      <View style={styles.test}>
        <IntellisenseToolBar
          code={code}
          language={setSelectedLangauge}
          setCode={setCode}
        />
      </View>
      <CompiledCodeModal
        output={output.current}
        visibility={isCompileModalOpen}
        setVisibility={setIsCompileModalOpen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  test: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: Spacing.large,
    justifyContent: "space-between",
    marginVertical: Spacing.base,
    alignItems: "center",
  },

  runButton: {
    paddingHorizontal: 16,
  },

  saveButton: {
    text: {
      fontSize: FontSize.base,
      fontWeight: FontWeight.semibold,
      color: ColorStyles.secondaryColor,
    },
  },

  inputs: {
    title: {
      paddingHorizontal: Spacing.large,
      fontSize: FontSize.xlarge,
      fontWeight: FontWeight.semibold,
      color: ColorStyles.textColor,
      marginVertical: Spacing.base,
    },
    body: {
      paddingHorizontal: Spacing.base,
      fontSize: FontSize.base,
      fontFamily: FontFamily.code,
      color: ColorStyles.textColor,
    },
  },
});
