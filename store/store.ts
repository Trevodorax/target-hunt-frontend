import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createAuthSlice } from "./authSlice/authSlice";
import { createFriendsSlice } from "./friendsSlice/friendsSlice";
import { createLayoutSlice } from "./layoutSlice/layoutSlice";
import { GlobalStore } from "./types";

export const useGlobalStore = create<GlobalStore>()(
  devtools((...a) => ({
    ...createAuthSlice(...a),
    ...createLayoutSlice(...a),
    ...createFriendsSlice(...a),
  })),
);
