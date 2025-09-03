import { routes } from "config/routes";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(`/${routes.remote1}`)}>Open Store app</button>
      <button onClick={() => navigate(`/${routes.remote2}`)}>Open Identity app</button>
    </div>
  );
};