import type { RouteObject } from 'react-router-dom';

// TODO: types
export const loadRemote1Routes = async (): Promise<RouteObject[]> => {
  const module = await import('remote-1/routes');
  return module.getRoutes({ standalone: false });
};