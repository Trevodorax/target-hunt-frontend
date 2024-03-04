import { mockBeforeRequestInterceptor } from "@services/targetHuntApi/mockSetup";
import ky from "ky";

export const query = ky.create({
  prefixUrl: "localhost:3000",
  headers: {
    Authorization: "",
  },
  hooks: {
    beforeRequest: [mockBeforeRequestInterceptor],
  },
});
