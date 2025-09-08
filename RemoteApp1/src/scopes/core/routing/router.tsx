import { createBrowserRouter, Outlet } from "react-router-dom";
import { getRoutes } from "scopes/core/routing";

export const getRouter = () => {
  const appRoutes = getRoutes();
  
  return createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      children: appRoutes,
    },
  ], {
    basename: document.getElementsByTagName('base')[0]?.getAttribute('href') ?? "/",
  });
};