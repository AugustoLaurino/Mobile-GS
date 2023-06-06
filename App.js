import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import Inicio from "./src/pages/Inicio";
import Cadastro from "./src/pages/Cadastro";
import Perfil from "./src/pages/Perfil";
import Doar from "./src/pages/Doar";
import Historico from "./src/pages/Historico";

// André Spinelli - RM 551016
// Augusto Laurino - RM 93498
// Caio Zanardo - RM 95125
// Gabriel Wilke - RM 95211
// Guilherme Garcia - RM 94392

const Tab = createBottomTabNavigator();

const icons = {
  Inicio: {
    name: "ios-home",
  },
  Cadastro: {
    name: "ios-add-circle",
  },
  Perfil: {
    name: "ios-person",
  },
  Doar: {
    name: "ios-logo-usd",
  },
  Historico: {
    name: "ios-receipt",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          activeBackgroundColor: "lightblue",
          activeTintColor: "black",
          inactiveBackgroundColor: "white",
          inactiveTintColor: "black",
        }}
      >
        <Tab.Screen name="Inicio" component={Inicio} />
        <Tab.Screen name="Cadastro" component={Cadastro} />
        <Tab.Screen name="Perfil" component={Perfil} />
        <Tab.Screen name="Doar" component={Doar} />
        <Tab.Screen name="Historico" component={Historico} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
