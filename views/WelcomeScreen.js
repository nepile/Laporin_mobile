import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
const _width = Dimensions.get("screen").width;

export default function WelcomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.imgHeader}
          source={require("../assets/ilustrations/welcome.png")}
        />
      </View>

      <View style={styles.body}>
        <Text style={styles.textTitle}>Selamat</Text>
        <Text style={styles.textTitle}>Datang!</Text>
        <Text style={styles.textDesc}>
          Sampaikan aspirasi dan pengaduan anda dalam laporan online.
        </Text>

        <View style={styles.wrapBtn}>
          <TouchableOpacity
            style={styles.btnDaftar}
            onPress={() =>
              Linking.openURL("http://github.com/nepile/laporin_mobile")
            }
          >
            <Text style={styles.textBtnDaftar}>Daftar Akun</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnMasuk}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.textBtnMasuk}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.4,
    width: _width,
    backgroundColor: "red",
  },
  imgHeader: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  body: {
    flex: 0.6,
    paddingTop: 25,
    paddingHorizontal: 20,
    backgroundColor: "#5BC0F8",
  },
  textTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 35,
    color: "#fff",
  },
  textDesc: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    marginTop: 10,
    color: "#fff",
  },
  wrapBtn: {
    position: "relative",
    top: "20%",
  },
  btnDaftar: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  textBtnDaftar: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#000",
  },
  btnMasuk: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 10,
  },
  textBtnMasuk: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#fff",
  },
});
