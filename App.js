import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// font (poppins)
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

// views
import Welcome from "./views/WelcomeScreen";
import Login from "./views/LoginScreen";
import Home from "./views/HomeScreen";

export default function App() {
  // stack and tab navigator
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  // fonts
  const [fontLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  // check if user has been login
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const checkLoginStatus = async () => {
  //   const token = await AsyncStorage.getItem("user");
  //   if (token) {
  //     setIsAuthenticated(true);
  //   } else {
  //     setIsAuthenticated(false);
  //   }
  // };
  // useEffect(() => {
  //   checkLoginStatus();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === "Home") {
                    iconName = focused ? "home" : "home";
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
                options={{ headerShown: false }}
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
          options={{ title: null, headerTransparent: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
