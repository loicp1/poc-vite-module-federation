import { users } from "config/mock";
import { routes } from "config/routes";
import { useNavigate } from "react-router-dom";

export const List = () => {
  const navigate = useNavigate();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <button onClick={() => navigate(`${user.id}`)}>
                  Display detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => navigate('../')}>Go back</button>
    </div>
  )
};