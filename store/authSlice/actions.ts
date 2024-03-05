import {
  loginQuery,
  registerQuery,
} from "@services/targetHuntApi/queries/auth";
import { useGlobalStore } from "@store/store";
import { AuthLoginPostBody, AuthRegisterPostBody } from "target-hunt-bridge";

export const loginAction = async (body: AuthLoginPostBody): Promise<void> => {
  const setState = useGlobalStore.setState;
  const response = await loginQuery(body);

  if (response === null) {
    return;
  }

  setState({ token: response.token });
};

export const registerAction = async (
  body: AuthRegisterPostBody,
): Promise<void> => {
  const setState = useGlobalStore.setState;
  const response = await registerQuery(body);

  if (response === null) {
    return;
  }

  setState({ token: response.token });
};

export const logoutAction = async (): Promise<void> => {
  useGlobalStore.setState({ token: null });
};
