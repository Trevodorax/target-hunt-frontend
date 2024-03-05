import { Text } from "@components/designSystem/text/Text";
import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import { View, Pressable } from "react-native";

import { styles } from "./Button.styles";

export type AntdIconName =
  | "login"
  | "user"
  | "doubleright"
  | "menu-fold"
  | "menu-unfold"
  | "home"
  | "logout";

interface Props {
  label?: string;
  onPress?: () => void;
  iconName?: AntdIconName;
  variant?: "neutral" | "inversed" | "low";
  style?: object;
  textAlign?: "auto" | "center" | "justify" | "left" | "right";
}

export const Button: FC<Props> = ({
  label,
  onPress,
  iconName,
  variant = "neutral",
  style,
  textAlign = "center",
}) => {
  return (
    <View
      style={[
        styles.buttonContainer,
        !label && styles.iconOnlyButtonContainerStyles,
        variant === "inversed" && styles.inversedContainerStyles,
        variant === "low" && styles.lowContainerStyles,
        style,
      ]}
    >
      <Pressable
        style={[styles.button, !label && styles.iconOnlyButtonStyles]}
        onPress={onPress}
      >
        {iconName && (
          <AntDesign
            style={variant === "inversed" && styles.inversedContentStyles}
            name={iconName}
            size={24}
            color="black"
          />
        )}
        {label && (
          <Text
            type="h3"
            style={[
              styles.buttonLabel,
              variant === "inversed" && styles.inversedContentStyles,
              { textAlign, paddingLeft: textAlign === "left" ? 8 : 0 },
            ]}
          >
            {label}
          </Text>
        )}
      </Pressable>
    </View>
  );
};
