export const ROUTES = {
  home: "/",
  login: "/login",
  register: "/register",
  resetPassword: "/reset-password",
  terms: "/terms",
  privacy: "/privacy",
} as const;

export type RouteKey = keyof typeof ROUTES;

