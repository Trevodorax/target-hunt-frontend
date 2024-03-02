import { Text, View } from "react-native";

import { styles } from "./RoomCodeSelector.styles";
import { Button } from "../../../designSystem/button/Button";
import { TextInput } from "../../../designSystem/textInput/TextInput";

export const RoomCodeSelector = () => {
  return (
    <View style={styles.roomCodeContainer}>
      <Text style={styles.title}>Room code</Text>
      <View style={styles.selector}>
        <TextInput placeholder="#005642" />
        <Button iconName="doubleright" variant="inversed" />
      </View>
    </View>
  );
};
