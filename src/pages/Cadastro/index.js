import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

// André Spinelli - RM 551016
// Augusto Laurino - RM 93498
// Caio Zanardo - RM 95125
// Gabriel Wilke - RM 95211
// Guilherme Garcia - RM 94392

export default function Cadastro() {
  const [destDoa, setDestDoa] = useState("Doador");
  const [nome, setNome] = useState();
  const [cpfCnpj, setCpfCnpj] = useState();
  const [idade, setIdade] = useState(0);
  const [sexo, setSexo] = useState("Masculino");
  const [email, setEmail] = useState();
  const [celular, setCelular] = useState();
  const [cep, setCep] = useState();
  const [brasileiro, setBrasileiro] = useState(false);
  const [endereco, setEndereco] = useState();

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

  const consultaCep = async (cep) => {
    const response = await api.get("/" + cep + "/json");
    setEndereco(response.data);
  };

  const navigation = useNavigation();

  async function irTelaPerfil() {
    await consultaCep(cep);
    navigation.navigate("Perfil", {
      usuario: destDoa,
      nome: nome,
      cpfCnpj: cpfCnpj,
      idade: idade,
      sexo: sexo,
      email: email,
      celular: celular,
      nacionalidade: brasileiro ? "Brasileiro" : "Estrangeiro",
      cep: cep,
      endereco: endereco,
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
        <Text style={[styles.titulo, dia && styles["font-color"]]}>
          Cadastro de Usuário
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bg}>
            <Text style={[styles.label, dia && styles["font-color"]]}>
              Brasileiro:
            </Text>
            <Switch
              style={styles.botaozinho}
              value={brasileiro}
              onValueChange={(valorSwitch) => setBrasileiro(valorSwitch)}
            />
            <Text style={[styles.label, dia && styles["font-color"]]}>
              Usuário:
            </Text>
            <Picker
              style={styles.input}
              selectedValue={destDoa}
              onValueChange={(itemValue, itemIndex) => setDestDoa(itemValue)}
            >
              <Picker.Item key={1} value="Doador" label="Doador" />
              <Picker.Item key={2} value="Destinatário" label="Destinatário" />
            </Picker>

            <Text style={[styles.label, dia && styles["font-color"]]}>
              Nome:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu Nome/Instituição..."
              onChangeText={(valor) => setNome(valor)}
            />

            <Text style={[styles.label, dia && styles["font-color"]]}>
              Documento:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o CPF/CNPJ..."
              keyboardType="numeric"
              onChangeText={(valor) => setCpfCnpj(valor)}
            />

            <Text style={[styles.label, dia && styles["font-color"]]}>
              Idade:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua idade..."
              keyboardType="numeric"
              onChangeText={(valor) => setIdade(valor)}
            />

            <Text style={[styles.label, dia && styles["font-color"]]}>
              Sexo:
            </Text>
            <Picker
              style={styles.input}
              selectedValue={sexo}
              onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
            >
              <Picker.Item key={1} value="Masculino" label="Masculino" />
              <Picker.Item key={2} value="Feminino" label="Feminino" />
            </Picker>

            <Text style={[styles.label, dia && styles["font-color"]]}>
              Email:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu email..."
              onChangeText={(valor) => setEmail(valor)}
            />

            <Text style={[styles.label, dia && styles["font-color"]]}>
              Celular:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu celular..."
              keyboardType="numeric"
              onChangeText={(valor) => setCelular(valor)}
            />

            <Text style={[styles.label, dia && styles["font-color"]]}>
              CEP:
            </Text>
            <View style={styles.viewInput}>
              <TextInput
                style={styles.input}
                value={cep}
                placeholder="Digite seu CEP..."
                onChangeText={(valor) => setCep(valor)}
                underlineColorAndroid="transparent"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.botaoPosition}>
              <TouchableOpacity onPress={() => irTelaPerfil()}>
                <Text style={styles.botao}>Cadastrar-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
