import { Text } from "@components/designSystem/text/Text";
import { AntDesign } from "@expo/vector-icons";
import { FC, useState } from "react";
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
  const [isActive, setIsActive] = useState(false);

  const styles = computeStyles(isActive, variant);

  return (
    <View
      style={[
        styles.buttonContainer,
        !label && styles.iconOnlyButtonContainerStyles,
        style,
      ]}
    >
      <Pressable
        onPressIn={() => setIsActive(true)}
        onPressOut={() => setIsActive(false)}
        style={[styles.button, !label && styles.iconOnlyButtonStyles]}
        onPress={onPress}
      >
        {loading ? (
          <ActivityIndicator
            size={24}
            color={variant === "inversed" ? "#FFF" : "#000"}
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
