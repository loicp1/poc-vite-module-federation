import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import { loadRemote1Routes } from 'remotes/remote-1';
import { loadRemote2Routes } from 'remotes/remote-2';
import { Layout } from "scopes/core/containers";
import { Home } from "scopes/core/pages";

export const useRouter = () => {
  const [remote1Routes, setRemote1Routes] = useState<RouteObject[]>([]);
  const [remote2Routes, setRemote2Routes] = useState<RouteObject[]>([]);

  const [ router, setRouter ] = useState<ReturnType<typeof createBrowserRouter> | null>(null);

  useEffect(() => {
    loadRemote1Routes().then(setRemote1Routes);
    loadRemote2Routes().then(setRemote2Routes);
  }, []);

  useEffect(() => {
    if (remote1Routes.length && remote2Routes.length) {
      const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "store",
              element: <Outlet />,
              children: remote1Routes,
            },
            {
              path: "identity",
              element: <Outlet />,
              children: remote2Routes,
            }
          ],
        },
        {
          path: "*",
          element: <div>404 Not Found</div>,
        }
      ]);

      setRouter(router);
    }
  }, [remote1Routes, remote2Routes]);

  return router;
};