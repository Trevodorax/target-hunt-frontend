import { Image, StyleSheet, View } from "react-native"
import { RoomCodeSelector } from "./roomCodeSelector/RoomCodeSelector"
import { AuthSelector } from "./authSelector/AuthSelector"
import { styles } from "./Home.styles"

const logo = require('../assets/target-hunt-logo.png')

export const Home = () => {
  return (
  <View>
    <RoomCodeSelector />
    <View style={styles.bigCenterLogoContainer}>
      <Image
          style={styles.bigCenterLogo}
          source={logo}
        />
    </View>
    <AuthSelector />
  </View>
  )
}


