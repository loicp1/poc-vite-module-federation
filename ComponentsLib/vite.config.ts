import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts'
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    viteTsconfigPaths(),
    dts({
      include: ['src'],
      outDir: 'dist',
      entryRoot: 'src',
    }),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/main.ts',
      formats: ['es'],
      fileName: 'index',
    },
  },
});