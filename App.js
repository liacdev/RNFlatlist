import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MainList } from "./src/components/mainlist.js";
import { SecondList } from "./src/components/secondlist";

export default function App() {
  return (
    <>
      <MainList />

      <SecondList />
    </>
    // <View style={styles.container}>
    //  <Text>Replace this with a Flatlist!</Text>
    //  <StatusBar style="auto" />
    // </View>
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
