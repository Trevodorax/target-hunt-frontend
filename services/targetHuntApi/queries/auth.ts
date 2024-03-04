import { query } from "@services/targetHuntApi/setup";
import {
  AuthLoginPostBody,
  AuthLoginPostResponse,
  AuthRegisterPostBody,
  AuthRegisterPostResponse,
} from "target-hunt-bridge";

export const loginQuery = async (
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

export const registerQuery = async (
  body: AuthRegisterPostBody,
): Promise<AuthRegisterPostResponse | null> => {
  try {
    const result = await query.post("auth/register");
    const json = await result.json<AuthLoginPostResponse>();
    return json;
  } catch {
    return null;
  }
};
