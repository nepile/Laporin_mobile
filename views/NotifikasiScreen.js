import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

export default function NotifikasiScreen() {
  return (
    <>
      <View style={styles.header}>
        <Text>Notifikasi Screen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "",
    justifyContent: "center",
  },
});
