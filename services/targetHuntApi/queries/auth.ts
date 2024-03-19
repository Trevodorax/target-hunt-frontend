import { query } from "@services/targetHuntApi/setup";
import {
  AuthLoginPostBody,
  AuthLoginPostResponse,
  AuthMeGetResponse,
  AuthMePatchBody,
  AuthMePatchResponse,
  AuthRegisterPostBody,
  AuthRegisterPostResponse,
} from "target-hunt-bridge";

import { handleError } from "../setup/helpers";

export const loginQuery = async (
  body: AuthLoginPostBody,
): Promise<AuthLoginPostResponse | null> => {
  try {
    const result = await query.post("auth/login", {
      json: body,
    });
    const json = await result.json<AuthLoginPostResponse>();
    return json;
  } catch (e) {
    handleError(e);
    return null;
  }
};

export const registerQuery = async (
  body: AuthRegisterPostBody,
): Promise<AuthRegisterPostResponse | null> => {
  try {
    const result = await query.post("auth/register", {
      json: body,
    });
    const json = await result.json<AuthLoginPostResponse>();
    return json;
  } catch (e) {
    handleError(e);
    return null;
  }
};

export const fetchMyInfoQuery = async (): Promise<AuthMeGetResponse | null> => {
  try {
    const result = await query.get("auth/me");
    const json = await result.json<AuthMeGetResponse>();
    return json;
  } catch (e) {
    handleError(e);
    return null;
  }
};

export const editMyInfoQuery = async (
  body: AuthMePatchBody,
): Promise<AuthMePatchResponse | null> => {
  try {
    const result = await query.patch("auth/me", { json: body });
    const json = await result.json<AuthMePatchResponse>();
    return json;
  } catch (e) {
    handleError(e);
    return null;
  }
};
