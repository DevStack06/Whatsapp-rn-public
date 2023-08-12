import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import DropDown from "../../../../assets/svg/dropdown.svg";

const LoginPage = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.titleStyle}>Enter your phone number</Text>
      <Text style={styles.descStyle}>
        WhatsApp will need to verify your phone number.
        <Text style={styles.linkStyle} onPress={() => {}}>
          What's my number?
        </Text>{" "}
      </Text>
      <Pressable style={styles.countryButtonStyle}>
        <View />
        <Text>India</Text>
        <DropDown />
      </Pressable>
      <View style={styles.inputViewStyle}>
        <View style={styles.numberViewStyle}>
          <Text>+91</Text>
        </View>
        <TextInput style={styles.inputStyle} />
      </View>
      <Pressable style={styles.nextButtonStyle}>
        <Text style={styles.buttonTextStyle}>Next</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  root: {
    marginBottom: 56,
    marginTop: 90,
    paddingHorizontal: 90,
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  titleStyle: {
    color: "#000",
    fontSize: 20,
    fontWeight: "500",
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
  countryButtonStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "#00A884",
  },
  inputViewStyle: {
    display: "flex",
    flexDirection: "row",
  },
  numberViewStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#05AA82",
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#05AA82",
  },
  nextButtonStyle: {
    height: 28,
    width: 60,
    backgroundColor: "#00A884",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    // marginTop: 10,
  },
  buttonTextStyle: {
    color: "#000",
    fontSize: 14,
    fontWeight: "400",
  },
});
