import { mockBeforeRequestInterceptor } from "@services/targetHuntApi/setup/mockSetup";
import ky from "ky";

import { authInterceptor } from "./setup/authInterceptor";

export const query = ky.create({
  prefixUrl: "http://localhost:3000",
  headers: {
    Authorization: "",
  },
  hooks: {
    beforeRequest: [authInterceptor, mockBeforeRequestInterceptor],
  },
});
