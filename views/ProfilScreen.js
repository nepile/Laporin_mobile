import { Text, View, StyleSheet, Image } from "react-native";
import React, { Component } from "react";

export default function ProfilScreen() {
  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.imgHeader}
          source={require("../assets/ilustrations/profil.png")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.3,
    backgroundColor: "#5BC0F8",
    justifyContent: "center",
  },
  imgHeader: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
});
