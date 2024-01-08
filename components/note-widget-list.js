import React from "react";
import { Dimensions, View, FlatList } from "react-native";
import { TouchableDocumentWidget } from "./touchable-document-widget";
import { Spacing } from "../styles/spacings";

export function TouchableDocumentWidgetList({ notes }) {
  return (
    <View
      
    >
      {/* <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          rowGap: Spacing.base,
          columnGap: 4,
          maxWidth: Dimensions.get("screen"),
        }}
      >
        {notes.map((note) => {
          return <TouchableNoteWidget />;
        })}
      </View> */}
      <FlatList
        scrollEnabled={false}
        data={notes}
        numColumns={2} // Set the number of columns
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
          flexDirection: "column",
          rowGap: Spacing.base,
          columnGap:Spacing.base,
             // Use row to create a horizontal layout
        }}
        columnWrapperStyle={
          {
            flex: .5,
            justifyContent: "space-between",
            
        }
        }
      />
    </View>
  );
}

const renderItem = ({ item }) => <TouchableDocumentWidget />;
