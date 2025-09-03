import { registers } from "config/mock";
import { useNavigate, useParams } from "react-router-dom";

export const Detail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const register = registers.find((register) => register.id.toString() === id);

  return (
    <div>
      {register ? (
        Object.entries(register).map(([key, value]) => (
          <div key={`${register.id}-${key}`} style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}>
            <span>{key}: {value}</span>

            {key === "status" && (
              <button style={{
                height: 24,
              }}>
                {value === "open" ? "Close" : "Open"}
              </button>
            )}
          </div>
        ))
       ) : (
        <p>Register not found</p>
      )}

      <button onClick={() => navigate('../')}>Go back</button>
    </div>
  );
};