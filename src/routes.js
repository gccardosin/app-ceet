import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Portal from "./pages/Portal";
import Contato from "./pages/Contato";
import Historia from "./pages/Historia";

import { Entypo, Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopColor: "transparent",
          paddingTop: 3,
          paddingBottom: 20,
        },
        tabBarActiveTintColor: "#FFF",
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color}  />
          ),
        }}
      />

      <Tab.Screen
        name="Cursos"
        component={Cursos}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="graduation-cap" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Historia"
        component={Historia}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="book" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Contato"
        component={Contato}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="clipboard" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Portal"
        component={Portal}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="link" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
