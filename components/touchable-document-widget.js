import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { ColorStyles } from "../styles/colors";
import { useRouter } from "expo-router";
import { FontSize } from "../styles/typography";
import { Spacing } from "../styles/spacings";
import { Size } from "../styles/sizes";

export function TouchableDocumentWidget() {
  const boilerplateSubtitle = `function(){
    var name = “John Smith”
    }`;
  const navigation = useRouter();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.push("/document-editor")}
    >
      <View>
        <Ionicons
          name="logo-python"
          size={12}
          color={ColorStyles.primaryColor}
          style={styles.icon}
        />
        <View style={styles.description}>
          <Text style={styles.title}>Two Sum Two Challenge</Text>
          <Text style={styles.subtitle}>{boilerplateSubtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: ColorStyles.backgroundColor,
    borderWidth: 1,
    borderColor: ColorStyles.accentColor,
    padding: Spacing.xlarge,
    borderRadius: Size.s1,
    width: "49%",
  },

  description: {
    marginVertical: Spacing.base,
  },

  title: {
    marginVertical: 8,
    fontSize: FontSize.large,
    color: "white",
    fontWeight: "500",
  },

  subtitle: {
    fontSize: FontSize.small,
    color: ColorStyles.grey,
  },
});
