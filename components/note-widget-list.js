import React from "react";
import { Dimensions, View } from "react-native";
import { TouchableNoteWidget } from "./touchable-note-widget";

export function NoteWidgetList({ notes }) {
  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
      }}
    >
      <View
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          rowGap: 4,
          columnGap: 4,
          maxWidth: Dimensions.get("screen"),
        }}
      >
        {notes.map((note) => {
          return <TouchableNoteWidget />;
        })}
      </View>
    </View>
  );
}
