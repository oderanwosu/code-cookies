import { SafeAreaView, StyleSheet , View} from "react-native";
import { ColorStyles } from "../styles/colors";
import { FontFamily } from "../styles/typography";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const ScreenView = function (props) {
  return (
    <View
      style={styles.screen}
    >
     {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: ColorStyles.backgroundColor,
        flex: 1,
        fontFamily: FontFamily.base,
        colors: ColorStyles.white
    }
})