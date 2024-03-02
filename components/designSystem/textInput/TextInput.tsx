import { FC } from "react";
import { TextInput as RNTextInput } from "react-native";

import { styles } from "./TextInput.styles";

interface Props {
  placeholder?: string;
  value?: string;
  setValue?: (value: string) => void;
}

export const TextInput: FC<Props> = ({ placeholder, value, setValue }) => {
  return (
    <RNTextInput
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      placeholderTextColor="#555"
      style={styles.input}
    />
  );
};
