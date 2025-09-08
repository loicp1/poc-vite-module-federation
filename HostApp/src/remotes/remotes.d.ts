declare module 'remote-1/routes' {
  import type { RouteObject } from "react-router-dom";

  // TODO: how to import type of function from remote without having a lib?
  export const getRoutes: ({ standalone }: { standalone?: boolean }) => RouteObject[];
};

declare module 'remote-2/routes' {
  import type { RouteObject } from "react-router-dom";

  // TODO: how to import type of function from remote without having a lib?
  export const getRoutes: ({ standalone }: { standalone?: boolean }) => RouteObject[];
};