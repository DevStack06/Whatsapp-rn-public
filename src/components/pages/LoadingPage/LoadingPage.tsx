import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BackgroundImg from "../../../../assets/svg/loading_background.svg";
import LOGO from "../.../../../../../assets/svg/logo_1.svg";

const LoadingPage = () => {
  return (
    <View style={styles.root}>
      <View style={styles.bgStyleView}>
        <BackgroundImg />
      </View>
      <View style={styles.contentViewStyle}>
        <LOGO width="70" height="70" />
        <Text style={styles.titleStyle}>Whatsapp</Text>
      </View>
    </View>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({
  root: {
    position: "relative",
    width: "100%",
  },
  bgStyleView: {
    width: "100%",
  },
  contentViewStyle: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  titleStyle: {
    color: "#000",
    fontSize: 35,
    fontWeight: "500",
    marginTop: 12,
    // fontFamily: "Roboto",
  },
});

// flexbox- > column { alignItems= "horizontal", justifyContent="vertical" }
// flexbox- > row { alignItems= "vertical", justifyContent="horizontal" }
