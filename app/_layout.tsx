import { Header } from "@components/header/Header";
import { Slot } from "expo-router";
import { FC } from "react";
import { ScrollView, View } from "react-native";

const Layout: FC = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        <Slot />
      </ScrollView>
    </View>
  );
};

export default Layout;
