import { Outlet } from "react-router-dom"
import { StandaloneProvider } from "scopes/core/hooks/useStandalone";

interface LayoutProps {
  standalone?: boolean;
};

export const Layout = ({ standalone = true }: LayoutProps) => {
  return (
    <StandaloneProvider value={standalone}>
      <p>Store app</p>

      <Outlet />
    </StandaloneProvider>
  );
};