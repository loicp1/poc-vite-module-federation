import { users } from "config/mock";
import { useNavigate, useParams } from "react-router-dom";

export const Detail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const user = users.find((user) => user.id.toString() === id);

  return (
    <div>      
      {user ? (
        Object.entries(user).map(([key, value]) => (
          <p key={`${user.id}-${key}`}>
            {key}: {value}
          </p>
        ))
       ) : (
        <p>User not found</p>
      )}

      <button onClick={() => navigate('../')}>Go back</button>
    </div>
  );
};