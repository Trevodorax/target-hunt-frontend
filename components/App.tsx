import { Header } from "@components/header/Header";
import { Home } from "@components/pages/home/Home";
import { FC } from "react";
import { View } from "react-native";

import { styles } from "./App.styles";

const App: FC = () => {
  return (
    <View>
      <Header style={styles.header} />
      <Home />
    </View>
  );
};

export default App;
