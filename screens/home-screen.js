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
import { SearchBar } from "../components/search-bar";
import { FontAwesome } from "@expo/vector-icons";
import { NoteWidgetList } from "../components/note-widget-list";
import { ColorStyles } from "../styles/colors";


export function HomeScreen() {
  var notes = [{}, {}, {}, {}, {}];
  return (
    <SafeAreaView style={styles.screenStyle}>
      <ScrollView>
        <View
          style={{
            paddingTop: 120,
          }}
        >
          <Text style={styles.h1}>My Code Snippets</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "baseline",
          }}
        >
          <SearchBar />
          <TouchableOpacity>
            <FontAwesome
              name="plus-circle"
              size={24}
              style={styles.icon}
            ></FontAwesome>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginVertical: 24,
          }}
        >
          <NoteWidgetList notes={notes} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: "700",
    color: ColorStyles.primaryColor,
  },

  screenStyle: {
    paddingHorizontal: 12,
    backgroundColor: ColorStyles.backgroundColor,
    flex: 1,
  },

  input: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: "500",
    height: 40,
  },
});
