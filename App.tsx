import { View } from 'react-native';
import { Header } from './components/header/Header';
import { Home } from './components/pages/home/Home';
import { styles } from 'App.styles';

export default function App() {
  return (
    <View>
      <Header style={styles.header} />
      <Home />
    </View>
  );
}

