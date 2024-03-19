import { StateCreator } from "zustand";

import { GlobalStore, FriendsSlice } from "../types";

export const initialState: FriendsSlice = {
  friends: [],
  receivedFriendRequests: [],
  sentFriendRequests: [],
};

export const createFriendsSlice: StateCreator<
  GlobalStore,
  [["zustand/devtools", never]],
  any,
  FriendsSlice
> = () => initialState;
