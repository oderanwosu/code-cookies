import { TouchableNoteWidget } from "./components/touchable-note-widget";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
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
import { SearchBar } from "./components/search-bar";
import { backgroundColor, primaryColor } from "./constants";
import { NoteWidgetList } from "./components/note-widget-list.js";


export default function App() {
  var notes = [{}, {}, {}, {}, {}];
  return (
    <SafeAreaView style={styles.screenStyle}>
      <ScrollView>
        <View style={{ paddingTop: 120 }}>
          <Text style={styles.h1}>My Code Snippets</Text>
        </View>
        <View style = {{  flexDirection: "row", justifyContent: "baseline"}}>
        <SearchBar/>
        <TouchableOpacity>
          <FontAwesome name="plus-circle" size={24}
          style={styles.icon}></FontAwesome>
        </TouchableOpacity>
        </View>
        
        <View style={{marginVertical: 24}}>
         <NoteWidgetList  notes={notes}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: "700",
    color: primaryColor,
  },

  screenStyle: {
    paddingHorizontal: 12,
    backgroundColor: backgroundColor,
    flex: 1,
  },

  input: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: "500",
    height: 40,
  },
});
