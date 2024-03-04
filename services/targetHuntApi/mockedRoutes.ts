import { MockRouter } from "@services/mocking/MockRouter";

export const mockRouter = new MockRouter();

mockRouter.addRoute(
  { pathname: "/auth/login$", method: "POST" },
  {
    data: {
      token: "that's my token baby",
    },
    status: 200,
  },
);
