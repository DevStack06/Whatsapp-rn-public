import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import WelcomeArt from "../../../../assets/svg/welcome_page_art.svg";
import TextLogo from "../../../baseui/TextLogo/TextLogo";

const WelcomePage = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.root}>
      <View style={styles.contentStyle}>
        <Text style={styles.titleStyle}>Welcome to WhatsApp</Text>
        <WelcomeArt />
        <Text style={styles.descStyle}>
          Read out{" "}
          <Text style={styles.linkStyle} onPress={() => {}}>
            Privacy Policy.
          </Text>{" "}
          Tap "Agree and continue to accept the{" "}
          <Text style={styles.linkStyle} onPress={() => {}}>
            Teams of Service.
          </Text>
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate("login_page");
          }}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonTextStyle}>AGREE AND CONTINUE</Text>
        </Pressable>
      </View>

      <TextLogo />
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    height: "100%",
    paddingTop: "32%",
    paddingBottom: 100,
  },
  contentStyle: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    gap: 38,
    paddingHorizontal: 50,
  },
  logoStyle: {},

  titleStyle: {
    color: "#000",
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
    letterSpacing: 0.3,
  },
  descStyle: {
    color: "#000",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
  },
  linkStyle: {
    color: "#0C42CC",
    fontSize: 13,
    fontWeight: "400",
  },
  buttonStyle: {
    height: 38,
    width: "90%",
    backgroundColor: "#00A884",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginTop: 10,
  },
  buttonTextStyle: {
    color: "#000",
    fontSize: 14,
    fontWeight: "400",
  },
});
