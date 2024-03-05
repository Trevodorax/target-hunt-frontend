import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    width: 160,
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  button: {
    display: "flex",
    width: "100%",
    height: "100%",

    flexDirection: "row",
    alignItems: "center",

    borderRadius: 4,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    flexGrow: 1,
    fontSize: 16,
    fontWeight: "500",
  },
  iconOnlyButtonContainerStyles: {
    display: "flex",
    width: 40,

    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
  },
  iconOnlyButtonStyles: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
  },
  inversedContainerStyles: {
    backgroundColor: "#000",
  },
  inversedContentStyles: {
    color: "#FFF",
  },
  lowContainerStyles: {
    backgroundColor: "#FFFFFF00", // transparent
    borderColor: "#FFFFFF00", // transparent
  },
});
