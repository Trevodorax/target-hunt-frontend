import { StyleSheet } from "react-native";

export type ButtonVariant = "neutral" | "inversed" | "low";

export const computeStyles = (variant: ButtonVariant, iconOnly: boolean) => {
  const backgroundColorForVariant: Record<ButtonVariant, string> = {
    neutral: "#FFF",
    inversed: "#000",
    low: "FF000000",
  };

  const contentColor = variant === "inversed" ? "#FFF" : "#000";

  return StyleSheet.create({
    buttonContainer: {
      width: 160,
      height: 40,
      borderColor: variant === "low" ? "#FFFFFF00" : "#000",
      borderWidth: 1,
      borderRadius: 4,
      paddingHorizontal: 8,
      backgroundColor: backgroundColorForVariant[variant],
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
      paddingRight: iconOnly ? 0 : 8,
      color: contentColor,
    },
    buttonLabel: {
      flexGrow: 1,
      fontSize: 16,
      fontWeight: "500",
      color: contentColor,
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
  });
};
