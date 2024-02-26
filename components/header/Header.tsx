import { Image, Text, View } from "react-native"
import { styles } from "./Header.styles"

const logo = require('../assets/target-hunt-logo.png')
const burgerMenuIcon = require('../assets/burger-menu-icon.png')

export const Header = ({style}) => {
  return (
  <View style={[styles.headerContainer, style]}>
    <View style={styles.headerContentZone}>
      <Image
        style={styles.logo} 
        source={logo}
      />
      <Text style={styles.title}>Target Hunt</Text>
      <Image
        style={styles.icon} 
        source={burgerMenuIcon}
      />
    </View>
  </View>
  )
}
