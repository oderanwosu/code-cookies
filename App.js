import "react-native-gesture-handler";
import {
  Dimensions,
  SafeAreaView,
  Text,
  View,
  Stylesheet,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from "react-native";
import {
  accentColor,
  backgroundColor,
  disabledGreyColor,
  foreGroundColor,
  primaryColor,
  secondaryColor,
} from "./constants";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TouchableNoteWidget } from "./components/touchable-note-widget";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");
export default function App() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: backgroundColor,
        flex: 1,
      }}
    >
      <View
        style={{
          paddingTop: 120,
        }}
      >
        
        <View style={{flexDirection: "row", paddingHorizontal: 12, justifyContent: "space-between"}}>
        <BottomSheetDropDown disabledGreyColor={disabledGreyColor}  />
        <TouchableOpacity>
          <Text style={ {fontSize: 14, fontWeight: "500", color: disabledGreyColor }}>Save</Text>
        </TouchableOpacity>
        </View>
        <TextInput
          placeholderTextColor={disabledGreyColor}
          style={styles.input}
          placeholder="Title Document" // Add other TextInput props as needed
        />
        <TextInput style={{paddingHorizontal: 12,  fontSize: 16,}}  multiline placeholder="Begin typing here..." placeholderTextColor={disabledGreyColor}/>

      </View>
    </SafeAreaView>
  );
}

function BottomSheet() {
  return (
    <View style={styles.bottomSheet.container}>
      <View style={styles.bottomSheet.line} />
      <View style={{ marginHorizontal: 48, paddingVertical: 12 }}>
        <Text
          style={{ fontSize: 14, fontWeight: "500", color: disabledGreyColor }}
        >
          Select text language
        </Text>
      </View>
      <ScrollView>
        <RadioButtonOption />
        <RadioButtonOption />
        <RadioButtonOption />
        <RadioButtonOption />
        <RadioButtonOption />
        <RadioButtonOption />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    container: {
      height: SCREEN_HEIGHT,
      width: "100%",
      backgroundColor: "white",
      position: "absolute",
      top: SCREEN_HEIGHT / 1.5,
      borderRadius: 24,
      backgroundColor: foreGroundColor,
    },
    line: {
      height: 4,
      width: 72,
      backgroundColor: disabledGreyColor,
      alignSelf: "center",
      marginVertical: 12,
      borderRadius: 4,
    },
  },

  input: {
    marginHorizontal: 12,
    fontSize: 24,
    fontWeight: "500",
    height: 60,
    width: "100%",
    color: "white",
  },
});
function RadioButtonOption() {
  return (
    <TouchableOpacity>
      <View
        style={{
          width: "100%",
          height: 64,

          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "flex-start",
          padding: 12,
          paddingHorizontal: 48,
          gap: 8,
        }}
      >
        <View
          style={{
            height: 24,
            width: 24,
            borderWidth: 2,
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            borderColor: disabledGreyColor,
          }}
        >
          <View
            style={{
              height: 12,
              width: 12,
              backgroundColor: secondaryColor,
              borderRadius: 16,
            }}
          ></View>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "500", color: "white" }}>
          Python
        </Text>
      </View>
    </TouchableOpacity>
  );
}

    function BottomSheetDropDown({disabledGreyColor}) {
      return (<View style={{
  flexDirection: "row",
  gap: 8,
  alignItems: "baseline",
  
}}>
          
          <Entypo name="chevron-thin-down" size={14} color={disabledGreyColor} />
          <Text style={{
    fontSize: 20,
    fontWeight: "500",
    color: secondaryColor
  }}>
            Python
          </Text>
        </View>);
    }
  