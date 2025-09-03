import { routes } from "config/routes";
import { RouteObject } from "react-router-dom";
import { Detail, List, Root } from "scopes/groups/pages";

export const groupsRoutes: RouteObject = {
  path: routes.groups.root,
  element: <Root />,
  children: [
    {
      path: routes.groups.children.list,
      element: <List />,
    },
    {
      path: routes.groups.children.detail,
      element: <Detail />,
    }
  ],
};