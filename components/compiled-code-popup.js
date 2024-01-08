import {
  Modal,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { ColorStyles } from "../styles/colors";
import { Size } from "../styles/sizes";
import { FontFamily, FontSize, FontWeight } from "../styles/typography";
import { Spacing } from "../styles/spacings";

export function CompiledCodeModal(props) {
  return (
    <Modal
      transparent={true}
      visible={props.visibility}
      onRequestClose={() => {
        props.setVisibility(false);
      }}
    >
      <TouchableOpacity
        style={styles.centeredView}
        onPressOut={() => {
          props.setVisibility(false);
        }}
      >
        <View style={styles.modalView}>
          <TouchableWithoutFeedback>
            <ScrollView>
              <Text style={styles.output}>{props.output}</Text>
            </ScrollView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    padding: 35,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    height: 400,
    width: "100%",
    backgroundColor: "black",
    borderRadius: Size.s2,

    padding: Spacing.large,
    shadowColor: "#000",
  },

  output: {
    alignSelf: "flex-start",
    fontSize: FontSize.xsmall,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.code,
    color: ColorStyles.codeColor,
  },

  header: {
    alignSelf: "flex-start",
    fontSize: FontSize.base,
    fontWeight: FontWeight.bold,
    color: ColorStyles.secondaryColorBlue,
  },
});
