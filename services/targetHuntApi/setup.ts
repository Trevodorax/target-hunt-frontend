import { mockBeforeRequestInterceptor } from "@services/targetHuntApi/mockSetup";
import ky from "ky";

import { authInterceptor } from "./authInterceptor";

export const query = ky.create({
  prefixUrl: "http://localhost:3000",
  headers: {
    Authorization: "",
  },
  hooks: {
    beforeRequest: [authInterceptor, mockBeforeRequestInterceptor],
  },
});
