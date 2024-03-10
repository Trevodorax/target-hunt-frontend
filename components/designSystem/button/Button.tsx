import { Text } from "@components/designSystem/text/Text";
import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import { View, Pressable, ActivityIndicator } from "react-native";

import { ButtonVariant, computeStyles } from "./Button.styles";

export type AntdIconName =
  | "login"
  | "user"
  | "doubleright"
  | "menu-fold"
  | "menu-unfold"
  | "home"
  | "logout"
  | "reload1";

interface Props {
  label?: string;
  onPress?: () => void;
  iconName?: AntdIconName;
  variant?: ButtonVariant;
  style?: object;
  textAlign?: "auto" | "center" | "justify" | "left" | "right";
  loading?: boolean;
}

export const Button: FC<Props> = ({
  label,
  onPress,
  iconName,
  variant = "neutral",
  style,
  textAlign = "center",
  loading = false,
}) => {
  const iconOnly = label === undefined || label === null || label === "";
  const styles = computeStyles(variant, iconOnly);

  return (
    <View
      style={[
        styles.buttonContainer,
        iconOnly && styles.iconOnlyButtonContainerStyles,
        style,
      ]}
    >
      <Pressable
        style={[styles.button, iconOnly && styles.iconOnlyButtonStyles]}
        onPress={onPress}
      >
        {loading ? (
          <ActivityIndicator
            size={24}
            color={variant === "inversed" ? "#FFF" : "#000"}
            style={styles.buttonIcon}
          />
        ) : (
          iconName && (
            <AntDesign
              style={styles.buttonIcon}
              name={iconName}
              size={24}
              color="black"
            />
          )
        )}
        {label && (
          <Text
            type="h3"
            style={[
              styles.buttonLabel,
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
