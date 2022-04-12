import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text>SignupScreen</Text>
      <Button title="Sign In" onPress={() => navigation.navigate("Signin")} />
      <Button
        title="Main Flow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
