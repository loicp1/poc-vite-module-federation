import { registers } from "config/mock";
import { routes } from "config/routes";
import { useNavigate } from "react-router-dom";

export const List = () => {
  const navigate = useNavigate();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Label</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {registers.map((register) => (
            <tr key={register.id}>
              <td>{register.label}</td>
              <td>
                <button onClick={() => navigate(`/${routes.registers.root}/${register.id}`)}>
                  Display detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => navigate('../')}>Go back</button>
    </div>
  );
};