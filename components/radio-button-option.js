import {
  Text,
  View, TouchableOpacity, StyleSheet
} from "react-native";

import { Size } from "../styles/sizes";
import { Spacing } from "../styles/spacings";
import { ColorStyles } from "../styles/colors";
import { FontSize, FontWeight } from "../styles/typography";

export const RadioButtonOption = props => {
  
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={styles.row}
      >
        <View
          style={styles.outterCircle}
        >
          {props.option == props.selectedLanguage && <View
            style={styles.innerCircle}
          ></View>}
          
        </View>
        <Text style={styles.optionText}>
          {props.option}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
   
    height: Size.s6 + 4,

    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    padding: Spacing.base,
    paddingHorizontal: Spacing.large,
    gap: Spacing.base,
  },

  outterCircle: {
    height: Size.s4,
    width: Size.s4,
    borderWidth: 2,
    borderRadius: Size.s4,
    justifyContent: "center",
    alignItems: "center",
    borderColor: ColorStyles.disabledGreyColor,
  },

  innerCircle: {
    height: Size.s3 + 2,
    width: Size.s3 + 2,
    backgroundColor: ColorStyles.secondaryColor,
    borderRadius: Size.s5,
  },
  
  optionText: { fontSize: FontSize.large, fontWeight: FontWeight.bold, color: ColorStyles.white}

})