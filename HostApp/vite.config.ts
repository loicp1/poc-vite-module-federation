import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

const REMOTE_1_URL = 'http://localhost:5001/remoteEntry.js';
const REMOTE_2_URL = 'http://localhost:5002/remoteEntry.js';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    viteTsconfigPaths(),
    federation({
      name: 'host',
      remotes: {
        'remote-1': {
          name: 'remote-1',
          entry: REMOTE_1_URL,
          type: 'module',
        },
        'remote-2': {
          name: 'remote-2',
          entry: REMOTE_2_URL,
          type: 'module',
        },
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
    port: 5000,
  },
});