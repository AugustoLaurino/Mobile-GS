import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Image, Switch, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";

// André Spinelli - RM 551016
// Augusto Laurino - RM 93498
// Caio Zanardo - RM 95125
// Gabriel Wilke - RM 95211
// Guilherme Garcia - RM 94392

export default function Inicio() {
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

  return (
    <View style={styles.container}>
      <View style={[styles.box, dia && styles["bg-light"]]}>
        <View style={styles.top}>
          <View style={styles.topSide}>
            <Text style={styles.topText}>Gray mode</Text>
            <Switch
              style={styles.switch}
              value={dia}
              onValueChange={(valor) => setDia(valor)}
            />
          </View>
        </View>
        <Image
          style={styles.image}
          source={require("./img/logo-app-mobile.png")}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.titulo}>Bem vindo ao Ong Match</Text>

          <Text style={styles.texto}>
            Nosso app visa promover uma comunicação eficiente entre produtores
            ou doadores, ONGs e entidades públicas, utilizando inteligência
            artificial para identificar as áreas mais necessitadas, criar um
            modelo lógico de distribuição e otimizar as rotas de entrega dos
            alimentos. Isso contribui para facilitar a doação e distribuição de
            suprimentos, atendendo de forma mais eficiente as demandas das
            comunidades em situação de vulnerabilidade.
          </Text>
          <Text style={styles.textoDois}>
            O app funciona da seguinte forma, o usuário ou instituição que se
            cadastrar como destinatário, apenas receberá as doações, e os que se
            cadastrarem como doador, irão fazer as doações.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
