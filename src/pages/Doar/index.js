import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

// André Spinelli - RM 551016
// Augusto Laurino - RM 93498
// Caio Zanardo - RM 95125
// Gabriel Wilke - RM 95211
// Guilherme Garcia - RM 94392

export default function Doacao() {
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState();
  const [dataV, setDataV] = useState();
  const [destinatario, setDestinatario] = useState();
  const [cpfCnpjDestinatario, setCpfCnpjDestinatario] = useState();

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

  async function irTelaHistorico() {
    navigation.navigate("Historico", {
      produto: produto,
      quantidade: quantidade,
      dataV: dataV,
      destinatario: destinatario,
      cpfCnpj: cpfCnpjDestinatario,
    });
  }

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
        <Text style={[styles.titulo, dia && styles["font-color"]]}>Doação</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bg}>
            <Text style={[styles.pix, dia && styles["font-color"]]}>
              Doe uma quantia em dinheiro no Pix: {"\n"} ongmatchpix@gmail.com{" "}
              {"\n"}
              {"\n"} OU
            </Text>

            <Text style={[styles.label, dia && styles["font-color"]]}>
              Produto:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o produto..."
              onChangeText={(valor) => setProduto(valor)}
            />

            <Text style={[styles.label, dia && styles["font-color"]]}>
              Quantidade/Peso:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Digite a quantidade/peso..."
              onChangeText={(valor) => setQuantidade(valor)}
            />

            <Text style={[styles.label, dia && styles["font-color"]]}>
              Data de Validade:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Digite a data de validade..."
              onChangeText={(valor) => setDataV(valor)}
            />

            <Text style={[styles.label, dia && styles["font-color"]]}>
              Destinatário:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o destinatário..."
              onChangeText={(valor) => setDestinatario(valor)}
            />

            <Text style={[styles.label, dia && styles["font-color"]]}>
              Documento do Destinatário:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o CPF/CNPJ..."
              keyboardType="numeric"
              onChangeText={(valor) => setCpfCnpjDestinatario(valor)}
            />
            <View style={styles.botaoPosition}>
              <TouchableOpacity onPress={() => irTelaHistorico()}>
                <Text style={styles.botao}>Doar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
