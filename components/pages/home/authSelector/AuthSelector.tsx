import { Text, View } from "react-native"
import { Button } from "../../../designSystem/button/Button"
import { styles } from "./AuthSelector.styles"

export const AuthSelector = () => {
  return (
    <View style={styles.authSelectorContainer}>
      <Text style={styles.title}>Who's there?</Text>
      <View style={{display: 'flex', gap: 8}}>
        <Button label='Register' iconName='user' variant='inversed' />
        <Button label='Log In' iconName='login' />
      </View>
    </View>
  )
}
