import React, { useState } from "react";

import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

import { BottomSheetDropDown } from "../components/bottom-sheet";
import { BottomSheet } from "../components/bottom-sheet";
import { ScreenView } from "../components/screen-view";
import { Spacing } from "../styles/spacings";
import { FontFamily, FontSize, FontWeight } from "../styles/typography";
import { ColorStyles } from "../styles/colors";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { BottomSheetDropDownButton } from "../components/bottom-sheet-dropdown-button";
import { LanguageSelectionRadioButtonList } from "../components/language-selection-radio-button-list";
import {
  CustomTextEditorInput,
  TextEditorInput,
} from "../components/text-editor";
import { KeyboardAccessoryView } from "react-native-keyboard-accessory";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { IntellisenseToolBar } from "../components/intellisense-toolbar";
import { CompiledCodeModal, CompiledCodeScreen } from "./compiled-code-popup";

export function DocumentModifyingScreen() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isCompileModalOpen, setIsCompileModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLangauge] = useState("Python");
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");

  const toggleBottomSheet = () => {
    setIsBottomSheetOpen((currentValue) => !currentValue);
  };

  const handleTitleChange = (text) => {
    setTitle(text);
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

              <TouchableOpacity style={styles.runButton} onPress={()=> setIsCompileModalOpen(true)}>
                <Text style={styles.saveButton.text}>Compile </Text>
                <Ionicons
                  name="bug-outline"
                  size={14}
                  color={ColorStyles.secondaryColor}
                />
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: Spacing.base }}>
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
            </View>

            <TextInput
              value={title}
              onChangeText={handleTitleChange}
              placeholderTextColor={ColorStyles.disabledGreyColor}
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
      <CompiledCodeModal visibility= {isCompileModalOpen} setVisibility={setIsCompileModalOpen}/>
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
    paddingHorizontal: Spacing.base,
    justifyContent: "space-between",
    marginVertical: Spacing.base,
  },

  runButton: {
    flexDirection: "row",
    gap: Spacing.small,
    justifyContent: "space-between",
    alignItems: "center",
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
      color: ColorStyles.white,
    },
  },
});
