import { groups } from "config/mock";
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
          {groups.map((group) => (
            <tr key={group.id}>
              <td>{group.label}</td>
              <td>
                <button onClick={() => navigate(`/${routes.groups.root}/${group.id}`)}>
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