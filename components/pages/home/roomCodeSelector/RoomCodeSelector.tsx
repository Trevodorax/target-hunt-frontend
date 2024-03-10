import { Button } from "@components/designSystem/button/Button";
import { Text } from "@components/designSystem/text/Text";
import { TextInput } from "@components/designSystem/textInput/TextInput";
import { View } from "react-native";

import { styles } from "./RoomCodeSelector.styles";

export const RoomCodeSelector = () => {
  return (
    <View style={styles.roomCodeContainer}>
      <Text type="h1" style={styles.title}>
        Room code
      </Text>
      <View style={styles.selector}>
        <TextInput placeholder="#005642" />
        <Button iconName="doubleright" variant="inversed" />
      </View>
    </View>
  );
};
