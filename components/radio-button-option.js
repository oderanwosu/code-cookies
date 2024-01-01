import {
  Text,
  View, TouchableOpacity, StyleSheet
} from "react-native";

import { Size } from "../styles/sizes";
import { Spacing } from "../styles/spacings";
import { ColorStyles } from "../styles/colors";
import { FontSize, FontWeight } from "../styles/typography";

export function RadioButtonOption() {
  return (
    <TouchableOpacity>
      <View
        style={styles.row}
      >
        <View
          style={styles.outterCircle}
        >
          <View
            style={styles.innerCircle}
          ></View>
        </View>
        <Text style={styles.optionText}>
          Python
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
   
    height: Size.s5,

    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-start",
    padding: Spacing.base,
    paddingHorizontal: Spacing.large,
    gap: Spacing.small,
  },

  outterCircle: {
    height: Size.s4,
    width: Size.s4,
    borderWidth: 2,
    borderRadius: Size.s2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: ColorStyles.disabledGreyColor,
  },

  innerCircle: {
    height: Size.s4,
    width: Size.s4,
    backgroundColor: ColorStyles.secondaryColor,
    borderRadius: Size.s5,
  },
  
  optionText: { fontSize: FontSize.large, fontWeight: FontWeight.bold}

})