export interface AuthSlice {
  token: string | null;
}

export interface LayoutSlice {
  isDrawerOpen: boolean;
}

export interface GlobalStore extends AuthSlice, LayoutSlice {}
