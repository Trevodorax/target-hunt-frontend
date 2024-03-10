import {
  editMyInfoQuery,
  fetchMyInfoQuery,
  loginQuery,
  registerQuery,
} from "@services/targetHuntApi/queries/auth";
import { useGlobalStore } from "@store/store";
import { router } from "expo-router";
import Toast from "react-native-toast-message";
import {
  AuthLoginPostBody,
  AuthMePatchBody,
  AuthRegisterPostBody,
} from "target-hunt-bridge";

export const loginAction = async (body: AuthLoginPostBody): Promise<void> => {
  const setState = useGlobalStore.setState;
  const response = await loginQuery(body);

  if (response === null) {
    return;
  }

  setState({ token: response.token });

  fetchMyInfoAction();

  router.push("/");
  Toast.show({ type: "success", text1: "You are connected !" });
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

  fetchMyInfoAction();

  router.push("/");
  Toast.show({ type: "success", text1: "You are connected !" });
};

export const logoutAction = async (): Promise<void> => {
  useGlobalStore.setState({ token: null, id: null, email: null, pseudo: null });
};

export const fetchMyInfoAction = async (): Promise<void> => {
  const info = await fetchMyInfoQuery();
  if (!info) {
    return;
  }
  useGlobalStore.setState({
    id: info.id,
    pseudo: info.pseudo,
    email: info.email,
  });
};

export const editMyInfoAction = async (
  newInfo: AuthMePatchBody,
): Promise<void> => {
  const editedInfo = await editMyInfoQuery(newInfo);
  if (!editedInfo) {
    return;
  }

  useGlobalStore.setState({
    email: editedInfo.email,
    pseudo: editedInfo.pseudo,
  });
  Toast.show({ type: "success", text1: "Successfully edited personal info" });
};
