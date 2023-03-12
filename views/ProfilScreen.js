import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";

const _width = Dimensions.get("screen").width;

export default function ProfilScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [telp, setTelp] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user").then((value) => {
      const user = JSON.parse(value);
      if (user !== null) {
        setEmail(user.email);
        setNama(user.nama);
        setTelp(user.telp);
      }
    });
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      navigation.replace("Welcome");
      Alert.alert("Perhatian", "Anda telah keluar!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.imgHeader}
          source={require("../assets/ilustrations/profil.png")}
        />
      </View>

      <View style={styles.wrapPhoto}>
        <View style={styles.photoRadius}>
          <Image
            style={styles.pp}
            source={require("../assets/ilustrations/photo.png")}
          />
        </View>
      </View>

      <View style={styles.textWrap}>
        <Icon name="user" color="gray" size={20} />
        <Text style={styles.text}>{nama}</Text>
      </View>
      <View style={styles.textWrap}>
        <Icon name="envelope" color="gray" size={20} />
        <Text style={styles.text}>{email}</Text>
      </View>
      <View style={styles.textWrap}>
        <Icon name="phone" color="gray" size={20} />
        <Text style={styles.text}>{telp}</Text>
      </View>

      <View style={styles.btnWrap}>
        <TouchableOpacity style={styles.btnKeluar} onPress={handleLogout}>
          <Text style={styles.textBtnKeluar}>Keluar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.6,
    backgroundColor: "#5BC0F8",
    justifyContent: "center",
  },
  imgHeader: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  wrapPhoto: {
    justifyContent: "center",
    alignItems: "center",
  },
  photoRadius: {
    position: "relative",
    bottom: 55,
    height: 110,
    width: 110,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
  pp: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  textWrap: {
    bottom: 25,
    flexDirection: "row",
    paddingVertical: 14,
    alignItems: "center",
    paddingHorizontal: 15,
    marginHorizontal: 15,
    paddingTop: 18,
    borderWidth: 0.5,
    borderRadius: 6,
    borderColor: "gray",
    marginTop: 15,
  },
  text: {
    alignItems: "center",
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
    width: "100%",
    color: "#000",
    paddingLeft: 15,
  },
  btnWrap: {
    position: "absolute",
    bottom: 0,
    height: "20%",
    width: _width,
    paddingHorizontal: 15,
  },
  btnKeluar: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 5,
    marginTop: 25,
    backgroundColor: "#000",
  },
  textBtnKeluar: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#fff",
  },
});
