import React, { useEffect, useState } from "react";
import { View, Text, Switch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

// André Spinelli - RM 551016
// Augusto Laurino - RM 93498
// Caio Zanardo - RM 95125
// Gabriel Wilke - RM 95211
// Guilherme Garcia - RM 94392

export default function Historico({ route }) {
  //dark mode
  const [dia, setDia] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [dia]);

  async function setData() {
    await AsyncStorage.setItem("dia", String(dia));
  }

  async function getData() {
    const dia = await AsyncStorage.getItem("dia");

    setDia(dia === "true" && true);
  }

  const navigation = useNavigation();
  console.log(route.params);
  navigation.setOptions({
    title: `Historico`,
  });

  return (
    <View style={styles.container}>
      <View style={[styles.box, dia && styles["bg-dark"]]}>
        <View style={styles.top}>
          <View style={styles.topSide}>
            <Text style={[styles.topText, dia && styles["font-color"]]}>
              Dark mode
            </Text>
            <Switch
              style={styles.switch}
              value={dia}
              onValueChange={(valor) => setDia(valor)}
            />
          </View>
        </View>
        <Text style={[styles.titulo, dia && styles["font-color"]]}>
          Ultima Doação
        </Text>
        <View style={styles.bg}>
          <View style={styles.espaco}>
            <Text style={styles.texto}>
              Produto:{" "}
              <Text style={styles.resultado}>{route.params?.produto}</Text>
            </Text>
            <Text style={styles.texto}>
              Quantidade:{" "}
              <Text style={styles.resultado}>{route.params?.quantidade}</Text>
            </Text>
            <Text style={styles.texto}>
              Data de validade:{" "}
              <Text style={styles.resultado}>{route.params?.dataV}</Text>
            </Text>
            <Text style={styles.texto}>
              Destinatário:{" "}
              <Text style={styles.resultado}>{route.params?.destinatario}</Text>
            </Text>
            <Text style={styles.texto}>
              Documento do destinatário:{" "}
              <Text style={styles.resultado}>{route.params?.cpfCnpj}</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
