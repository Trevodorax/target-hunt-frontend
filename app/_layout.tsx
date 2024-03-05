import { Drawer } from "@components/drawer/Drawer";
import { Header } from "@components/header/Header";
import { Slot } from "expo-router";
import { FC } from "react";
import { ScrollView, View } from "react-native";

const Layout: FC = () => {
  return (
    <View style={{ backgroundColor: "#fafafa" }}>
      <Header />
      <Drawer />
      <ScrollView>
        <Slot />
      </ScrollView>
    </View>
  );
};

export default Layout;
