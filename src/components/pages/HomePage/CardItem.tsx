import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";

const CardItem = ({ name, lastText, time }: any) => {
  return (
    <View style={styles.root}>
      <Avatar.Image
        size={60}
        source={require("../../../../assets/images/profile.jpg")}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <View style={styles.contentStyle}>
          <Text>{name}</Text>
          <Text>{lastText}</Text>
        </View>
        <Text>{time}</Text>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  root: {
    // height: ,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
    backgroundColor: "#fff",
  },
  contentStyle: {
    display: "flex",
    gap: 5,
    alignItems: "flex-start",
  },
});
