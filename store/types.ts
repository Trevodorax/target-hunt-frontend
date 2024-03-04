import { AuthLoginPostBody } from "target-hunt-bridge";

export type LoginAction = (body: AuthLoginPostBody) => Promise<void>;

export interface AuthSlice {
  token: string | null;
}

// add future slices to this
export interface GlobalStore extends AuthSlice {}
