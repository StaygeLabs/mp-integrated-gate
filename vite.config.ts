import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    tsconfigPaths(),
    EnvironmentPlugin('all', {
      prefix: 'REACT_APP_',
      defineOn: 'import.meta.env',
    }),
  ],
  build: {
    sourcemap: true, // Source map generation must be turned on,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            const module = id.split('node_modules/').pop().split('/')[0];
            return `vendor/${module}`;
          }
        },
      },
    },
  },
});
