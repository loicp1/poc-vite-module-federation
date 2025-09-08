import { routes } from "config/routes";
import { useNavigate } from "react-router-dom";

interface HomeProps {
  isAppRoot: boolean;
};

export const Home = ({ isAppRoot }: HomeProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(`${routes.groups.root}`)}>Groups</button>
      <button onClick={() => navigate(`${routes.users.root}`)}>Users</button>

      {!isAppRoot && (
        <button onClick={() => navigate('../')}>Go back</button>
      )}
    </div>
  );
};