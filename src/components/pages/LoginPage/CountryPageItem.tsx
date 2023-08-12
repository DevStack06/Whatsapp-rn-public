import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CountryPageItem = ({
  name,
  flag,
  dial_code,
}: {
  name: string;
  flag: string;
  dial_code: string;
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.main}>
        <View style={styles.midView}>
          <Text>{flag}</Text>
          <Text>{name}</Text>
        </View>
        <Text>{dial_code}</Text>
      </View>
    </View>
  );
};

export default CountryPageItem;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    elevation: 8,
    paddingHorizontal: 20,
    gap: 18,
    paddingVertical: 6,
  },
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.3,
    borderBottomColor: "#85959F",
    paddingVertical: 12,
  },
  midView: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
});
