import { Fallback } from '../Fallback';
import React from 'react';

const LazyApp = React.lazy(() =>
  import('remote-2/App').then((module) => ({ default: module.App }))
);

export const App = () => (
  <React.Suspense fallback={<Fallback />}>
    <LazyApp />
  </React.Suspense>
);