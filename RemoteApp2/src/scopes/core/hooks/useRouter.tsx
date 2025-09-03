import { routes } from "config/routes";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "scopes/core/containers";
import { Home } from "scopes/core/pages";
import { groupsRoutes } from "scopes/groups/routing";
import { usersRoutes } from "scopes/users/routing";

export const useRouter = (standalone: boolean) => createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home isAppRoot={standalone} />,
      },
      groupsRoutes,
      usersRoutes,
    ],
  },
],
{
  basename: standalone
    ? document.getElementsByTagName('base')[0]?.getAttribute('href') ?? "/"
    : routes.self
});