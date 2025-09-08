import { registers, userLoggedIn } from "config/mock";
import { useNavigate, useParams } from "react-router-dom";
import { useStandalone } from "scopes/core/hooks/useStandalone";
import { isCashier } from "utils";

export const Detail = () => {
  const navigate = useNavigate();
  const standalone = useStandalone();

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
              <>
                <button
                  disabled={!isCashier(userLoggedIn)}
                  style={{ height: 24 }}
                >
                  {value === "open" ? "Close" : "Open"}
                </button>

                {!isCashier(userLoggedIn) && (
                  <span>
                    You must be a cashier to open or close a register.
                    
                    {!standalone && (
                      // TODO: export routes from remote 2 (identity) and use them here
                      <a onClick={() => navigate(`/identity/users/${userLoggedIn.id}`)} style={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        marginLeft: 4,
                        color: 'blue',
                      }}>
                          Click to access user page
                      </a>
                    )}
                  </span>
                )}
              </>
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