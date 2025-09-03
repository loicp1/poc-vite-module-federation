import { routes } from "config/routes";
import { RouteObject } from "react-router-dom";
import { Detail, List, Root } from "scopes/users/pages";

export const usersRoutes: RouteObject = {
  path: routes.users.root,
  element: <Root />,
  children: [
    {
      path: routes.users.children.list,
      element: <List />,
    },
    {
      path: routes.users.children.detail,
      element: <Detail />,
    },
  ],
};