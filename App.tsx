import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoadingPage from "./src/components/pages/LoadingPage/LoadingPage";
import WelcomePage from "./src/components/pages/WelcomePage/WelcomePage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/components/pages/LoginPage/LoginPage";
import CountryPage from "./src/components/pages/LoginPage/CountryPage";
import OtpPage from "./src/components/pages/LoginPage/OtpPage";
import HomePage from "./src/components/pages/HomePage/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login_page">
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
        <Stack.Screen
          name="country_page"
          component={CountryPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="otp_page"
          component={OtpPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="home_page"
          component={HomePage}
          options={{
            headerShown: false,
          }}
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
