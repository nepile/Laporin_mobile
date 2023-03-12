import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
// views
import Welcome from "./views/WelcomeScreen";
import Login from "./views/LoginScreen";

// core views
import Home from "./views/HomeScreen";
import LaporinPublik from "./views/LaporinPublik";
import Notifikasi from "./views/NotifikasiScreen";
import Profil from "./views/ProfilScreen";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const token = await AsyncStorage.getItem("user");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "Home" : "Welcome"}>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === "Home") {
                    iconName = focused ? "home" : "home";
                  } else if (route.name === "Laporin Publik") {
                    iconName = focused ? "file-text" : "file-text";
                  } else if (route.name === "Notifikasi") {
                    iconName = focused ? "bell" : "bell";
                  } else if (route.name === "Profil") {
                    iconName = focused ? "user" : "user";
                  }
                  return <Icon name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: "#5BC0F8",
                inactiveTintColor: "gray",
                labelStyle: {
                  fontFamily: "Poppins_400Regular",
                },
              }}
              tabBarStyle={{
                backgroundColor: "#fff",
                borderTopWidth: 0,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: -2,
                },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <Tab.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false, tabBarLabel: "Beranda" }}
              />
              <Tab.Screen
                name="Laporin Publik"
                component={LaporinPublik}
                options={{
                  headerStyle: {
                    backgroundColor: "#5BC0F8",
                  },
                  headerTitleStyle: {
                    fontFamily: "Poppins_600SemiBold",
                    color: "#fff",
                  },
                }}
              />
              <Tab.Screen
                name="Notifikasi"
                component={Notifikasi}
                options={{
                  headerStyle: {
                    backgroundColor: "#5BC0F8",
                  },
                  headerTitleStyle: {
                    fontFamily: "Poppins_600SemiBold",
                    color: "#fff",
                  },
                }}
              />
              <Tab.Screen
                name="Profil"
                component={Profil}
                options={{
                  headerStyle: {
                    backgroundColor: "#5BC0F8",
                  },
                  headerTitleStyle: {
                    fontFamily: "Poppins_600SemiBold",
                    color: "#fff",
                  },
                }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: null,
            headerTransparent: true,
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
