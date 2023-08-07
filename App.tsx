import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoadingPage from "./src/components/pages/LoadingPage/LoadingPage";
import WelcomePage from "./src/components/pages/WelcomePage/WelcomePage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/components/pages/LoginPage/LoginPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome_page">
        <Stack.Screen
          name="loading_page"
          component={LoadingPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="welcome_page"
          component={WelcomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login_page"
          component={LoginPage}
          // options={{
          //   headerShown: false,
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
