import { Text } from "@components/designSystem/text/Text";
import { Link } from "expo-router";
import { Image, View } from "react-native";

import { styles } from "./Header.styles";

const burgerMenuIcon = require("@assets/burger-menu-icon.png");
const logo = require("@assets/target-hunt-logo.png");

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContentZone}>
        <Link href="/">
          <Image style={styles.logo} source={logo} />
        </Link>
        <Text type="h1" style={styles.title}>
          Target Hunt
        </Text>
        <Image style={styles.icon} source={burgerMenuIcon} />
      </View>
    </View>
  );
};
