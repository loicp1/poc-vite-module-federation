import { routes } from "config/routes";
import { RouteObject } from "react-router-dom";
import { Detail, List, Root } from "scopes/registers/pages";

export const registersRoutes: RouteObject = {
  path: routes.registers.root,
  element: <Root />,
  children: [
    {
      path: routes.registers.children.list,
      element: <List />,
    },
    {
      path: routes.registers.children.detail,
      element: <Detail />,
    },
  ],
};