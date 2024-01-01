import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { ColorStyles } from "../styles/colors";


export function TouchableNoteWidget() {
  return (
    <TouchableOpacity style={styles.card}>
      <View>
        <Ionicons
          name="logo-python"
          size={12}
          color= {ColorStyles.disabledGreyColor}
          style={styles.icon}
        />
        <Text style={styles.title}>Two Sum Two Challenge</Text>
        <Text style={styles.subtitle}>Last edited - five days ago</Text>
      </View>
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  card: {
    backgroundColor: ColorStyles.backgroundColor,
    padding: 12,
    borderRadius: 5,
    width: 180,
    maxHeight: 160
  },

  title: {
    marginVertical: 8,
    fontSize: 16,
    color: "white",
    fontWeight: "500",
  },

  subtitle: {
    fontSize: 12,
    color: ColorStyles.secondaryColor,
  },
});
