import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
      <p>Store app</p>

      <Outlet />
    </div>
  );
};