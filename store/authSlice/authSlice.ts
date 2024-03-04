import { StateCreator } from "zustand";
import { persist } from "zustand/middleware";

import { GlobalStore, AuthSlice } from "../types";

export const initialState: AuthSlice = {
  token: null,
};

export const createAuthSlice: StateCreator<
  GlobalStore,
  [["zustand/devtools", never]],
  any,
  AuthSlice
> = persist(() => initialState, { name: "auth" });
