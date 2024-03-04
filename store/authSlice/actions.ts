import {
  loginQuery,
  registerQuery,
} from "@services/targetHuntApi/queries/auth";
import { useGlobalStore } from "@store/store";
import { LoginAction, RegisterAction } from "@store/types";

export const loginAction: LoginAction = async (body): Promise<void> => {
  const setState = useGlobalStore.setState;
  const response = await loginQuery(body);

  if (response === null) {
    return;
  }

  setState({ token: response.token });
};

export const registerAction: RegisterAction = async (body): Promise<void> => {
  const setState = useGlobalStore.setState;
  const response = await registerQuery(body);

  if (response === null) {
    return;
  }

  setState({ token: response.token });
};
