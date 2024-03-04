import { MockRouter } from "@services/mocking/MockRouter";

export const mockRouter = new MockRouter();

mockRouter.addRoute(
  { pathname: "/auth/(login|register)$", method: "POST" },
  {
    data: {
      token: "=== here is your token sir ===",
    },
    status: 200,
  },
);
