import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  image: {
    width: 170,
    height: 170,
    alignItems: "center",
    resizeMode: "contain",
    marginTop: 10,
    backgroundColor: "lightgray",
    borderRadius: 200,
  },
  titulo: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: 600,
    paddingBottom: 10,
  },
  texto: {
    fontSize: 16,
    fontWeight: 400,
    padding: 2,
  },
  espaco: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    width: 280,
  },
  bg: {
    flex: 1,
    alignItems: "center",
    margin: 20,
    backgroundColor: "lightgrey",
    borderRadius: 10,
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
