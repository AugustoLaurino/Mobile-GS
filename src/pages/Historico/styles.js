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
    fontWeight: 600,
    justifyContent: "center",
  },
  texto: {
    fontSize: 16,
    fontWeight: 400,
    padding: 3,
    marginTop: 10,
  },
  espaco: {
    padding: 15,
    borderRadius: 5,
    width: 250,
  },
  bg: {
    margin: 20,
    backgroundColor: "lightgrey",
    borderRadius: 10,
    padding: 10,
  },
  resultado: {
    fontSize: 14,
    fontWeight: "normal",
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
