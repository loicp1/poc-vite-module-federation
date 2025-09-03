import { routes } from "config/routes";
import { useNavigate } from "react-router-dom";

interface HomeProps {
  isAppRoot: boolean;
};

export const Home = ({ isAppRoot }: HomeProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(`/${routes.groups.root}`)}>Groups</button>
      <button onClick={() => navigate(`/${routes.users.root}`)}>Users</button>

      {!isAppRoot && (
        // TODO: find a better to do this without app reload
        // navigate("/") and navigate("../") don't work because navigation is relative to the app router
        <button onClick={() => window.location.href = "/"}>Go back</button>
      )}
    </div>
  );
};