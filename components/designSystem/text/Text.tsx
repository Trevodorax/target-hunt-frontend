import { FC, ReactNode } from "react";
import { Text as RNText } from "react-native";

import { styles } from "./Text.styles";

type TextType = "h1" | "h2" | "h3" | "normal" | "small";

interface Props {
  children: ReactNode;
  style?: object;
  type?: TextType;
}

export const Text: FC<Props> = ({ children, style, type = "normal" }) => {
  const adaptedStyle = styles[type];
  return (
    <RNText style={[style, styles.anyText, adaptedStyle]}>{children}</RNText>
  );
};
