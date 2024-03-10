import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    padding: 16,
    paddingTop: 64,
    backgroundColor: "#fafafa",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    zIndex: 10,
  },
  headerContentZone: {
    display: "flex",
    width: "100%",
    height: 32,

    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 32,
    height: 32,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
