import { Image, Text, View } from "react-native";

import { styles } from "./Header.styles";

const burgerMenuIcon = require("@assets/burger-menu-icon.png");
const logo = require("@assets/target-hunt-logo.png");

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContentZone}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.title}>Target Hunt</Text>
        <Image style={styles.icon} source={burgerMenuIcon} />
      </View>
    </View>
  );
};
