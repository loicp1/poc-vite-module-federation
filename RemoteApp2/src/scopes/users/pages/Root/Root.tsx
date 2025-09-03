import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <p>User management</p>

      <Outlet />
    </div>
  );
};