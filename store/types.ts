import { FriendRequestSchema, UserSchema } from "target-hunt-bridge";
import { z } from "zod";

type User = z.infer<typeof UserSchema>;
type FriendRequest = z.infer<typeof FriendRequestSchema>;

export interface AuthSlice {
  token: string | null;
  id: string | null;
  pseudo: string | null;
  email: string | null;
}

export interface LayoutSlice {
  isDrawerOpen: boolean;
}

export interface FriendsSlice {
  friends: User[];
  sentFriendRequests: FriendRequest[];
  receivedFriendRequests: FriendRequest[];
}

export interface GlobalStore extends AuthSlice, LayoutSlice, FriendsSlice {}
