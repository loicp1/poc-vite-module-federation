import { RouterProvider } from 'react-router-dom';
import { useRouter } from 'scopes/core/hooks/useRouter';

export const App = () => {
  const router = useRouter();

  return router ? (
    <RouterProvider router={router} />
  ) : (
    <div>Loading remote routes...</div>
  );
};