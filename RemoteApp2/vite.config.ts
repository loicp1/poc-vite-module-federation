import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    viteTsconfigPaths(),
    federation({
      name: 'remote-2',
      filename: 'remoteEntry.js',
      exposes: {
        './routes': './src/scopes/core/routing/routes.tsx',
      },
      shared: {
        'react': { singleton: true },
        'react-dom': { singleton: true },
        'react-router-dom': { singleton: true },
      },
    }),
  ],
  build: {
    outDir: 'dist',
    modulePreload: false,
    target: 'esnext',
    minify: false,
  },
  server: {
    port: 5002,
  },
});