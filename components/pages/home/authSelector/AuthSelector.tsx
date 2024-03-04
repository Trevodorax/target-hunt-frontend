import { Text } from "@components/designSystem/text/Text";
import { router } from "expo-router";
import { View } from "react-native";

import { styles } from "./AuthSelector.styles";
import { Button } from "../../../designSystem/button/Button";

export const AuthSelector = () => {
  return (
    <View style={styles.authSelectorContainer}>
      <Text type="h1" style={styles.title}>
        Who's there?
      </Text>
      <View style={{ display: "flex", gap: 8 }}>
        <Button
          label="Register"
          iconName="user"
          variant="inversed"
          onPress={() => {
            router.push("/register");
          }}
        />
        <Button
          label="Log In"
          iconName="login"
          onPress={() => {
            router.push("/login");
          }}
        />
      </View>
    </View>
  );
};
