import { getFriendsQuery } from "@services/targetHuntApi/queries/friends";
import { useEffect } from "react";
import { Image, View } from "react-native";

import { styles } from "./Home.styles";
import { AuthSelector } from "./authSelector/AuthSelector";
import { RoomCodeSelector } from "./roomCodeSelector/RoomCodeSelector";

const logo = require("@assets/target-hunt-logo.png");

export const Home = () => {
  useEffect(() => {
    getFriendsQuery().then((data) => console.log(data));
  });
  return (
    <View>
      <RoomCodeSelector />
      <View style={styles.bigCenterLogoContainer}>
        <Image style={styles.bigCenterLogo} source={logo} />
      </View>
      <AuthSelector />
    </View>
  );
};
