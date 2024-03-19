import { SimplifiedResponse } from "@services/mocking/MockRouter";

import { mockRouter } from "../mockedRoutes";

// if it returns a response, the query doesn't even leave this, and terminates immediately
// if it returns a request, there is no interception, and the query goes to the real API
export async function mockBeforeRequestInterceptor(
  request: Request,
): Promise<Response | Request> {
  const mockHeaders = { "Content-Type": "application/json" };

  const mockedResponse = getMockedResponse(request);

  if (mockedResponse === null) {
    return request;
  }

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return new Response(JSON.stringify(mockedResponse.data), {
    status: mockedResponse.status,
    headers: mockHeaders,
  });
}

// gets the data for this route from the mocks
function getMockedResponse(request: Request): SimplifiedResponse | null {
  const url = new URL(request.url);

  const key = { pathname: url.pathname + url.search, method: request.method };

  return mockRouter.getRoute(key) ?? null;
}
