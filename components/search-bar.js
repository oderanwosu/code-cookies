import React from "react";

import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { disabledGreyColor } from "../constants";

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
        color={disabledGreyColor}
        style={styles.icon}
      />
      <TextInput
        inpu
        placeholderTextColor={disabledGreyColor}
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
