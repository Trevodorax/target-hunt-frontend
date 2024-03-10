export interface SimplifiedResponse {
  data: object;
  status: number;
}

interface RequestKey {
  pathname: string;
  method: string;
}

// class for handling mocked routes
export class MockRouter {
  private readonly routes: Map<RequestKey, SimplifiedResponse>;

  constructor() {
    this.routes = new Map<RequestKey, SimplifiedResponse>();
  }

  addRoute(route: RequestKey, response: SimplifiedResponse): void {
    this.routes.set(route, response);
  }

  getRoute(key: RequestKey): SimplifiedResponse | null {
    for (const [routeKey, value] of this.routes.entries()) {
      if (this.matchRoute(routeKey, key)) {
        return value;
      }
    }

    return null;
  }

  matchRoute(savedRoute: RequestKey, currentRoute: RequestKey): boolean {
    const regex = new RegExp(savedRoute.pathname);

    return (
      (regex.test(currentRoute.pathname) ||
        currentRoute.pathname === savedRoute.pathname) &&
      savedRoute.method === currentRoute.method
    );
  }
}
