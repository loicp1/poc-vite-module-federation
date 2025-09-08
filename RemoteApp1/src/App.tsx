import { RouterProvider } from "react-router-dom";
import { getRouter } from "scopes/core/routing";

export const App = () => {
  const router = getRouter();

  return (
    <RouterProvider router={router} />
  );
};