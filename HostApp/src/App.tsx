import { App as Remote1App } from 'remotes/remote-1';
import { App as Remote2App } from 'remotes/remote-2';

export const App = () => {
  return (
    <div>
      <p>Host app</p>

      <Remote1App />
      <Remote2App />
    </div>
  );
};