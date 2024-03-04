import { loginQuery } from "@services/targetHuntApi/queries/auth";
import { useGlobalStore } from "@store/store";
import { LoginAction } from "@store/types";

export const loginAction: LoginAction = async (body): Promise<void> => {
  const setState = useGlobalStore.setState;
  const response = await loginQuery(body);

  if (response === null) {
    return;
  }

  setState({ token: response.token });
};
