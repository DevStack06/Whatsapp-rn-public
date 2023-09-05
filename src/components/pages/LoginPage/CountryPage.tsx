import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import countryData from "../../../data/country.json";
import CountryPageItem from "./CountryPageItem";

const CountryPage = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Appbar.Header
        style={{
          backgroundColor: "#fff",
          elevation: 9,
        }}
      >
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Select your country" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <ScrollView style={styles.root}>
        {countryData.map((item) => {
          return (
            <CountryPageItem
              name={item.name}
              flag={item.flag}
              dial_code={item.dial_code}
              key={item.code}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CountryPage;

const styles = StyleSheet.create({
  root: {
    paddingTop: 4,
    backgroundColor: "#fff",
  },
});
