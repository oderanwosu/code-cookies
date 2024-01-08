import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { SearchBar } from "../../components/search-bar.js";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { TouchableDocumentWidgetList } from "../../components/note-widget-list.js";
import { ColorStyles } from "../../styles/colors.js";
import { Spacing } from "../../styles/spacings.js";
import { Size } from "../../styles/sizes.js";
import { FontSize } from "../../styles/typography.js";

export default function HomeScreen() {
  const notes = [
    { id: "1", text: "Item 1" },
    { id: "2", text: "Item 2" },
    { id: "3", text: "Item 3" },
    { id: "4", text: "Item 4" },
    { id: "5", text: "Item 5" },
    { id: "6", text: "Item 6" },
    // Add more items as needed
  ];
  return (
    <ScrollView style={styles.screenStyle}>
      <View
        style={{
          paddingTop: 120,
          paddingBottom: Spacing.xlarge
        }}
      >
        <View style={styles.row}>
          <Text style={styles.h1}>Your Docs</Text>
          <View style={styles.button}>
            <Entypo
              name="plus"
              size={FontSize.base}
              color={ColorStyles.secondaryColor}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "baseline",
        }}
      >
        {/* <SearchBar />
          <TouchableOpacity>
            <FontAwesome
              name="plus-circle"
              size={24}
              style={styles.icon}
            ></FontAwesome>
          </TouchableOpacity> */}
      </View>

      <View
        style={{
          marginVertical: Spacing.large,
        }}
      >
        <TouchableDocumentWidgetList notes={notes} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: FontSize.xlarge,
    fontWeight: "700",
    color: ColorStyles.primaryColor,
  },

  screenStyle: {
    paddingHorizontal: Spacing.large,
    backgroundColor: ColorStyles.backgroundColor,
    flex: 1,
    
  },

  input: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: "500",
    height: 40,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  
  },

  button: {
    backgroundColor: ColorStyles.primaryColor,
    borderRadius: Size.s1,
    padding: 16,
  },
});
