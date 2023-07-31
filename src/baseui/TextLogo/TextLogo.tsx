import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TextLogo = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.textStyle1}>from </Text>
      <Text style={styles.textStyle2}>FACEBOOK</Text>
    </View>
  );
};

export default TextLogo;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    paddingTop: 10,
    gap: 3,
  },
  textStyle1: {
    color: "#867373",
    fontSize: 12,
    fontWeight: "400",
  },
  textStyle2: {
    color: "#000",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 2.25,
  },
});
