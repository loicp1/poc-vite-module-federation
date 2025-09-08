import type { RouteObject } from 'react-router-dom';

// TODO: types
export const loadRemote2Routes = async (): Promise<RouteObject[]> => {
  const module = await import('remote-2/routes');
  return module.getRoutes({ standalone: false });
};