import { Outlet, useNavigate } from "react-router-dom";

export const Root = () => {
  const navigate = useNavigate();

 return (
   <div>
    <p>Group management</p>

    <Outlet />
  </div>
 );
};