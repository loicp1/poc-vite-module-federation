import { routes } from "config/routes";
import { useNavigate } from "react-router-dom";
import { useStandalone } from "scopes/core/hooks/useStandalone";

export const Home = () => {
  const navigate = useNavigate();
  const isAppRoot = useStandalone();

  return (
    <div>
      <button onClick={() => navigate(`${routes.registers.root}`)}>Registers</button>

      {!isAppRoot && (
        <button onClick={() => navigate('../')}>Go back</button>
      )}
    </div>
  );
};