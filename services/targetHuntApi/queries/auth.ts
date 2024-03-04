import { query } from "@services/targetHuntApi/setup";
import { AuthLoginPostBody, AuthLoginPostResponse } from "target-hunt-bridge";

export const login = async (
  body: AuthLoginPostBody,
): Promise<AuthLoginPostResponse | null> => {
  try {
    const result = await query.post("auth/login");
    const json = await result.json<AuthLoginPostResponse>();
    return json;
  } catch {
    return null;
  }
};
