import { Button } from "@components/designSystem/button/Button";
import { Text } from "@components/designSystem/text/Text";
import { toggleDrawer } from "@store/layoutSlice/actions";
import { useGlobalStore } from "@store/store";
import { Link } from "expo-router";
import { Image, View } from "react-native";

import { styles } from "./Header.styles";

const logo = require("@assets/target-hunt-logo.png");

export const Header = () => {
  const isDrawerOpen = useGlobalStore((state) => state.isDrawerOpen);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContentZone}>
        <Link href="/">
          <Image style={styles.logo} source={logo} />
        </Link>
        <Text type="h1" style={styles.title}>
          Target Hunt
        </Text>
        <Button
          style={styles.icon}
          iconName={isDrawerOpen ? "menu-fold" : "menu-unfold"}
          onPress={toggleDrawer}
          variant="low"
        />
      </View>
    </View>
  );
};
