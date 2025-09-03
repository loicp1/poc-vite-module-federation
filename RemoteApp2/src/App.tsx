import { RouterProvider } from "react-router-dom";
import { useRouter } from "scopes/core/hooks/useRouter";

export interface AppProps {
  standalone?: boolean;
};

export const App = ({ standalone = true }: AppProps) => {
  const router = useRouter(standalone);

  return (
    <RouterProvider router={router} />
  );
};