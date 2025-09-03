import { RouterProvider } from 'react-router-dom';
import { router } from 'scopes/core/routing';

export const App = () => {
  return (
    <RouterProvider router={router} />
  );
};