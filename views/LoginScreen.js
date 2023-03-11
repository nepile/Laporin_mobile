import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Linking,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
const _width = Dimensions.get("screen").width;

export default function LoginScreen({ navigation }) {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.textTitle}>Silakan Login</Text>
        <Text style={styles.textDesc}>
          Pastikan anda sudah mempunyai akun Laporin.
        </Text>
      </View>

      <View style={styles.body}>
        <View style={styles.textWrap}>
          <Icon name="envelope" color="#000" size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="contoh@gmail.com"
            // keyboardType="numeric"
            // value={nrp}
            // onChangeText={setNrp}
          />
        </View>

        <View style={styles.textWrap}>
          <Icon name="key" color="#000" size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            // value={password}
            // onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity
            onPress={() => Linking.openURL("http://www.google.com")}
          >
            <Text
              style={{ fontFamily: "Poppins_400Regular", color: "#5BC0F8" }}
            >
              Lupa Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnWrap}>
          <TouchableOpacity
            style={styles.btnMasuk}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.textBtnMasuk}>Masuk</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnDaftar}
            onPress={() =>
              Linking.openURL("http://github.com/nepile/laporin_mobile")
            }
          >
            <Text style={styles.textBtnDaftar}>Daftar Akun</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.5,
    backgroundColor: "#5BC0F8",
    justifyContent: "center",
    paddingHorizontal: 25,
    zIndex: -1,
  },
  textTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 26,
    color: "#fff",
  },
  textDesc: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#fff",
  },
  body: {
    height: "60%",
    position: "absolute",
    bottom: 0,
    width: _width,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 5,
    backgroundColor: "#fff",
  },
  textWrap: {
    flexDirection: "row",
    paddingVertical: 18,
    paddingHorizontal: 15,
    paddingTop: 21,
    borderWidth: 0.5,
    borderRadius: 6,
    borderColor: "gray",
    marginTop: 15,
  },
  textInput: {
    alignItems: "center",
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
    width: "100%",
    color: "gray",
    paddingLeft: 15,
  },
  btnWrap: {
    position: "absolute",
    bottom: 0,
    width: _width,
    height: "40%",
    paddingHorizontal: 15,
  },
  btnMasuk: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 5,
    marginTop: 25,
    backgroundColor: "#5BC0F8",
  },
  textBtnMasuk: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#fff",
  },
  btnDaftar: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 10,
  },
  textBtnDaftar: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#000",
  },
});
