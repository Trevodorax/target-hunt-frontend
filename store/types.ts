export interface AuthSlice {
  token: string | null;
  id: string | null;
  pseudo: string | null;
  email: string | null;
}

export interface LayoutSlice {
  isDrawerOpen: boolean;
}

export interface GlobalStore extends AuthSlice, LayoutSlice {}
