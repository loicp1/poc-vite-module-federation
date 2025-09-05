import { Fallback } from '../Fallback';
import React from 'react';
import type { AppProps } from 'remote-1/App';

const LazyApp = React.lazy(() =>
  import('remote-1/App').then((module) => ({ default: module.App }))
);

export const App = (props: AppProps) => (
  <React.Suspense fallback={<Fallback />}>
    <LazyApp {...props} />
  </React.Suspense>
);