import React from "react";

import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ColorStyles } from "../styles/colors";


export function SearchBar() {
  return (
    <View
      style={{
        marginVertical: 12,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <FontAwesome
        name="search"
        size={16}
        color={ColorStyles.disabledGreyColor}
        style={styles.icon}
      />
      <TextInput
       
        placeholderTextColor={ColorStyles.disabledGreyColor}
        style={styles.input}
        placeholder="Search for note..." // Add other TextInput props as needed
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: "500",
    height: 40,
    width: "100%",
    color: "white",

  },
});
