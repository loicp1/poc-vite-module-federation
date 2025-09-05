import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
      <p>Identity app</p>

      <Outlet />
    </div>
  );
};