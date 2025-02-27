import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://lrnr-app-team-2.onrender.com",
    },
  },
  test: {
    environment: 'jsdom',  // ✅ Ensure Vitest runs in a DOM-like environment
    globals: true,  // ✅ Enables global Jest-like functions (`describe`, `it`, `expect`)
    setupFiles: './src/test/setup.js', // ✅ Ensure correct path
    include: ['src/pages/test/**/*.test.jsx'], // ✅ Only runs tests in this folder
  },
});
