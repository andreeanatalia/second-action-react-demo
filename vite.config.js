import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
      // Only apply Fast Refresh when NOT running in a Jest/test environment
      fastRefresh: process.env.NODE_ENV !== 'test',
    })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
});
