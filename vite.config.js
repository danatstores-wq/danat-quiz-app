import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/danat-quiz-app/',
  server: {
    port: 5000,
    host: true
  }
});
