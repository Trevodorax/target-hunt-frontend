import { AntdIconName, Button } from "@components/designSystem/button/Button";
import { Text } from "@components/designSystem/text/Text";
import { logoutAction } from "@store/authSlice/actions";
import { toggleDrawer } from "@store/layoutSlice/actions";
import { useGlobalStore } from "@store/store";
import { router } from "expo-router";
import { FC, useEffect, useRef } from "react";
import { Animated, View } from "react-native";

import { styles } from "./Drawer.styles";

type DrawerContent = DrawerSection[];

interface DrawerSection {
  title: string;
  actions: (DrawerAction | null)[];
}

interface DrawerAction {
  iconName: AntdIconName;
  label: string;
  callback: () => void;
}

export const Drawer: FC = () => {
  const isOpen = useGlobalStore((state) => state.isDrawerOpen);
  const token = useGlobalStore((state) => state.token);
  const pan = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    if (isOpen) {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(pan, {
        toValue: { x: 300, y: 0 },
        useNativeDriver: false,
      }).start();
    }
  }, [isOpen]);

  const drawerContent: DrawerContent = [
    {
      title: "Navigation",
      actions: [
        {
          iconName: "home",
          label: "Home",
          callback: () => {
            router.push("/");
          },
        },
      ],
    },
    {
      title: "Account",
      actions: [
        {
          iconName: "login",
          label: "Log in",
          callback: () => {
            router.push("/login");
          },
        },
        {
          iconName: "user",
          label: "Register",
          callback: () => {
            router.push("/register");
          },
        },
        token
          ? {
              iconName: "logout",
              label: "Log out",
              callback: () => {
                logoutAction();
              },
            }
          : null,
      ],
    },
  ];

  return (
    <Animated.View
      style={[{ transform: [{ translateX: pan.x }] }, styles.drawerContainer]}
    >
      {drawerContent.map((section, index) => (
        <View key={index}>
          <Text style={styles.title} type="h1">
            {section.title}
          </Text>
          {section.actions.map(
            (action, index) =>
              action && (
                <Button
                  key={index}
                  iconName={action.iconName}
                  label={action.label}
                  onPress={() => {
                    toggleDrawer();
                    action.callback();
                  }}
                  variant="low"
                  style={styles.action}
                  textAlign="left"
                />
              ),
          )}
        </View>
      ))}
    </Animated.View>
  );
};
