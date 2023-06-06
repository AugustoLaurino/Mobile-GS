import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#202124",
  },
  titulo: {
    padding: 10,
    fontSize: 18,
    textAlign: "center",
    fontWeight: 700,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#222",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    fontSize: 14,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "white",
    color: "gray",
  },
  label: {
    margin: 5,
    fontSize: 16,
    marginLeft: 15,
  },
  bg: {
    padding: 30,
    paddingTop: 30,
    paddingBottom: 35,
    marginTop: 10,
  },
  botaozinho: {
    marginRight: 200,
    marginLeft: 10,
  },
  botao: {
    backgroundColor: "blue",
    color: "#FFF",
    height: 40,
    width: 100,
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
  botaoPosition: {
    alignItems: "center",
  },
  top: {
    flexDirection: "row",
    gap: 32,
    width: "100%",
    justifyContent: "space-around",
    paddingTop: 20,
    paddingBottom: 10,
  },
  topSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  topText: {
    fontSize: 22,
  },
  switch: {
    transform: [{ scale: 1.5 }],
  },
  "bg-dark": {
    backgroundColor: "#202124",
  },
  "font-color": {
    color: "#FFFFFF",
  },
  box: {
    padding: 16,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
  },
});

export { styles };
