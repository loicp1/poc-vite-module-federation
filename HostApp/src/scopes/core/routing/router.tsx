import { routes } from "config/routes";
import { createBrowserRouter } from "react-router-dom";
import { App as Remote1App } from 'remotes/remote-1';
import { App as Remote2App } from 'remotes/remote-2';
import { Layout } from "scopes/core/containers";
import { Home } from "scopes/core/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: routes.remote1,
        element: <Remote1App standalone={false} />,
      },
      {
        path: routes.remote2,
        element: <Remote2App standalone={false} />,
      }
    ],
  },
]);