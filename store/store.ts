import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createAuthSlice } from "./authSlice/authSlice";
import { GlobalStore } from "./types";

export const useGlobalStore = create<GlobalStore>()(
  devtools((...a) => ({
    ...createAuthSlice(...a),
  })),
);
