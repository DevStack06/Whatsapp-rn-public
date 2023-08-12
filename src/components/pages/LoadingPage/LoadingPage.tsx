import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";

import BackgroundImg from "../../../../assets/svg/loading_background.svg";
import LOGO from "../.../../../../../assets/svg/logo_1.svg";
import TextLogo from "../../../baseui/TextLogo/TextLogo";

const LoadingPage = ({ navigation }: { navigation: any }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("../../../../assets/fonts/Roboto/Roboto-Black.ttf"),
    "Roboto-Bold": require("../../../../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../../../../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../../../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Thin": require("../../../../assets/fonts/Roboto/Roboto-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      navigation.navigate("welcome_page");
    }
  }, [fontsLoaded]);

  return (
    <View style={styles.root} onLayout={onLayoutRootView}>
      <View style={styles.bgStyleView}>
        <BackgroundImg />
      </View>
      <View style={styles.contentViewStyle}>
        <LOGO width="70" height="70" />
        <Text style={styles.titleStyle}>Whatsapp</Text>
      </View>
      <View style={styles.textLogoViewStyle}>
        <TextLogo />
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
  textLogoViewStyle: {
    position: "absolute",
    bottom: 100,
    left: "38%",
  },
});

// flexbox- > column { alignItems= "horizontal", justifyContent="vertical" }
// flexbox- > row { alignItems= "vertical", justifyContent="horizontal" }
