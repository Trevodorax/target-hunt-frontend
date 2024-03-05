import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  drawerContainer: {
    position: "absolute",
    height: "100%",
    width: 300,
    backgroundColor: "#fafafa",
    right: 0,
    top: 112,
    zIndex: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    paddingTop: 32,
  },
  title: {
    paddingStart: 24,
    display: "flex",
  },
  action: {
    paddingTop: 8,
    paddingStart: 24,
  },
});
