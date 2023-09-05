import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";

const HomePage = () => {
  return (
    <View>
      <Appbar.Header>
        {/* <Appbar.Content title="Title">
          <Text>ok</Text>
        </Appbar.Content> */}
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
