import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <p>Registers management</p>

      <Outlet />
    </div>
  );
};