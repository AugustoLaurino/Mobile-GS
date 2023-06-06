import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Image, ScrollView, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import api from "../../services/api";

// André Spinelli - RM 551016
// Augusto Laurino - RM 93498
// Caio Zanardo - RM 95125
// Gabriel Wilke - RM 95211
// Guilherme Garcia - RM 94392

export default function Perfil({ route }) {
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
    title: `Perfil`,
  });

  const [endereco, setEndereco] = useState();

  const consultaCep = async (cep) => {
    const response = await api.get("/" + cep + "/json");
    setEndereco(response.data);
  };

  useEffect(() => {
    consultaCep(route.params?.cep);
  }, []);

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
        <Image
          style={styles.image}
          source={require("./img/perfil-mobile.png")}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bg}>
            <View style={styles.espaco}>
              <Text style={styles.titulo}>Perfil de {route.params?.nome}</Text>
              <Text style={styles.texto}>Usuário: {route.params?.usuario}</Text>
              <Text style={styles.texto}>
                Documento: {route.params?.cpfCnpj}
              </Text>
              <Text style={styles.texto}>Idade: {route.params?.idade}</Text>
              <Text style={styles.texto}>Sexo: {route.params?.sexo}</Text>
              <Text style={styles.texto}>Email: {route.params?.email}</Text>
              <Text style={styles.texto}>Celular: {route.params?.celular}</Text>
              <Text style={styles.texto}>
                Nacionalidade: {route.params?.nacionalidade}
              </Text>
              <Text style={styles.texto}>CEP: {route.params?.cep}</Text>

              <Text style={styles.texto}>Endereço: {endereco?.logradouro}</Text>
              <Text style={styles.texto}>Bairro: {endereco?.bairro}</Text>
              <Text style={styles.texto}>Cidade: {endereco?.localidade}</Text>
              <Text style={styles.texto}>Estado: {endereco?.uf}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
