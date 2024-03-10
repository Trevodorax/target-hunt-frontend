import { useGlobalStore } from "@store/store";

export function authInterceptor(request: Request): void {
  const { token } = useGlobalStore.getState();
  request.headers.set("Authorization", `Bearer ${token}`);
}
