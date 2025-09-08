import { Layout } from "scopes/core/containers";
import { Home } from "scopes/core/pages";
import { groupsRoutes } from "scopes/groups/routing";
import { usersRoutes } from "scopes/users/routing";

/**
 * 
 * @param root - If root path is provided, the routes are configured for being used as a sub-route of another app.
 * @returns 
 */
export const getRoutes = ({ standalone }: { standalone: boolean } | undefined = { standalone: true }) => ([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home isAppRoot={standalone} />,
      },
      groupsRoutes,
      usersRoutes,
    ],
  },
]);