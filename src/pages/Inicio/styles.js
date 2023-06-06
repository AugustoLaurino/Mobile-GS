import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "lightgray",
  },
  image: {
    height: 170,
    width: 170,
    marginTop: 10,
    resizeMode: "contain",
  },
  titulo: {
    paddingVertical: 25,
    fontSize: 18,
    textAlign: "center",
    fontWeight: 600,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 8,
  },
  texto: {
    paddingHorizontal: 25,
    textAlign: "center",
    fontWeight: 700,
    maxWidth: 370,
  },
  textoDois: {
    paddingHorizontal: 25,
    textAlign: "center",
    fontWeight: 700,
    maxWidth: 370,
    marginTop: 10,
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
  "bg-light": {
    backgroundColor: "lightgray",
  },
  box: {
    padding: 16,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
  },
});

export { styles };
