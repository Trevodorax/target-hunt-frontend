import { useGlobalStore } from "@store/store";

export const toggleDrawer = async (): Promise<void> => {
  useGlobalStore.setState((state) => ({ isDrawerOpen: !state.isDrawerOpen }));
};
