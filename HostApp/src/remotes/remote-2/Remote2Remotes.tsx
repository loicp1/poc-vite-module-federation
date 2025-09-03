import { Fallback } from '../Fallback';
import React from 'react';
import type { AppProps } from 'remote-2/App';

const LazyApp = React.lazy(() =>
  import('remote-2/App').then((module) => ({ default: module.App }))
);

export const App = (props: AppProps) => (
  <React.Suspense fallback={<Fallback />}>
    <LazyApp {...props} />
  </React.Suspense>
);