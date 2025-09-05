import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
      <p>Super app</p>

      <Outlet />
    </div>
  );
};