import React from "react";
import { useTheme } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Header from "../components/Header";
import Home from "../flows/repositories/home";
import Favorites from "../flows/favorites";
import { useRepository } from "../hooks/useRepository";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomRouter() {
  const theme = useTheme();
  const { toggleUserSelectionModal } = useRepository();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => (
          <Header title="WeFit" onPress={toggleUserSelectionModal} />
        ),
        tabBarLabelStyle: {
          fontFamily: theme.fonts.MEDIUM,
          margin: 2,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          if (route.name === "Repositórios") {
            iconName = "github";
            size = 24;
          } else if (route.name === "Favoritos") {
            size = 24;
            iconName = "star";
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Repositórios" component={Home} />
      <Tab.Screen name="Favoritos" component={Favorites} />
    </Tab.Navigator>
  );
}
