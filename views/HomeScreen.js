import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

export default function HomeScreen() {
  return (
    <>
      <View style={styles.header}>
        <Text>Home Screen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.12,
    backgroundColor: "",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
