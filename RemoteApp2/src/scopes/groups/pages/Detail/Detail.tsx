import { groups } from "config/mock";
import { useNavigate, useParams } from "react-router-dom";

export const Detail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const group = groups.find((group) => group.id.toString() === id);

  return (
    <div>
      {group ? (
        Object.entries(group).map(([key, value]) => (
          <p key={`${group.id}-${key}`}>
            {key}: {value}
          </p>
        ))
       ) : (
        <p>Group not found</p>
      )}

      <button onClick={() => navigate('../')}>Go back</button>
    </div>
  );
};